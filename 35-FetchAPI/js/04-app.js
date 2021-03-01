// Fetch API desde una API
const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatosAPI);

function obtenerDatosAPI(){

    // URL externo
    const urlAPI = 'https://picsum.photos/list';

    fetch(urlAPI)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTMLAPI(resultado))
}

function mostrarHTMLAPI(datos){

    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach(perfil => {
        const {author, post_url} = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `;
    })

    contenido.innerHTML = html;
}