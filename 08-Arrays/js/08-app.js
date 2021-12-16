// Destructuring en arreglos
const numeros = [10,20,30,40,50];

// Destructura el segundo elemento y mantiene el resto dentro de un arreglo
const [ , segundo, ...tercero] = numeros;

console.log(segundo);
console.log(tercero); 