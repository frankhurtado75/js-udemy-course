//Iteradores, condicion hasta que se cumpla
//For loop

//Ciclo de numero del 1 al 10
for(let i = 0; i <= 10; i++){
    console.log(`Numero ${i}`);
}

//Numeros pares o impares
for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(`El Numero ${i} es par`);
    } else {
    console.log(`El numero ${i} es impar`);
    }
}

//Ejemplo practico
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}