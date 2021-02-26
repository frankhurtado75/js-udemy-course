// Callback Hell
const paises = [];

function mostrarPaises(){
    console.log(paises);
};

function nuevoPais(pais, callback){
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
};

function iniciarCallbackHell(){
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);

        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);

            setTimeout(() => { 
                nuevoPais('Inglaterra', mostrarPaises);
            }, 3000);

        }, 3000);

    }, 3000);
};

iniciarCallbackHell();