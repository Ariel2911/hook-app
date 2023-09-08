import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useEffect } from 'react';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);
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

        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
