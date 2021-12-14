// Concatenar o unir 2 textos o variables
const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD ';

// Método para concatenar

// Concactenar una variable
console.log(producto.concat(precio));

// Concactenar un string
console.log(producto.concat('En descuento'));

// Otras formas de concatenar
console.log( producto + " Con un precio de: " + precio);
console.log("El producto " + producto + "tiene un precio de " +  precio );
console.log("El producto ", producto , "tiene un precio de " ,  precio );

// Template literal o Template String
console.log(`El Producto ${producto} tiene un precio de $ ${precio}`);