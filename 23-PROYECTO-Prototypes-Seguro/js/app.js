// - Variables -

// Instanciar UI
const ui = new UI();

// - Eventos -
document.addEventListener('DOMContentLoaded', () => {
    // Llena el select con los años
    ui.llenarOpciones();
})

// - Funciones -

// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI(){};


// LLena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const   max = new Date().getFullYear(),
            min = max - 20;
    
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Instanciar UI
console.log(ui);    

