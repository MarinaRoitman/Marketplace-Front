/*import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BotonCantidad from "../Components/BotonCantidad/botonCantidad";

    test("incrementa el contador al hacer clic en el botón de incremento", () => {
        const props = {
            onClickMock: jest.fn(),
            mount: 0,
            setMount: jest.fn()
        };

        render(
            <BotonCantidad mount={mount} setMount={setMount} onClick={onClickMock} {...props}/>
        );
        screen.debug();
        const button = screen.getByText(/text/i)
        fireEvent.click(getByText("+"));

        expect(setMount).toHaveBeenCalled();
        expect(onClickMock).toHaveBeenCalled();
    });

    test("decrementa el contador al hacer clic en el botón de decremento", () => {
        const onClickMock = jest.fn();
        const mount = 2;
        const setMount = jest.fn();

        const { getByText } = render(
            <BotonCantidad mount={mount} setMount={setMount} onClick={onClickMock} />
        );

        fireEvent.click(getByText("-"));

        expect(setMount).toHaveBeenCalledWith(1);
        expect(onClickMock).toHaveBeenCalledWith(1);
    });

    test("no decrementa el contador si el valor es 1 al hacer clic en el botón de decremento", () => {
        const onClickMock = jest.fn();
        const mount = 1;
        const setMount = jest.fn();

        const { getByText } = render(
            <BotonCantidad mount={mount} setMount={setMount} onClick={onClickMock} />
        );

        fireEvent.click(getByText("-"));

        expect(setMount).not.toHaveBeenCalled();
        expect(onClickMock).not.toHaveBeenCalled();
    });*/
