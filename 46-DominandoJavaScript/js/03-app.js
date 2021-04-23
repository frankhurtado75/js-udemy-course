// Coercion
// Es la conversión automática o implicita de valores de un tipo de dato a otro

// Si tienes un String y un número y quieres sumarlos:

// Coercion Implicita
const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2);

// También puedes convertir un string a número:
// Coercion Explicita
const numero3 = "20";

console.log(Number(numero3))

// O un número a string...
const numero4 = 20;
console.log(numero4.toString());

// Un arreglo o un objeto se puede modificar a String
const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));