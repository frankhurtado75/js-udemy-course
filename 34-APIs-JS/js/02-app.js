// Permite identificar cuando un elemento está visible
document.addEventListener('DOMContentLoaded', () => {

    // Habilitar Intersection Observer
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            console.log('Ya está visible')
        } else {
            console.log('No está visible')
        }
    });

    // Elemento que se va a observar
    observer.observe(document.querySelector('.premium'));
});