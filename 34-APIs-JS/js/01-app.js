// Permiso de notificación
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => {
            console.log('El resultado es', resultado);
        })
});

// Ver notificación
const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission == 'granted'){
        const notificacion = new Notification('Esta es la notificación', {
            // Agrega icono a la notificación
            icon: 'img/ccj.png',
            // Mensaje de la notificación
            body: 'Código con Juan, los mejores tutoriales'
        });

        // Ir a un enlace al hacer click a la notificación
        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com')
        }
    }
});

