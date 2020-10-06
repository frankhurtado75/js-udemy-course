// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear();
const min = max - 10;

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Muestra los automoviles al cargar
    mostrarAutos(autos);

    // Llena las opciones de año
    llenarSelect();
});

// Event Listeners para select 
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
})

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
})

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})

// Funciones
function mostrarAutos(autos){

    // Elimina el HTML previo
    limpiarHTML();

    // Crea los resultados de la busqueda
    autos.forEach((auto) => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color} 
        `; 

        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

// Limpiar html
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los años del select
function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        //Agrega las opciones de año al select
        year.appendChild(opcion);
    }
}

// Funcion que filtra la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    if(resultado.length){
        mostrarAutos(resultado);
    } else {
        sinResultado();
    }
    
}

// Funcion para cuando no se encuentran resultados
function sinResultado(){

    limpiarHTML();

    // Crea HTML para cuando no se encuentran resultados
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
    resultado.appendChild(noResultado);
}

// Filtros de select
function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    } else {
        return auto;
    }
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === parseInt(year);
    } else {
        return auto;
    }
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    } else {
        return auto;
    }
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    } else {
        return auto;
    }
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas) {
        return auto.puertas === parseInt(puertas);
    } else {
        return auto;
    }
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
    return auto.transmision === transmision;
    } else {
        return auto;
    }
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    } else {
        return auto;
    }
}