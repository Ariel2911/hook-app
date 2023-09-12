import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hook';

jest.mock('../../src/hook/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {
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
});
