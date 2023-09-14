import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <LoginPage />', () => {
  const user = {
    id: 1,
    name: 'Ariel',
  };

  const setUserMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe llamar el setUser cuando se accione el button', () => {
    const contextValue = {
      user: user,
      setUser: setUserMock,
    };

    render(
      <UserContext.Provider value={contextValue}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      mail: 'ariel@mail.com',
      name: 'Ariel',
    });
  });
});
