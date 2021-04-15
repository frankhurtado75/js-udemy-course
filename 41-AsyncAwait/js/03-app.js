function descargarCliente(){
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El listado se descargó completamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

// Async await con function express
const ejecutar = async () => {
    try {
        console.log(1+1);

        const respuesta = await descargarCliente();

        console.log(2+2);
        console.log(respuesta);
        
    } catch (error) {
        console.log(error);
    }
}

ejecutar();