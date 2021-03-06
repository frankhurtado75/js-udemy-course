// Importa todo a travez de un objeto
import * as UI from './interfaz.js';
import API from './api.js';

// Eventos
UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    artista = document.querySelector('#artista').value;
    cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        // El usuario deja los campos vacios. Mostrar error
        UI.divMensajes.textContent = 'Error! Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);
        return;
    } 

    // El formulario está completo. Realizar consulta a la API
    const busqueda = new API(artista, cancion);
    console.log(busqueda);
    
});