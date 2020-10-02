// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Event Listeners
cargarEventListeners();
function cargarEventListeners(){
    
    // Agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    
    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        
        // Resetear el arreglo
        articulosCarrito = [];

        // Eliminamos el html
        limpiarHTML();
    })
}

// Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoID = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del html que le dimos click y extrae la clase
function leerDatosCurso(curso){

    // Crear objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        // Actualiza la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso;  // retorna los objetos que no son los duplicados
            }
        })
        articulosCarrito = cursos;
    } else {
        // Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    carritoHTML();
}

// Muetra el carro de compra en HTML
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y generael HTML
    articulosCarrito.forEach(curso => {
        
        const {imagen, titulo, precio, cantidad, id} = curso;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td> 
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a hrf="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        
        // Agrega el contenedor del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// Elimina los cursos del tbody
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}