import React from 'react';
import styles from './TodoItem.module.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Todo } from '../../model/todo.model';
interface Props {
  todo: Todo;
  handleDoneTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  handleUpdateTodo: (id: number, content: string) => void;
}
const TodoItem = ({
  todo,
  handleDoneTodo,
  handleDeleteTodo,
  handleUpdateTodo,
}: Props) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [todoContent, setTodoContent] = React.useState<string>(todo.todo);

  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect((): void => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  return (
    <div className={styles.todoItem}>
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={todoContent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setTodoContent(e.currentTarget.value);
          }}
        />
      ) : todo.isFinish ? (
        <s>{todo.todo}</s>
      ) : (
        <h4>{todo.todo}</h4>
      )}

      <div>
        <span>
          <AiFillEdit
            onClick={() => {
              if (!edit) {
                setEdit((prevEdit) => !prevEdit);
                return;
              }
              handleUpdateTodo(todo.id, todoContent);
              setEdit((prevEdit) => !prevEdit);
            }}
          />
        </span>
        <span>
          <MdDone
            onClick={() => {
              handleDoneTodo(todo.id);
            }}
          />
        </span>
        <span>
          <AiFillDelete
            onClick={() => {
              handleDeleteTodo(todo.id);
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
