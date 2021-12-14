// Var: variable antigua

// Inicializar una variable con un valor
var producto = "Monitor de 24 Pulgadas";
console.log(producto);

// Las variables se puede resasignar
producto = "Monitor de 19 Pulgadas";
console.log(producto);

// JavaScript es un lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20;
console.log(producto);

// Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;
disponible = false;

// Inicializar múltiples variables.
var categoria = 'Computadoras',
    marca = "Marca Famosa",
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

// Estilos para nombrar variables con más de una palabra //
// Camel Case
var  nombreProducto = 'Monitor 30 Pulgadas';

// Under Score
var nombre_producto = 'Monitor 30 Pulgadas';

// Pascal Case
var NombreProducto = 'Monitor 30 Pulgadas'; 

/*Las variables no pueden iniciar con números
var 99dias;
var dias99;

var 01_;
var _01;

var _usuario;
var __usuario;
*/