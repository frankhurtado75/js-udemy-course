// Entrar y salir de pantalla completa
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click',  pantallaCompleta);
salirBtn.addEventListener('click',  cerrarPantallaCompleta);

function pantallaCompleta(){
    // Toda la pagina web se pone en pantalla completa
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta(){
    // Salir pantalla completa
    document.exitFullscreen();
}