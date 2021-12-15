// Se usa el 'modo estricto' en la estrutura y ejecucion del codigo
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Previene el cambio de propiedades de un objeto
Object.freeze(producto);
// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

// Confirma si un objeto esta congelado/freeze
console.log(Object.isFrozen(producto));