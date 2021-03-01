// Fetch API desde un JSON (Object)
const cargarJSONObjBtn = document.querySelector('#cargarJSON');

cargarJSONObjBtn.addEventListener('click', obtenerDatosJSONObject);

function obtenerDatosJSONObject(){

    // Otra forma de asignar la url al fetch
    fetch('data/empleado.json')

        // Arrow function reducidas
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTMLJSONObject(resultado))
}

// Imprimir en el HTML
function mostrarHTMLJSONObject({empresa, id, nombre, trabajo}){

    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}