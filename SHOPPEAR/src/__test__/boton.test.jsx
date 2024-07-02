    // BotonCantidad.test.js
    import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import BotonCantidad from '../Components/BotonCantidad/botonCantidad';

    test('incrementa el contador y llama a onClick con el nuevo valor', () => {
    const setMount = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(<BotonCantidad mount={1} setMount={setMount} onClick={onClick} stock={10} />);

    const incrementButton = getByText('+');
    fireEvent.click(incrementButton);

    expect(setMount).toHaveBeenCalledWith(2);
    expect(onClick).toHaveBeenCalledWith(2);
    });