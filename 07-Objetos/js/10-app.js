//Copiar objetos
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto)
console.log(medidas)

//Permite unir los objetos y los asigna a la nueva constante
const resultado = Object.assign(producto, medidas);

//Spread Operator o Rest Operator, copia los objetos y los asigna a la nueva constante
const resultado2 = { ...producto, ...medidas }

console.log(resultado2);