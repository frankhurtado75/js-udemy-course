import nuevaFuncion, {nombreCliente2, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import {Empresa} from './empresa.js'; // 7)

// 1) LLamando a una variable de otro archivo
console.log(nombreCliente1); // 1)

// 2) Habilita una variable de otro archivo
// Debe añadir type="module" en el script dentro de HTML
// Se importan varias variables en una misma linea de codigo
// 3) y 4) Importar una funcion
// 5) Importa una clase
// 6) Agrega un método

console.log(nombreCliente2); // 2)

console.log(ahorro); // 2)

console.log(mostrarInformacion(nombreCliente2, ahorro)); // 3)

tieneSaldo(ahorro); // 4

const cliente = new Cliente(nombreCliente2, ahorro); // 5
console.log(cliente);

console.log(cliente.mostrarInformacion()); // 6

// 7) Importar Empresa
const empresa = new Empresa('Hurtado', 500, 'Comercio Internacional');
console.log(empresa.mostrarInformacion());

nuevaFuncion(); // 8) No se importa dentro de las {}
