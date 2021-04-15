// 2 O más Async Await
function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando Clientes');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');           
        }, 5000);
    });
}

function descargarNuevosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando Pedidos');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');           
        }, 5000);
    });
}

const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();