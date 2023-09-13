import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hook/useTodos';

jest.mock('../../src/hook/useTodos');

describe('Pruebas en <TodoApp />', () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'todo #1',
        done: false,
      },
      {
        id: 2,
        description: 'todo #2',
        done: true,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('debe mostrar el componente correctamente', () => {
    render(<TodoApp />);

    expect(screen.getAllByText('todo #1')).toBeTruthy();
    expect(screen.getAllByText('todo #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
