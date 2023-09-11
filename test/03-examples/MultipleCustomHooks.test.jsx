import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';

describe('Pruebas en <MultipleCustomHooks />', () => {
  test('debe mostrar el componente por defecto', () => {
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
});
