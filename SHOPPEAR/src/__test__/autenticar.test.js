/*const  checkAuth  = require('../Components/SideMenuCarrito/sidemenucarrito');
const  navigate  = require('react-router-dom'); // Ajusta esto con la ruta correcta de navegación

jest.mock('react-router-dom', () => ({
  navigate: jest.fn(),
}));

describe('checkAuth function', () => {
  beforeEach(() => {
    navigate.mockClear(); // Limpiamos el mock de navigate antes de cada prueba
  });

  test('navega a /Pago si hay un token', () => {
    // Simulamos que hay un token
    checkAuth('token-valido');
    
    // Verificamos que navigate haya sido llamado con '/Pago'
    expect(navigate).toHaveBeenCalledWith('/Pago');
  });

  test('navega a /Login si no hay un token', () => {
    // Simulamos que no hay un token (token es undefined, null, o vacío)
    checkAuth(null);
    
    // Verificamos que navigate haya sido llamado con '/Login'
    expect(navigate).toHaveBeenCalledWith('/Login');
  });
});
*/

// autenticar.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OffCanvasExample from '../Components/SideMenuCarrito/sidemenucarrito';

// Mock de las funciones de react-router-dom
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// Mock de las funciones de react-redux
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('checkAuth function', () => {
  const mockNavigate = jest.fn();
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Limpiamos los mocks antes de cada prueba
    useNavigate.mockReturnValue(mockNavigate);
    useDispatch.mockReturnValue(mockDispatch);
  });

  test('navega a /Pago si hay un token', () => {
    // Mock del estado del selector
    useSelector.mockImplementation(callback => {
      return callback({
        auth: { token: 'token-valido' },
        cart: { cartItems: [] }
      });
    });

    const { getByText } = render(<OffCanvasExample />);

    // Encuentra el botón "Comprar" y haz clic en él
    const comprarButton = getByText('Comprar');
    comprarButton.click();
    
    // Verificamos que navigate haya sido llamado con '/Pago'
    expect(mockNavigate).toHaveBeenCalledWith('/Pago');
  });

  test('navega a /Login si no hay un token', () => {
    // Mock del estado del selector
    useSelector.mockImplementation(callback => {
      return callback({
        auth: { token: null },
        cart: { cartItems: [] }
      });
    });

    const { getByText } = render(<OffCanvasExample />);

    // Encuentra el botón "Comprar" y haz clic en él
    const comprarButton = getByText('Comprar');
    comprarButton.click();
    
    // Verificamos que navigate haya sido llamado con '/Login'
    expect(mockNavigate).toHaveBeenCalledWith('/Login');
  });
});