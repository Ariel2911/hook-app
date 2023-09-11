import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hook/useCounter"

describe('Pruebas en useCounter', () => {

  test('debe retornar los valores por defecto', ()=> {
    const { result } = renderHook( () => useCounter())

    const { counter, decrement, increment ,reset } = result.current
    
    expect(counter).toBe(10)

    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('debe de inicicializar el counter con el valor de 100', () => {
    const{ result } = renderHook(() => useCounter(100))

    const { counter } = result.current

    expect(counter).toBe(100)
  })
})