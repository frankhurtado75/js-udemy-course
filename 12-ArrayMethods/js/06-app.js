const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// .every, devuelve un booleano si todos los elementos dentro del arreglo cumplen la condicion 
const resultado1 = carrito.every(p => p.precio < 1000);
console.log(resultado1);

// .every revisa la condicion de todos los elemetos, .some revisa la condicion de al menos un elemento
const resultado2 = carrito.some( producto => producto.precio < 500 );
console.log(resultado2)