"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//No permite agregar ni elminar las propiedades pero si modificar
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

//Comprueba que el objeto se puede sellar
console.log(Object.isSealed(producto));