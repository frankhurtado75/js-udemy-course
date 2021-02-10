// Generador
// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de  la palabra function

function *crearGenerador() {
    // Yiel es nuevo también en es6 y son los valores que podemos utilziar para iterar...
    yield 1;
    yield 'Nombre';
    yield 3 +3;
    yield true;
}

// Se llaman como funciones normales pero retornan un iterador
const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next().done);

// Generador para carrito de compra
function *generadorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}

// Carrito
const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Recorrer el iterador
let iterador2 = generadorCarrito(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());