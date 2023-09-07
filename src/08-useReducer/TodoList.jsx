import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [] }) => {
  return (
    <ul>
      {todos.map(({ id, description }) => (
        <TodoItem key={id} description={description} />
      ))}
    </ul>
  );
};
