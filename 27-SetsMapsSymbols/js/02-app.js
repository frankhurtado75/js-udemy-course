// Weakset

// Solo se pueden agregar objetos
const ws = new WeakSet();
const nombre = 'Frank';

const cliente = {
    nombre: 'Frank',
    saldo:100
}

ws.add(cliente);
console.log(ws);

// No tienen la propiedad size aunque si tienen length y has
// Tampoco son iterables ni tienen keys, values entries etc.

// Error al colocar un string
// ws.add(nombre);
// console.log(ws);