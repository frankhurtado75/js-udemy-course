// Herencia de un constructor

// Creacion de constructores
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

function Persona(nombre,saldo,telefono){
    // Heredar de otro constructor 
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
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

// Heredar la función (Antes de Instanciarlo)
Persona.prototype = Object.create(Cliente.prototype);

// Heredar el constructor
Persona.prototype.constructor = Cliente;

// Prototype sin heredar para Persona
Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de esta persona es ${this.telefono}`
}

// Instancias
const franklin = new Persona('Franklin', '8000', '8731943');
console.log(franklin);

// Accede a los datos heredados
console.log(franklin.nombreClienteSaldo());

// Accede al número de teléfono
console.log(franklin.mostrarTelefono());