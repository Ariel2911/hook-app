import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h2>Focus Screen</h2>
      <hr />

      <input ref={inputRef} type="text" placeholder="Ingrese su nombre" />

      <button onClick={onClick}>Set Focus</button>
    </>
  );
};
