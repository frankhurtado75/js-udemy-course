function conectarDB(){
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = function(){
        console.log('Hubo un error 2 ');
    };

    abrirConexion.onsuccess = function(){
        DB = abrirConexion.result;
    };
};

function imprimirAlterta(mensaje, tipo){
    const alerta = document.querySelector('.alerta');

    if(!alerta){
        // Crear la alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add("px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center", "border", "alerta");

        if(tipo === 'error'){
            divMensaje.classList.add('bg-red-100', "border-red-400", "text-red-700");
        } else {
            divMensaje.classList.add('bg-green-100', "border-green-400", "text-green-700");
        };
    
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        formulario.appendChild(divMensaje);

        // Quitar el alert despues de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    };
};