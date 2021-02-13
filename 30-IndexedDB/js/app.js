// IndexedDB
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 3000);
})

function crmDB(){
    // Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear una BD');
    }

    // Si se creó bien
    crmDB.onsuccess = function(){
        DB = crmDB.result;
        console.log(DB);
    }

    // Configuración en la base de datos
    crmDB.onupgradeneeded = function(e){
        // Es el evento que se va a correr tomamos la base de datos
        let db = e.target.result;

        // Definir el objectstore: primer parametro el nombre de la BD, segundo las opciones
        // Keypath es de donde se van a obtener los indices
        let objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas - Createindex
        // Nombre y keypath, 3ro los parametros, keypath esn este caso será el indice para poder realizar busqueda
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', { unique: true } );
        objectStore.createIndex('telefono', 'telefono', { unique: false } );

        console.log('DB creada y lista');
    }
}

function crearCliente(){

    // Crear nuevo registro
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(event){
        console.log('Transacción Completada');
    }

    transaction.onerror = function(event){
        console.log('Hubo un error en la transacción');
    }

    let objectStore = transaction.objectStore('crm');
    console.log(objectStore);

    const nuevoCliente = {
        nombre: 'Franklin',
        email: 'frankhurtado75@gmail.com',
        telefono: 0414-4684884,
    }

    let peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}