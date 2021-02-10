// Entries Iterador
// Veamos unas erie de iteradores que se pueden considerar nuevos en JavaScript
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 234, 456, 789]);
const datos = new Map();

datos.set('nombre', 'Franklin');
datos.set('profesion', 'Desarrollador Web');

// Entries iterator: dato y valor dentro de un arreglos

// Entries a las ciudades: imprime llave y valor del arreglo
for(let entry of ciudades.entries()){
    console.log(entry);
}

// Entries a las ordenes: la llave y valor son el mismo resultados
for(let entry of ordenes.entries()){
    console.log(entry);
}

// Entries a los datos: imprime la llave y valor
for(let entry of datos.entries()){
    console.log(entry);
}

// Values iterator: imprime los valores

// Values a las ciudades
for(let value of ciudades.values()){
    console.log(value);
}

// Values a las ordenes
for(let value of ordenes.values()){
    console.log(value);
}

// Values a los datos
for(let value of datos.values()){
    console.log(value);
}

// Keys iterator: imprime unicamente la llave

// Keys a las ciudades: las llaves de un arreglo
for(let keys of ciudades.keys()){
    console.log(keys);
}

// Keys a las ordenes
for(let keys of ordenes.keys()){
    console.log(keys);
}

// Keys a los datos
for(let keys of datos.keys()){
    console.log(keys);
}

// Default
for(let ciudad of ciudades){
    console.log(ciudad);
}

for(let orden of ordenes){
    console.log(orden);
}

for(let dato of datos){
    console.log(dato);
}

// Iterar en un string
const mensaje = 'Aprendiendo JavaScript';

// Forma vieja
for(let i = 0; i < mensaje.length; i++){
    console.log(mensaje[i]);
}

// Forma nueva
for(let letra of mensaje){
    console.log(letra);
}

// Iterar en un NODE LIST
const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces){
    console.log(enlace.href);
}