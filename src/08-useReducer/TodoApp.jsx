import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hook';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  return (
    <>
      <h2>
        TodoApp: {todosCount}, <small>pendientes {pendingTodosCount}</small>
      </h2>
      <hr />

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />

      <div>
        <h3>Agregar Todo</h3>
        <hr />

        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
