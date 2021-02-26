// Speech API
const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(){

    const SpeechRecognition =  webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Arrancar recognition
    recognition.start();

    // Comienza a grabar
    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.innerHTML = "Escuchando...";
    };
    
    // Cuando termina de grabar
    recognition.onspeechend = function(){
        salida.innerHTML = "Se dejó de grabar";
        recognition.stop();
    };

    // Resultado de la grabación
    recognition.onresult = function(e) {

        console.log(e.results);

        const {transcript, confidence} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML =  `Seguridad:  ${ parseInt(confidence*100)} %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };
};