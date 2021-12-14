// Los strings o cadenas de texto representan un texto que se puede asignar a una variable

// Existen 3 formas de crearlos
// String
const producto = "Monitor 20\""; 
console.log(producto);

// String
const producto2 = String('Monitor 24 "'); 
console.log(producto2);

// String a travez de un objeto
const producto3 = new String('Monitor 27 Pulgadas'); 
console.log(producto3);

// Utiliza comillas sencillas o dobles pero nunca mezcladas
const producto = 'Monitor 20 Pulgadas';
const producto2 = "Monitor 20 Pulgadas";
// const producto3 = "Monitor 20 Pulgadas'; (error)

// Permite usar una comilla doble dentro de una comilla doble
const producto4 = "Monitor 24\"";
console.log(producto4);