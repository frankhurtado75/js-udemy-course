const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 100},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

console.table(meses);

meses.forEach((mes, i) => {
    if(mes === 'Abril'){
        console.log(`Encontrado en el mes ${i}`);
    }
})

// .findIndex para encontrar indice de abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

//Encontrar un indice en un arreglo de objeto
console.table(carrito)

const indice2 = carrito.findIndex(p => p.precio === 100);
console.log(indice2);