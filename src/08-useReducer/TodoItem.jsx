export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  const liStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const spanStyle = {
    cursor: 'pointer',
    textDecoration: `${todo.done ? 'line-through' : ''}`,
  };

  return (
    <li style={liStyle}>
      <span style={spanStyle} onClick={() => onToggleTodo(todo.id)}>
        {todo.description}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  );
};
