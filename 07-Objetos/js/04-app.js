const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Destructuring, extrae del objeto y crear variable en un paso
const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);