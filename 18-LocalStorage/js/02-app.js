// Obtener de regreso localStorage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
const meses = localStorage.getItem('meses');

// Convertir de un string a un objeto/arreglo
console.log(JSON.parse(productoJSON));
console.log(JSON.parse(meses));