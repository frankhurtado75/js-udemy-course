const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700}
];

//Iterador con arreglos
for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//Metodo mas simple, .forEach
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})