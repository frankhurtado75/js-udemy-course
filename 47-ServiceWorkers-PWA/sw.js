// Instalar service workers, no se puede utilizar window, por lo tanto se utiliza self
self.addEventListener('install', e => {
    console.log('Instalado el service workers');
    console.log(e);
});

// Activar server worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    console.log(e);
})