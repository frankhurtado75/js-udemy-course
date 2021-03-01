// Fetch API desde un JSON (Array)
const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatosJSONArray);

function obtenerDatosJSONArray(){
    fetch('data/empleados.json')
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTMLJSONArray(resultado))
}

// Imprimir en el HTML
function mostrarHTMLJSONArray(empleados){

    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach(empleado => {

        const {id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    })

    contenido.innerHTML = html;
}