// Namespaces es un design pattern de organización de código, ayuda a evitar colision con nombres en el scope global
// Namespace es crea un objeto global alrededor de tu aplicación 
// Agrega todas las funciones dentro en lugar de crear múltiples funciones y objetos que se puedan acceder de forma global.
const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
];

restaurApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro Menú:`)
        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} ${platillo.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se está preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    }
}

restaurApp.funciones.ordenar(1);
restaurApp.funciones.agregarPlatillo('Pastel', 20);
const {platillos} = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);
