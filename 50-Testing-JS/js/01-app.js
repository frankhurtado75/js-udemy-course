// Probar dos valores
function suma(a, b){
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(2,2);
let esperado = 3;

if(resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado. Testing fallido`);
} else {
    console.log('Testing aprobado');
}

let resultado2 = restar(10, 5);
let esperado2 = 5;

if(resultado2 !== esperado2) {
    console.error(`El ${resultado2} es diferente a lo esperado; la prueba no pasó`);
} else {
    console.log('Testing aprobado');
}