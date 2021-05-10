// Para actualizar snapshot: npm run test -- -u
const cliente = {
    nombre: 'Franklin GaBriel',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Franklin 2', () => {
        // Convierte el objeto en un string en otro archivo
        expect(cliente).toMatchSnapshot();
    });
});