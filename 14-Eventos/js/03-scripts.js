// Eventos en el teclado
const busqueda = document.querySelector('.busqueda');

// Precionar tecla
busqueda.addEventListener('keydown', () => {
    console.log('Se preciono una tecla');
})

// Se dejo de precionar una tecla
busqueda.addEventListener('keyup', () => {
    console.log('Se dejo de precionar una tecla');
})

// Copiar, ctrl + C
busqueda.addEventListener('copy', () => {
    console.log('Copiado...');
})

// Paste, ctrl + v
busqueda.addEventListener('paste', () => {
    console.log('Pegado...');
})

// Cut, ctrl + x
busqueda.addEventListener('cut', () => {
    console.log('Cortado...');
})

// Input, hace todo lo anterior
busqueda.addEventListener('input', () => {
    console.log('Input');
})

// Salir del input con click
busqueda.addEventListener('blur', () => {
    console.log('Salir del input');
})

// Mostrar en la consola lo que se escribe
busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);
})

// Validacion para string vacio
busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('fallo la validación');
    }
})