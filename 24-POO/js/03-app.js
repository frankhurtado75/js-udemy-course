class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}$`
    }

    // Propiedades estaticas, se muestran sin instancia
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

// Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Reescribe el metodo con el padre 
    static bienvenida(){
        return `Bienvenido al cajero de empresas`;
    }
}

const franklin = new Cliente('Franklin', 500);

const empresa = new Empresa('Casticar', 800, 2128731943, 'Programacion web');
console.log(empresa)
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());