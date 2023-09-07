import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: FontFaceSetLoadEvent,
  },
  {
    id: new Date().getTime() + 1,
    description: 'Recolectar la piedra del alma',
    done: FontFaceSetLoadEvent,
  },
];

export const TodoApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h2>
        TodoApp: 10, <small>pendientes 2</small>
      </h2>
      <hr />

      <ul>
        {todo.map(({ id, description }) => (
          <li key={id}>
            <span>{description}</span>
            <button>Borrar</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Agregar Todo</h3>
        <hr />

        <form>
          <input type="text" placeholder="¿Qué hay que hacer?" />
          <button>Agregar</button>
        </form>
      </div>
    </>
  );
};
