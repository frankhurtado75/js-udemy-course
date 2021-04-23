// Hoisting
// Se referiere a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución)
// JavaScript se ejecuta en 2 partes. Creación y ejecución
obtenerCliente('Franklin');

function obtenerCliente(nombre){
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente('Gabriel');


// En la primera parte, JavaScript crea y registra todas las funciones, es por eso que este código funciona bien
// Y puedes llamar la función antes de crearla, o crearla y después llamarla y esta bien, va a funcionar.
// Si se utiliza la forma de function expression si recuerdas eso nos daría un error

// obtenerCliente2('Juan'); // Esto no va a servir
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente2('Juan'); // ESTO SI VA A SERVIR