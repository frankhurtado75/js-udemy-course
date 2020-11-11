class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Cualquier método agregado a la clase será parte del proto
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    // Propiedades estaticas, se muestran sin instancia
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const franklin = new Cliente('Franklin', 500);

console.log(franklin.mostrarInformacion());

console.log(Cliente.bienvenida());

// Class Expretion
const Cliente2 = class {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

const gabriel = new Cliente2('Franklin', 400);

console.log(gabriel.mostrarInformacion());