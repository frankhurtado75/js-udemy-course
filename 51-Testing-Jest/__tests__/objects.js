const cliente = {
    nombre: 'Franklin Gabriel',
    balance: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        // Para comparar enteros mayores a el numero introducido 
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Franklin', () => {
        expect(cliente.nombre).toBe('Franklin Gabriel');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Franklin José');
    });

    test('No tiene 500',() => {
        expect(cliente.balance).not.toBe(300);
    });
});