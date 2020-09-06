//Funciones que retornan valores
function sumar(a, b) {
    return a + b ; //Se retorna cuando se quiere usar nuevamente el valor de la funcion
}

const resultado = sumar(2, 3);

console.log(resultado);

//Ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

function calcularImpuesto(total){
    return total * 1.15;
}

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

console.log(total)