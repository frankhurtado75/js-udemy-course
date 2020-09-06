sumar();
function sumar(){
    console.log(2+2);
}

//No se ejecuta si se llama a la funcion primero antes de declararla
sumar2();
const sumar2 = function(){
    console.log(3+3);
}