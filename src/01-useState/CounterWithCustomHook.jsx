import { useCounter } from '../hook/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>Counter With Custom Hook: {counter} </h2>
      <hr />

      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};
