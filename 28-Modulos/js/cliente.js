// IIFE: se ejecutan inmediatamente que son leidas
//Evitará que las variables definidas se puedan mezclar con las de otros archivos
(function(){
    console.log('Desde un IIFE');

    // 1) Llamar una variable desde otro archivo
    window.nombreCliente1 = 'Frank1';

})();

// 2) Habilitar una variable en otro archivo
// Debe añadir type="module" en el script dentro de HTML
export const nombreCliente2 = 'Frank2';
export const ahorro = 200;

// 3) Exportar una funcion
export function mostrarInformacion(nombre, saldo){
    return `Cliente: ${nombre} - Saldo: ${saldo}`;
}

// 4) Exportar una funcion con condicional
export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

// 5) Exportar una clase
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    // 6) Agregando un método
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Saldo: ${this.ahorro}`;
    }
}

// 8)Export Default. Solo puede existir 1 por archivo
export default function nuevaFuncion(){
    console.log('Este es el Export Default');
}