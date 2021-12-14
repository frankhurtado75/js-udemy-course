// Funciones para convertir a números
const numero1 = 20;
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20.2;

console.log(numero1);

// Convierte string a número entero
console.log(Number.parseInt(numero2));

// Convierte string a número flotante
console.log(Number.parseFloat(numero2));

// Retorna que no es un número
console.log(Number.parseInt(numero3));

// Revisa si un número es entero o no en booleano
console.log(Number.isInteger(numero1)); // Si
console.log(Number.isInteger(numero2)); // No
console.log(Number.isInteger(numero3)); // No
console.log(Number.isInteger(numero4)); // No
