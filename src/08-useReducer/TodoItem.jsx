export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{todo.description}</span>
      <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  );
};
