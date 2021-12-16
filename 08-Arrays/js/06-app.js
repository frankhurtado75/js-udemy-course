const carrito = [];

// Definir un producto
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

// Spread Operator es la forma declarativa de agregar productos al carro de compras
let resultado;

// Añade productos al final del arreglo
resultado = [...carrito, producto];
resultado = [...resultado, producto2];

// Añade productos al inicio
resultado = [producto3, ...resultado ];

console.table(resultado);