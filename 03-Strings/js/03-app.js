const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD ';

//Metodo para concatenar
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

//Concatenar
console.log( producto + " Con un precio de: " + precio);
console.log("El producto " + producto + "tiene un precio de " +  precio );
console.log("El producto ", producto , "tiene un precio de " ,  precio );

//Template literal
console.log(`El Producto ${producto} tiene un precio de $ ${precio}`);