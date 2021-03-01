// Fetch API consumir datos desde un txt
const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatosTxt);

function obtenerDatosTxt(){
    // URL
    const url = 'data/datos.txt';

    // Consulta a la url
    fetch(url)
        .then(respuesta => {
            /*
                console.log(respuesta) 
                console.log(respuesta.status) // Estado 
                console.log(respuesta.statusText) // Estado en string
                console.log(respuesta.url) // URL a la que consultamos
                console.log(respuesta.type) // Tipo de consulta
            */

            // Hay que indicar que método vamos a utilizar. Hay 2 JSON o Texto
            return(respuesta.text()) // Texto
        })

        .then(datos => {
            mostrarHTMLTxt(datos)
        })

        // Busqueda de posible error
        .catch(error => {
            console.log(error)
        })
}

// Imprimir en el HTML
function mostrarHTMLTxt(txt){

    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>${txt}</p>
    `;
}