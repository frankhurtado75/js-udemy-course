// Pure Functions o funciones puras
// Son funciones que retornan un dato pero no modifican los valores de las variables
// Con una entrada de datos deben retornar la misma cantidad de entradas
// Usualmente el resultado deberá ser una nueva variable, ya modificada.
const numero1 = 5;

const duplicar = n => n * 2;

const resultado = duplicar(numero1);

console.log(numero1);
console.log(resultado);