// Objeto Date(), para fechas
const diaHoy = new Date();
let valor;

valor = diaHoy;

// get. sirve para obtener el valor

// Obtener fecha actual
valor = diaHoy.getDate();
console.log(valor);

// Obtener año
valor = diaHoy.getFullYear();
console.log(valor);

// Obtener mes
valor = diaHoy.getMonth();
console.log(valor);

// Obtener minuto
valor = diaHoy.getMinutes();
console.log(valor);

// Obtener hora
valor = diaHoy.getHours();
console.log(valor);

// Milisegundos transcurridos desde 1970
valor = diaHoy.getTime();
console.log(valor);

// set. sirve para modificar el valor 
valor = diaHoy.setFullYear(2010);
console.log(valor);

valor = diaHoy.setMonth(4);
console.log(valor);