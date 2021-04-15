//Try Catch es intentar hacer algo, y si no se puede, obtener una excepción
/* Usar solamente partes criticas, como una consulta a una API, autenticar a un usuario, acciones que nos permitan que en caso de fallar nuestra aplicación continue funcionando pero también obtener un mensaje de error... */
console.log(1+1);
try {
    hola();
} catch (error) {
    console.log(error);
}

console.log(2+2);