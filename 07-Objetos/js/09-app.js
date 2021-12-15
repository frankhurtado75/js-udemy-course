"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// No permite agregar ni eliminar las propiedades pero si modificar
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg"; // Error
// delete producto.precio; // Error

console.log(producto);

// Comprueba que el objeto se puede sellar
console.log(Object.isSealed(producto));