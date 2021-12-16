const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700}
];

const nuevoArreglo = carrito.map(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

const nuevoArreglo2 = carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

// Ambos trabajan igual, la diferencia es que .map crea un arreglo nuevo y .forEach no
console.log(nuevoArreglo);
console.log(nuevoArreglo2);