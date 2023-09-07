import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import { useCallback } from 'react';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  return (
    <>
      <h2>CallbackHook: {counter}</h2>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
