const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Keys retorna un arreglo con el nombre o llaves de las propiedades del objeto
console.log(Object.keys(producto));

//Values retorna un arreglo con los valores de las propiedades del objeto
console.log(Object.values(producto));

//Entries retorna un arreglo con todo lo que contiene el objeto, tanto nombre como valores
console.log(Object.entries(producto));