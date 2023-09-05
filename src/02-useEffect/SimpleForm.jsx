import { useEffect } from 'react';
import { useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log('Componente montado');
  }, []);

  useEffect(() => {
    console.log('Formulario modificado');
  }, [formState]);

  useEffect(() => {
    console.log('Email modificado');
  }, [email]);

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
    </>
  );
};
