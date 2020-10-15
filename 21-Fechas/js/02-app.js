const diaHoy = new Date();

// moment.js permite dar el formato a una fecha u hora
// momentjs.com
moment.locale('es')

// Creamos un formato
console.log(moment().format('MMMM Do YYYY h:mm:ss a'));

// Formato establecido
console.log(moment().format('LLLL', diaHoy));

// Seleccionar 3 dias despues
console.log(moment().add(3, 'days').calendar());