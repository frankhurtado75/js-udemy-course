// Comparacion de valores
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 números son iguales
console.log(numero1 == numero3); // False
console.log(numero1 == numero2); // True

// Comparador estricto, === compara el tipo de dato
console.log(numero1 === parseInt(numero2)); // True
console.log(numero1 === numero2); // False
console.log(typeof numero1);
console.log(typeof numero2);

// Diferente a
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // True
console.log(numero1 != numero2); // False
console.log(numero1 !== parseInt(numero2)); // False