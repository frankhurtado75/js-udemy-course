// Mixins, es una forma de agregar funciones a una clase una vez que ha sido creada
class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre de la persona: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);
persona.mostrarInformacion();

const cliente = new Cliente('Franklin', 'frank@correo.com');
console.log(cliente);
cliente.mostrarInformacion();