// Event Bubbling
const cardDid = document.querySelector('.card');
const infoDid = document.querySelector('.info');
const tituloDid = document.querySelector('.titulo');

cardDid.addEventListener('click', (e) => {
    // Detiene la propagacion del evento
    e.stopPropagation()
    console.log('Click en card');
})

infoDid.addEventListener('click', (e) => {
    // Detiene la propagacion del evento
    e.stopPropagation()
    console.log('Click en info');
})

tituloDid.addEventListener('click', (e) => {
    // Detiene la propagacion del evento
    e.stopPropagation()
    console.log('Click en titulo');
})