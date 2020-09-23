// Eventos con scroll
window.addEventListener('scroll', () => {
    
    // Selecciona clase .premium 
    const premium = document.querySelector('.premium');

    // Obtiene ubiacion del elemento
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 784) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, da mas scroll');
    }
})