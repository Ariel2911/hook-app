import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Demo todo',
    done: false,
  }];

  test('debe regresar el estado inicial', () => {

    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('debe agregar un todo', () => {

    const action = {
      type: '[TODO] Add Todo',
      payload:  {
        id: 1,
        description: 'new todo',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2)

    expect(newState).toContain(action.payload)

  });

  test('debe eliminar un todo', () => {

    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);

  });

})