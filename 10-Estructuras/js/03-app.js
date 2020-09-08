// Operador Mayor que y menor que
const dinero = 500;
const totalAPagar = 300;
const pocoDinero = 200;

if( dinero >= totalAPagar ) {
    console.log('Si podemos pagar');
} else {
    console.log('Fondos Insuficientes');
}

if( pocoDinero < totalAPagar ) {
    console.log('Fondos Insuficientes');
} else {
    console.log('Si podemos pagar');
}