// Scope 
// El alcance de una variable. Funciones o bloques de código tendrán acceso o podrán conocer una variable una vez que es creada

// Scope Global
const cliente = 'Frank'; // COLOCAR ESTE CLIENTE DENTRO DE ALGUNA DE LAS 2 FUNCIONES

function mostrarCliente(){
    // Scope dentro de las llaves
    console.log(cliente);
}

// Scope por bloque
const login = true;

function clienteLogueado(){
    const cliente = "Gabriel";
    console.log(cliente);

    if(login){
        const cliente = 'Admin';
        console.log(cliente);
    }
}

clienteLogueado();