console.log('Hola');
console.log('Mundo');

function hola() {
    console.log('ok');
    console.log('Hola'); 
    console.log('Mundo');
}

// Prompt
prompt('Como te llamas?');

// Limpiar la consola
console.clear();

// Alerta
alert('Error');

// Confirmacion
confirm('Desea borrar este elemento?');

// Arreglos
console.log([1,2,3]);

// Arreglos de tablas
console.table([1,2,3]);

// Error de consola
console.error('Error');

// Advertencia
console.warn('Advertencia');

// Tiempo de ejecución de código
console.time('hola'); 
console.warn('Advertencia');
console.warn('Advertencia');
console.warn('Advertencia');
console.warn('Advertencia');
console.warn('Advertencia');
console.warn('Advertencia');
console.timeEnd('hola');

/*08 - Obteniendo ayuda con ESLint para revisar errores de código.
// Crear el archivo .eslintrc.json

{
    "parserOptions" : {
        "ecmaVersion": 6
    },
    "rules" : {
        "semi": ["error", "always"] // Muestra errores de código o también errores de código
    }
}
*/