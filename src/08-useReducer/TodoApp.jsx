import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() + 1,
    description: 'Recolectar la piedra del tiempo',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleTodo = (todo) => {
    console.log({ todo });
  };

  return (
    <>
      <h2>
        TodoApp: 10, <small>pendientes 2</small>
      </h2>
      <hr />

      <TodoList todos={todos} />

      <div>
        <h3>Agregar Todo</h3>
        <hr />

        <TodoAdd handleTodo={handleTodo} />
      </div>
    </>
  );
};
