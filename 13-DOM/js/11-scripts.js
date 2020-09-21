// Ejemplo 
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', btnFooter);

function btnFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X  Cerrar';
    }
    console.log(footer.classList);
}