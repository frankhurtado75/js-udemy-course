(function(){
    let DB;
    
    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
    });

    // Crea la base de datos de IndexDB
    function crearDB(){
        const crearDB = window.indexedDB.open('crm', 1);

        // Si hay un error
        crearDB.onerror = function(){
            console.log('Hubo un error');
        };

        // Si todo esta bien, asignar a database el resultado
        crearDB.onsuccess = function(){
            DB = crearDB.result;
            console.log('Todo bien');
        };

        // Este método solo corre una vez
        crearDB.onupgradeneeded = function(e){

            // El evento que se va a correr tomamos la base de datos
            const db = e.target.result;

            // Definir el objectStore, primer parametro el nombre de la BD, segundo las opciones.
            // KeyPath es de donde se van a obtener los indices
            const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true});

            // Createindex, nombre y keypath, 3ro los parametros
            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});

            console.log('Database creada y lista');
        };
    };
})();