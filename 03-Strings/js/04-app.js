// Métodos para strings
const producto = '            Monitor 20 Pulgadas                  ';
console.log(producto);
console.log(producto.length);

// Elimina el espacio en blanco al inicio
console.log(producto.trimStart());

// Elimina el espacio en blanco al final
console.log(producto.trimEnd());

// Elimina ambos espacios en blanco
console.log(producto.trimStart().trimEnd());
console.log(producto.trim())