import { render, screen, fireEvent } from '@testing-library/react';
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

  test('debe mostrar el Todo completado', () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');

    expect(liElement.innerHTML).toContain('text-decoration: line-through');
  });

  test('span debe llamar el ToggleTodo cuando se hace click sobre el', () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByText(todo.description);

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('button debe llamar el DeleteTodo cuando se hace click sobre el', () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
