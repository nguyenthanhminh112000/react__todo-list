import React from 'react';
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        placeholder="Input your task here"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit" onClick={handleAddTodo}>
        Add Task
      </button>
    </form>
  );
};

export default InputField;
