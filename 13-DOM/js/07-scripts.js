// Cambiar css de un elemento

const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');

// Agregar clase 
card.classList.add('nueva-clase', 'segunda-clase');

// Eliminar clase
card.classList.remove('segunda-clase');

console.log(card.classList);