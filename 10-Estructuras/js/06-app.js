//Operador && para usar dos condiciones
const usuario = true;
const puedePagar = true;

if(usuario && puedePagar) {
    console.log('Si puedes comprar')
} else if(!puedePagar && !usuario) { 
    console.log('No no puedes comprar')    
} else if(!usuario) {
    console.log('Inicia sesión o saca una cuenta');
} else if(!puedePagar) {
    console.log('Fondos Insuficientes')
}