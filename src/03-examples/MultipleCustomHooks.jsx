import { useCounter } from '../hook/useCounter';
import { useFetch } from '../hook/useFetch';

export const MultipleCustomHooks = () => {
  const { increment, decrement, counter } = useCounter(1);
  // console.log(counter);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <>
      <h2>BreakingBad Quotes</h2>
      <hr />

      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        data &&
        data.map(({ quote, author }, index) => (
          <blockquote key={index}>
            <p>{quote}</p>
            <footer>{author}</footer>
          </blockquote>
        ))
      )}

      <button disabled={isLoading} onClick={() => increment()}>
        Incrementar cantidad de frase
      </button>
      <button disabled={isLoading} onClick={decrement}>
        Decrementar cantidad de frase
      </button>
      <p>Cantidad de frases: {counter}</p>
    </>
  );
};
