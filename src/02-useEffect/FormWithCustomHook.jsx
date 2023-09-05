import { useForm } from '../hook/useForm';

export const FormWithCustomHook = () => {
  const { formState, onInputChange } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  return (
    <>
      <h2>Formulario simple</h2>
      <hr />

      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="ariel@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        placeholder="ariel@gmail.com"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </>
  );
};
