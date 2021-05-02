// Un mediator es un design pattern que se comunica con distintos objetos a la vez
// El mediator define objetos ya localizados para objetivos especificos
function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre}: ${cantidad}`)
    }
}

function Subasta(id){
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = id;
        }
    }
}

// Crear objetos
const juan = new Comprador('Juan');
const pablo = new Comprador('Frank');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta(Date.now());

// Registro
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

juan.oferta(300, juan);
pablo.oferta(400, pablo);

vendedor.vendido('Pablo');