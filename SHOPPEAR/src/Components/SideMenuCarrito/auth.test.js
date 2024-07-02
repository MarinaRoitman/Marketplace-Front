import { checkAuth } from './sidemenucarrito';

// Mock para la función navigate
const mockNavigate = jest.fn();

describe('Función checkAuth', () => {
  beforeEach(() => {
    // Reiniciamos el mock de navigate antes de cada test
    mockNavigate.mockClear();
  });

  test('debería navegar a /Login si no hay token presente', () => {
    // Simulamos que no hay token
    checkAuth(null, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledWith('/Login');
  });

  test('debería navegar a /Pago si hay token presente', () => {
    // Simulamos que hay un token válido
    checkAuth('mockToken', mockNavigate);
    expect(mockNavigate).toHaveBeenCalledWith('/Pago');
  });
});