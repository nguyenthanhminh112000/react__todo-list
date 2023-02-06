import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../model/todo.model';
interface Props {
  todos: Todo[];
  handleDoneTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  handleUpdateTodo: (id: number, content: string) => void;
}

const TodoList = ({
  todos,
  handleDoneTodo,
  handleDeleteTodo,
  handleUpdateTodo,
}: Props) => {
  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDoneTodo={handleDoneTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </form>
  );
};

export default TodoList;
