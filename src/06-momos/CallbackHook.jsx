import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import { useCallback } from 'react';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((value = 1) => {
    setCounter((counter) => counter + value);
  }, []);

  return (
    <>
      <h2>CallbackHook: {counter}</h2>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
