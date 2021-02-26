// Detectar si tenemos o no RED
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Si está conectado');
    } else {
        console.log('No está conectado');
    }
}