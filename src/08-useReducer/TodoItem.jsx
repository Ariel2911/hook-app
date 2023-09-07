export const TodoItem = ({ description }) => {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{description}</span>
      <button>Borrar</button>
    </li>
  );
};
