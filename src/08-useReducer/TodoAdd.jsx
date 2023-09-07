import { useForm } from '../hook/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 2) return;

    const newTodo = {
      id: new Date().getTime() + 1,
      description,
      done: false,
    };

    onNewTodo(newTodo);

    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        value={description}
        name="description"
        onChange={onInputChange}
      />
      <button>Agregar</button>
    </form>
  );
};
