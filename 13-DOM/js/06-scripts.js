// Modificar texto e imagenes
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); // si en el CSS tiene la propiedad visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // si lo va a encontrar
console.log(encabezado.innerHTML); // se trae el HTML

// Texto
const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// Imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';