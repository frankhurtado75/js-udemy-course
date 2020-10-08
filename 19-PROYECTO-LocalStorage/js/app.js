// Variales
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
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

            // Crea el html
            const li = document.createElement('li');

            // Añade el texto
            li.innerText = tweet.tweet;

            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

// Agrega los tweet al localStorage
function sincronizarStorage(){
    
}
// Limpiar el html
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

