/*
-localStorage se mantiene en a nivel local
-sessionStorage se mantiene solo en la sesion (al cerrar se pierden los datos)

Ambos elementos solo almacenan datos string
*/

// Agregar localStorage
localStorage.setItem('nombre', 'Franklin');
sessionStorage.setItem('apellido', 'Hurtado');

// Convierte un objeto en string
const producto = {
    nombre: 'Monitos 24 pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

// Convierte un arreglo en string
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));