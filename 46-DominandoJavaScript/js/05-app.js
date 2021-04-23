// Explicit binding
function persona(el1, el2) {
    console.log(`Mi Nombre es: ${this.name} & I  listen: ${el1} & ${el2} `);
}
const informacion = {
    name: 'Juan',
    job: 'Developer'
}
const musicaFavorita = ['Heavy Metal', 'Rock'];

// .call existe en todas las funciones de JS y puedes pasarle un objeto o arreglo dentro de la función
// Importante: el segundo argumento es un array y tienes que pasar cada elemento del array de forma individial con su posición
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// .apply, existe en todas las funciones pero toma un array completo...
persona.apply(informacion, musicaFavorita);

// .bind va a ser como .call en que le pasas cada argumento de forma individual, pero te crea una nueva función
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();