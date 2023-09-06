import { useCounter, useFetch } from '../hook';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

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
        <LoadingQuote />
      ) : (
        data.map(({ quote, author }, index) => (
          <Quote key={index} quote={quote} author={author} />
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
