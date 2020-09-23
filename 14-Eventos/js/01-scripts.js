// Eventos

// Primero carga el script luego el HTML
console.log('Primero');

// Se ejecuta al cargar el HTML
document.addEventListener('DOMContentLoaded', () => {
    console.log('Tercero, documento Listo');
});

console.log('Segundo');