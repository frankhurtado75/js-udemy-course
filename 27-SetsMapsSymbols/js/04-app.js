// Wekmap, solo aceptan objetos
const producto = {
    idProducto: 10
}

const wm = new WeakMap();

wm.set(producto, 'Monitor');

console.log(wm.has(producto));
console.log(wm.get(producto));
console.log(wm.delete(producto));

// No se pueden iterar, ni la extención (size)