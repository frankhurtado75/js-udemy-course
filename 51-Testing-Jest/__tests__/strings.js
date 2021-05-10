const password = '123456';

describe('Valida que el password no se encuentre vacio y tenga 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        // Verifica que un objeto tenga longitud de .length
        expect(password).toHaveLength(6);
    });

    test('Password no está vacio', () => {
        // .not comprueba el opuesto
        expect(password).not.toHaveLength(0);
    });
});