// Variales
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners(){
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        crearHTML();
    });
}

// Funciones
function agregarTweet(e){
    e.preventDefault();

    // Textarea donde el usurario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validación
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');

        //Evita que se ejecuten en más lineas de código
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // Al agregar, crea el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contedio
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta después de 3 segundos 
    setTimeout(() => {
        mensajeError.remove();
    }, 5000);
}

// Muestra un listado de los tweets
function crearHTML(){

    limpiarHTML()

    if(tweets.length>0){
        tweets.forEach(tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crea el html
            const li = document.createElement('li');

            // Añade el texto
            li.innerText = tweet.tweet;

            // Asignar el botón
            li.appendChild(btnEliminar);

            // insertarlo en el html
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

// Agrega los Tweets actuales a Localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while( listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}