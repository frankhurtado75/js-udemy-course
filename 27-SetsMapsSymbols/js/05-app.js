// Symbols
// Symbol es creado y se agrega a una propiedad del objeto, no pueden ahber dos symbols iguales
// Los symbols no son iterables
const sym = Symbol();
const sym2 = Symbol();

if(sym === sym2){
    console.log('Son iguales')
} else {
    console.log('Son diferentes');
}

console.log(Symbol() === Symbol());

// Agregar nombre y aprellido como datos del objetos
const nombre = Symbol();
const apellido = Symbol();

const persona = {};

persona[nombre] = 'Franklin';
persona[apellido] = 'Hurtado';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
console.log(persona.nombre); // Undefined

// Para acceder se deben usar las llaves
console.log(persona[nombre]); 

// Definir uan descripción del Symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Franklin';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);