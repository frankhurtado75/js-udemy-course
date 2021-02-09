// Maps, listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo
const cliente = new Map();

cliente.set('nombre','Karen');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);

console.log(cliente);

// Tamaño del MAP
console.log(cliente.size);

// Comprobar un valor
console.log(cliente.has('tipo'));

// Obtener un valor
console.log(cliente.get('tipo'));

// Borrar un valor
cliente.delete('nombre');

console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));

// Borrar el map
cliente.clear();
console.log(cliente);

// Se puede inicializar un map con diferentes valores...
const paciente = new Map([['nombre', 'Cesar'], ['cuarto', 'no definido']]);

// Agregar otra llave - valor
paciente.set('Dr.', 'Juan');

// Al colocar una misma llave se reescribe el dato
paciente.set('cuarto', 400);

console.log(paciente);

// Los map tambien son iterables
paciente.forEach((datos, index) => {
    console.log(datos);
    console.log(`${index}: ${datos}`);
})