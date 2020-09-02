//This, valores que existen en el objeto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true, 
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

producto.mostrarInfo();

//No se mezclan entre diferentes objetos
const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true, 
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

producto2.mostrarInfo();