import { useState } from 'react';

export const TodoAdd = ({ handleTodo }) => {
  const [input, setInput] = useState('');

  const onAddTodo = (e) => {
    e.preventDefault();

    if (input.trim().length <= 2) return;

    const newTodo = {
      id: new Date().getTime() + 1,
      description: input,
      done: false,
    };

    handleTodo(newTodo);
  };

  return (
    <form onSubmit={(e) => onAddTodo(e)}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
};
