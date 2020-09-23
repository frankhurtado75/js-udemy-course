// Eventos en submit, formularios
const formulario = document.querySelector('#formulario');

// Submit, dar click al enviar al formulario 
formulario.addEventListener('submit', validarFormulario = (e) => {

    // Detiene la accion por default
    e.preventDefault();

    console.log('Consultar una api');

    console.log(e.target.action);
})