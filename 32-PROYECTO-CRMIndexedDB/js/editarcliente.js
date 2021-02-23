(function(){
    let DB;

    const nombreInput = document.querySelector('#nombre');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        // Verificar el ID de la url 
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCLiente = parametrosURL.get('id');
        if(idCLiente){
            setTimeout(() => {
                obtenerCliente(idCLiente);
            }, 100);
        };
    });

    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e){
            const cursor = e.target.result;

            if(cursor){
                if(cursor.value.id === Number (id)){
                    llenarFormulario(cursor.value);
                };
                cursor.continue();
            };
        };
    };

    function llenarFormulario(datosCliente  ){
        const {nombre} = datosCliente;

        nombreInput.value = nombre;
    }

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function(){
            console.log('Hubo un error 2 ');
        };

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;
        };
    }
})();
