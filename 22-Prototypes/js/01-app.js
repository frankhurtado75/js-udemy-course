// Prototypes y como utilizarlos
// El prototype esta disponible en todos los objetos
// 2 tipos de objetos

// Object literal, más común, también es menos dinamica
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);

// Para añadir o crear un objeto reutilizable o dinamico se utiliza un constructor
// Previamente la programación porientada aobjetos era de la siguiente forma:
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 400);

// En la consola tenemos algo llamado el Prototype
console.log(juan); 