// No funciona en firefox

class Cliente{

    #nombre;

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const frank = new Cliente();
frank.setNombre('Franklin');
console.log(frank.getNombre());