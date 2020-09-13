const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
    if(mes === 'Enero'){
        console.log('Enero existe');
    }
})

// .includes funciona solo con arreglos
const resultado = meses.includes('Enero');
console.log(resultado);

// .some funciona solo en un arreglo de objetos
const existe = carrito.some(producto => {
    return producto.nombre === 'Celular';
});
console.log(existe);

//Return no se coloca si el arrowFunction es de una sola linea
const existe2 = carrito.some(producto => producto.nombre === 'Audifonos');
console.log(existe2);

//Arreglo tradicional
const existe3 = meses.some(mes => mes === 'Febrero');
console.log(existe3);