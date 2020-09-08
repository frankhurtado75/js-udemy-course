//Operador ternario
const autenticado = true;
const puedePagar = true;

// ? = if
// : = else

console.log(autenticado  ||  puedePagar ? 'Si puede pagar' : 'No no esta autenticado' );

//If anidado
const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    if(efectivo > totalPagar){
    console.log('Si pagaste con efectivo');
    } else {
        console.log('Otra forma de pago');
    }
} else {
    console.log('Fondos Insuficientes');
}

//If anidado en un operador ternario
console.log(autenticado  ?  puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar'  : 'No no esta autenticado' );

console.log(autenticado  ? puedePagar 
    ?'Si esta autenticado y puede pagar' 
    : 'Si autenticado, no puede pagar'  
    : 'No no esta autenticado' );