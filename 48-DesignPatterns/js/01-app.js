// Class Pattern: utilizar clases para la creación de los objetos

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);