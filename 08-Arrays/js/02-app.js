const numeros = [10,20,30,40,50, [1,2,3]];

console.log(numeros);

//Acceso de tabla
console.table(numeros);

// Acceder al arreglo de acuerdo a su posicion
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[20]); //No existe
console.log(numeros[5][1]); //Acceder al arreglo de un arreglo