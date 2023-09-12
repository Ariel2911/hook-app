import { render, screen, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from '../../src/hook';

jest.mock('../../src/hook/useFetch');
jest.mock('../../src/hook/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: mockDecrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Cargando...'));

    expect(screen.getByText('BreakingBad Quotes'));

    const addButton = screen.getByRole('button', {
      name: 'Incrementar cantidad de frase',
    });
    const subtractButton = screen.getByRole('button', {
      name: 'Decrementar cantidad de frase',
    });

    expect(addButton.disabled).toBe(true);
    expect(subtractButton.disabled).toBe(true);

    // screen.debug();
  });

  test('debe mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'ariel', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('ariel'));
    expect(screen.getByText('Hola Mundo')).toBeTruthy;

    const addButton = screen.getByRole('button', {
      name: 'Incrementar cantidad de frase',
    });
    const subtractButton = screen.getByRole('button', {
      name: 'Decrementar cantidad de frase',
    });

    expect(addButton.disabled).toBeFalsy;
    expect(subtractButton.disabled).toBeFalsy;

    // screen.debug();
  });

  test('debe llamar la función incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'ariel', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const addButton = screen.getByRole('button', {
      name: 'Incrementar cantidad de frase',
    });

    fireEvent.click(addButton);

    expect(mockIncrement).toHaveBeenCalled();

    // screen.debug();
  });
  test('debe llamar la función decrementar', () => {
    render(<MultipleCustomHooks />);

    const sustracButton = screen.getByRole('button', {
      name: 'Decrementar cantidad de frase',
    });

    fireEvent.click(sustracButton);

    expect(mockDecrement).toHaveBeenCalled();
  });
});
