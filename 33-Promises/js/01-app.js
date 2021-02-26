// Callbacks
const paises = ['Francia', 'España', 'Inglaterra', 'Portugal', 'Australia'];

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais=>{
            console.log(pais);
        });
    }, 1000);
};

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000 );
}

mostrarPaises();

// Agregar nuevo pais, mostrarPaises es el callback
nuevoPais('Alemania', mostrarPaises); 