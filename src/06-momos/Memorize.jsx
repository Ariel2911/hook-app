import { useState } from 'react';
import { useCounter } from '../hook';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter();

  const [show, setShow] = useState(true);

  return (
    <>
      <h2>
        Counter: <Small value={counter} />{' '}
      </h2>
      <hr />

      <button onClick={() => increment()}>+1</button>

      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
