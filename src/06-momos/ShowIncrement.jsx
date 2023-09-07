import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('me volví a generar');
  return <button onClick={() => increment()}>Incremantar</button>;
});
