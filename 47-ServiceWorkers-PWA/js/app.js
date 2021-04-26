// Consulta si el navegador soporta el service worker
if('serviceWorker' in navigator){
    // Registra el service worker
    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('Se instalo correctamente', registrado))
        .catch(error => console.log('Falló la instalación', error));
} else {
    console.log('Service Workers no soportado');
}
