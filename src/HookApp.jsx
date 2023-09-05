import { useState } from 'react';

export const HookApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  return (
    <>
      <h1>Hook App</h1>

      <p>counter1 {counter1}</p>
      <p>counter2 {counter2}</p>
      <p>counter3 {counter3}</p>

      <hr />

      <button
        onClick={() =>
          setCounter((counter) => ({ ...counter, counter1: counter1 + 1 }))
        }
      >
        +1
      </button>
    </>
  );
};
