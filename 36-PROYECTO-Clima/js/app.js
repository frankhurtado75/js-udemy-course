// Variables
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

// Eventos
window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})

// Funciones
function buscarClima(e){
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === "" || pais === ''){
        mostrarError('Ambos campos son requeridos');
        return;
    }

    // Consultar API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje){

    // Crear una alerta
    const alerta = document.querySelector('.bg-red-100');
    if(!alerta) {
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'relative', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        container.appendChild(alerta);

        // Eliminar alerta luego de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}

function consultarAPI(ciudad, pais){
    
    // ID necesario para consumir la API
    const appID = 'fff5a827475b78668f196ffd473fbe6d';
    
    // Leer la url  y agregar el API key
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    // Muestra un spinner de carga
    Spinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {

            // Limpiar HTML previo
            limpiarHTML()

            if(datos.cod === '404'){
                mostrarError('Ciudad no encontrada');
                return;
            }

            // Imprime la respuesta en el HTML
            mostrarClima(datos);
        })
}

function mostrarClima(datos){
    const {name, main: {temp, temp_max, temp_min} } = datos;

    const centigrados = KelvinACentigrados(temp);
    const min = KelvinACentigrados(temp_min);
    const max = KelvinACentigrados(temp_max);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en: ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl')
    
    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451;`;
    tempMinima.classList.add('text-xl')

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`;
    tempMaxima.classList.add('text-xl')

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMinima);
    resultadoDiv.appendChild(tempMaxima);
    resultado.appendChild(resultadoDiv)
}

const KelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {

    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;
    resultado.appendChild(divSpinner);
}