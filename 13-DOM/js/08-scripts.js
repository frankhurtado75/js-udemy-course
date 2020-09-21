// Traversing del DOM

//Traversing del padre al hijo
const navegacion = document.querySelector('.navegacion');

// Primer elemento del hijo
console.log(navegacion.firstElementChild)

// Ultimo elemento del hijo
console.log(navegacion.lastElementChild)

// Nodes
console.log(navegacion.childNodes) // Los espacios en blanco son considerados elementos
console.log(navegacion.children) // Los espacios en blanco no los considera elementos

// Etiqueta del node
console.log(navegacion.children[1].nodeName)

// Tipo de node
console.log(navegacion.children[1].nodeType)


const card = document.querySelector('.card');

// Cambiar texto
card.children[1].children[1].textContent = 'Mis sobrinos son bobos';

// Cambiar imagen
card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);

// Traversing del Hijo al padre

console.log(card.parentNode); // Los espacios en blanco son considerados elementos
console.log(card.parentElement.parentElement.parentElement); // Los espacios en blanco no los considera elementos


console.log(card);

// Siguiente elemento o hermano
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// Elemento previo o anterior
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling)