// Currying y Partials
// es dividir una función que toma más de un parametro, en argumentos de forma parcial
const suma = (a,b,c) => a + b + c;

const parcial = a => b => c => suma(a, b, c);

const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);   
const resultado = segundoNumero(3);

console.log(resultado);

// Otra opción seria
const resultadoParcial = parcial(5)(5)(5);
console.log(resultadoParcial);