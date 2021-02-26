// Detectar si nuestra página se esta ejecutando en primer o segundo plano
document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);

    if(document.visibilityState === 'visible'){
        console.log('Primer plano' );
    } else {
        console.log('Segundo plano');
    }
});