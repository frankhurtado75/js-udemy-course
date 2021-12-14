// Métodos para strings
const producto = 'Monitor 20 Pulgadas';

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo '));

// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1)); // Si el primer número es mayor, no va a cortar hacia atras

// Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

// Selecciona el primer caracter
const usuario = "Frank";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));