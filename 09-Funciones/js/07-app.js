//Comunicacion entre funciones, se pueden ejecutar funciones dentro de otras
iniciarApp();

function iniciarApp(){
    console.log('Iniciando app');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Franklin');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario} `);
}