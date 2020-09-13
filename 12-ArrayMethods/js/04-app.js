const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado1, resultado2, resultado3, resultado4;

//Traer todos los productos que cuesten mas de 400
resultado1 = carrito.filter(producto => producto.precio >= 400);

//Traer todos los productos que cuesten menos de 600
resultado2 = carrito.filter(producto => producto.precio < 600);

//Traer todos los productos menos 'Audifonos'
resultado3 = carrito.filter(producto => producto.nombre !== 'Audifonos');

//Traer solo 'Audifonos'
resultado4 = carrito.filter(producto => producto.nombre === 'Audifonos');

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);