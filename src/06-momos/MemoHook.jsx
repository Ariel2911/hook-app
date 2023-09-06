import { useState } from 'react';
import { useCounter } from '../hook';
import { useMemo } from 'react';

const heavyStuff = (iterationNumber) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Iterando');
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h2>
        Counter: <small>{counter}</small>{' '}
      </h2>
      <hr />

      <p>{memorizeValue}</p>

      <button onClick={() => increment()}>+1</button>

      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
