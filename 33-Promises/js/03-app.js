// Promise

// - En los Promises hay 3 valores posibles, pendiente, no se ha cumplido o rechazado...
        // Fullfilled - se cumplió
        // Rejected - no se cumplió
        // Pending

// resolve: lo que se ejecuta o se cumple el promise
// reject: cuando hay un error en el promise
const aplicarDescuento = new Promise((resolve, reject) => {
    
    const descuento = false;

    if(descuento){
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
});

aplicarDescuento.then(resultado => console.log(resultado))
                .catch(error => console.log(error));

/*
aplicarDescuento.then(resultado => {
        console.log(resultado);
    }).catch( error => {
        console.log(error);
    });
*/