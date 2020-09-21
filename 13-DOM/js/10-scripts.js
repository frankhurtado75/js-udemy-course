// Crear HTML desde manejo del DOM con JS

// Crear enlace
const enlace = document.createElement('a');

// Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

// Añadiendo href
enlace.href = '/nuevo-enlace';

// Agregar target
enlace.target = "_blank";

// Agrandar data-enlace
enlace.setAttribute('data-enlace', 'nuevo-enlace');

// Agregar clase
enlace.classList.add('alguna-clase');

console.log(enlace);

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');

// Insertar navegacion

// Parar agregar al final
// navegacion.appendChild(enlace)

// Para agregar en determinada posicion
navegacion.insertBefore(enlace, navegacion.children[1]); // Requiere dos argumentos (elemento para agregar, donde se quiere mostrar)

console.log(navegacion.children);


// Crear un CARD 

// Creacion de parrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

// Agregar parrafos a la clase 'info'
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);

// Asignar info
card.appendChild(info);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);