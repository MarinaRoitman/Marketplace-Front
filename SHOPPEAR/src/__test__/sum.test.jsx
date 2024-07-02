import sumarNumeros from './suma';

test('sumar 1 + 2 es igual a 3', () => {
    const res = sumarNumeros(1, 2);
    expect(res).toBe(3);
});

