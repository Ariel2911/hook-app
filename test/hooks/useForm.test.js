import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hook/useForm"
import { act } from "@testing-library/react";

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

  test('debe cambiar el nombre del formulario', () => {
    const newValue = 'juan';

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange} = result.current

    act(() => {
      onInputChange({target: { name: 'name', value: newValue }})
    });

    expect(result.current.name).toBe(newValue);

    expect(result.current.formState.name).toBe(newValue);

  });
})