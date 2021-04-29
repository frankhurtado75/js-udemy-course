// Al tener este fetch, un nombre de app y una página de inicio, ya podremos agregar nuestra PWA a la página de inicio
// Click en los 3 putos More Tools -> Remote Devices y escribir.
// http://127.0.0.1:5500/index.html
// Presionar Open

// Nombre del cache
const nombreCache = 'apv-v1';

// Archivos cache
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

// Instalar service workers, no se puede utilizar window, por lo tanto se utiliza self
self.addEventListener('install', e => {
    console.log('Instalado el service workers');

    // Carga archivos cache
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('Cacheando');
                // Carga todos los archivos
                cache.addAll(archivos);
            })
    )
});

// Activar server worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        // Borra los demás versiones de cache
                        .map(key => caches.delete(key))
                )
            })
    )
});

// Evento Fetch para descargr archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch', e);

    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache;
        })
        .catch(() => caches.match('/error.html'))
    )
});