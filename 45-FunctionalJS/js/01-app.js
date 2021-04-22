// Functional JS

const suma = function(a, b){
    return a + b;
}

// Es por eso que un lenguaje se le conoce como first-class functions, ya que pueden ser creadas como si fueran variables, de enteros, numeros o booleans

// Aquí la función es valor como si fuera un string
const resultado = suma; 

console.log(resultado(20,30));

