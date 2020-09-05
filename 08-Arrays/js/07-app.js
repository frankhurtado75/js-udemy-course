const carrito = [];

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

const producto4 = {
    nombre: 'Camara',
    precio: 600
}

const producto5 = {
    nombre: 'Mouse',
    precio: 20
}

carrito.push(producto);
carrito.unshift(producto2);
carrito.unshift(producto3);
carrito.unshift(producto4);
carrito.unshift(producto5);

//Eliminar el ultimo elemento del carro de compras
carrito.pop();

//Eliminar el primer elemento del carro de compras
carrito.shift();

//Eliminar un elemento de acuerdo a su posicion
carrito.splice(1,1)

console.table(carrito);