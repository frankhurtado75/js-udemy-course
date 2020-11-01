// Ejemplo practico

// Creacion del constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Obtener tipo cliente
Cliente.prototype.tipoCliente = function() {
    // Con prototypes tienes que utilizar function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo  = 'Normal';
    }
    return tipo;
}

// Otro prototipo para los datos completos
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;
}

// Prototipo para restar saldo del cliente
Cliente.prototype.retiraSaldo = function(retiro){
    this.saldo -= retiro;
}

// Instanciarlo
const pedro = new Cliente('Pedro', 6000);

// Acceder al tipo de cliente
console.log(pedro.tipoCliente());

// Accede a los prototypes y datos completos
console.log(pedro.nombreClienteSaldo());

// Reescribir un valor del saldo
pedro.retiraSaldo(2000);

// Comprobar saldo
console.log(pedro.nombreClienteSaldo());