// Sets permite crear una lista ed valores sin duplicados
const carrito = new Set();
carrito.add('Camisa'); 
carrito.add('Short'); 
carrito.add('Zapato');
carrito.add('Camisa'); // No se repiten los valores

console.log(carrito);

// Determina el tamaño de un set
console.log(carrito.size);

// Comprueba si un valor existe
console.log(carrito.has('Camisa'));

// Acceder a los elementos de un set 
carrito.forEach(producto => {
    console.log(producto);
})

// Los sets son iterables
carrito.forEach((producto, index, pertenece) =>  {
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito);
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);

// Elimina un elemento del set
carrito.delete('Zapato');
console.log(carrito);

// Elimina todos los elementos de un set
carrito.clear();
console.log(carrito);

// - Ejemplo - 
// Del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,40,50,10,20]

const noDuplicados = new Set(numeros);

console.log(noDuplicados);

