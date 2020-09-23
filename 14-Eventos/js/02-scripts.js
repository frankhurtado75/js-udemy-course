// Eventos con el mouse
const nav = document.querySelector('.navegacion');

// Evento con un click, union de mousedown y mouseup
nav.addEventListener('click', () => {
    console.log('Click en nav');
})

// mouseenter: cuando el mouse esta sobre el elemento
nav.addEventListener('mouseenter', () => {
    console.log('El mouse esta sobre el elemento');
    nav.style.backgroundColor = 'black';
})

// mouseout: cuando el mouse se quita del elemento
nav.addEventListener('mouseout', () => {
    console.log('El mouse se quita del elemento');
    nav.style.backgroundColor = 'transparent';
})

// mousedown: similar al click
nav.addEventListener('mousedown', () => {
    console.log('Mousedown');
})

// mouseup: al dejar de precionar el boton de click
nav.addEventListener('mouseup', () => {
    console.log('Levantando click');
})

// dblclick: doble click
nav.addEventListener('dblclick', () => {
    console.log('Dobleclick');
})