import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hook/useForm"

describe('Pruebas en useForm.js', () => {

  const initialForm = {
    name: 'Ariel', 
    email: 'ariel@mail.com'
  };
  
  test('debe regresar los valores por efecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name ,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function) ,
      onResetForm: expect.any(Function) 
    });

  });
})