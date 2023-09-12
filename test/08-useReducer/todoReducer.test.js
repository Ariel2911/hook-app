import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

  const initialState = {
    id: 1,
    description: 'Demo todo',
    done: false,
  }
  test('debe regresar el estado inicial', () => {

    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  })
})