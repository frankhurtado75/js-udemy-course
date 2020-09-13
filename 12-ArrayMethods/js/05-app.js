const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// .forEach 
let resultado1;
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado1 = carrito[index];
    }
})

console.log(resultado1);

// .find crea un arreglo basado en el primer elemento que cumpla la condicion
const resultado2 = carrito.find(producto => producto.nombre === 'Tablet');
console.log(resultado2);