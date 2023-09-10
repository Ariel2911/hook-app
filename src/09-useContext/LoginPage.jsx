import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const user1 = {
  id: 123,
  name: 'Ariel',
  mail: 'ariel@mail.com',
};

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  return (
    <>
      <h2>LoginPage</h2>
      <hr />

      <button
        onClick={() => {
          setUser(user1);
        }}
      >
        Establecer usuario
      </button>
    </>
  );
};
