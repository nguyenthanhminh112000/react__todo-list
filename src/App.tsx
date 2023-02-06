import React from 'react';
import styles from './App.module.css';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
// types
import { Todo } from './model/todo.model';

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>('');
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const handleAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodo('');
      setTodos([...todos, { id: Date.now(), todo, isFinish: false }]);
    }
  };
  const handleDeleteTodo = (id: number): void => {
    setTodos(todos.filter((td) => td.id !== id));
  };
  const handleDoneTodo = (id: number): void => {
    setTodos(
      todos.map((td) =>
        td.id === id ? { ...td, isFinish: !td.isFinish } : td,
      ),
    );
  };
  const handleUpdateTodo = (id: number, content: string): void => {
    setTodos(todos.map((td) => (td.id === id ? { ...td, todo: content } : td)));
  };
  console.log(todo);
  console.log(todos);

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Tasktify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleDoneTodo={handleDoneTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default App;
