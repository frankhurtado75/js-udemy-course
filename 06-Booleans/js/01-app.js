// Crear y comparar booleans
const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1); // True
console.log(boolean2); // False
console.log(typeof boolean1); // Boolean
console.log(boolean1 === boolean3); // False

const boolean4 = new Boolean(true);
console.log(typeof boolean4);