import {suma} from '../js/funciones.js';

describe('Suma de 2 números', () => {
    test('Suma de 10 y 20, debe dar como resultado 30', () => {
        expect(suma(20,10)).toBe(30);
    });
});