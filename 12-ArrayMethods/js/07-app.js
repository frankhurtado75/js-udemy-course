const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat para concatenar arreglos
const resultado1 = meses.concat(meses2, meses3);
console.log(resultado1);

//Spread Operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);