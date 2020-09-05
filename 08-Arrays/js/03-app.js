//Recorrer un arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);


// Cuanto mide el arreglo, numeros de elementos
console.log(meses.length);

//Iterador
for(let i = 0; i < meses.length; i++ ) {
    console.log( meses[i] );
}