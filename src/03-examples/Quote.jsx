import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, heigth: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();

    setBoxSize({ height, width });
  }, []);

  return (
    <>
      <blockquote>
        <p ref={pRef}>{quote}</p>
        <footer>{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)} </code>
    </>
  );
};
