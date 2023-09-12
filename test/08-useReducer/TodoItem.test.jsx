import { render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Demo todo',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe mostrar el Todo pendiente de completar', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');

    expect(liElement.style._values).toEqual({
      display: 'flex',
      'justify-content': 'space-between',
    });

    expect(liElement.innerHTML).toContain('cursor: pointer');

    expect(liElement.innerHTML).not.toContain('text-decoration: line-through');

    expect(liElement.innerHTML).toContain(todo.description);
  });
});
