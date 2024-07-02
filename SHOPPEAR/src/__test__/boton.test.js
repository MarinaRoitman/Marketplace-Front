    // BotonCantidad.test.js
    // Aplicamos la lógica de negocio para el componente botonCantidad: 
    // En este caso si la cantidad del producto seleccionado es 1, el botón no debería permitir que se descuenten,
    // ya que seria incorrecto encontrarlo en el carrito con menos de un prod seleccionado. (1 Test)
    // En cambio, el botón para descontar la cantidad del producto si cumple con su función cuando la cantidad
    // es mayor a 1. (2 Test)

    import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import BotonCantidad from '../Components/BotonCantidad/botonCantidad';
    
    test('permite descontar cuando es mayor a 1', () => {
        const setMount = jest.fn();
        const onClick = jest.fn();
        const { getByText } = render(<BotonCantidad mount={2} setMount={setMount} onClick={onClick} />);
    
        const decrementButton = getByText('-');
        fireEvent.click(decrementButton);
    
        expect(setMount).toHaveBeenCalledWith(1);
        expect(onClick).toHaveBeenCalledWith(1);
    });
    
    test('no permite descontar cuando es 1', () => {
        const setMount = jest.fn();
        const onClick = jest.fn();
        const { getByText } = render(<BotonCantidad mount={1} setMount={setMount} onClick={onClick} />);
    
        const decrementButton = getByText('-');
        fireEvent.click(decrementButton);
    
        expect(setMount).not.toHaveBeenCalled();
        expect(onClick).not.toHaveBeenCalled();
    });