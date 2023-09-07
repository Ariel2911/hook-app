export const TodoItem = ({ description }) => {
  return (
    <li>
      <span>{description}</span>
      <button>Borrar</button>
    </li>
  );
};
