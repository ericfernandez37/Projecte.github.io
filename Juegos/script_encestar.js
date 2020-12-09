var izquierda = 37;
var derecha = 39;
var arriba = 38;
var abajo = 40;

document.addEventListener('keydown', function(event){
    if (event.keyCode == izquierda){
        moverizquierda();
    }

    else if (event.keyCode == derecha){
        moverderecha();
    }

    else if (event.keyCode == arriba){
        moverarriba();
    }

    else if (event.keyCode == abajo){
        moverabajo();
    }
});

var fondo   = document.querySelector('#fondojuego');
var jugador = document.getElementById("jugador");
var velocidad = 50;
var Top   = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
var Right = parseInt(window.getComputedStyle(jugador).getPropertyValue("right"));


function moverderecha(){
    Right -= velocidad;
    jugador.style.right = Right + "px";
}

function moverizquierda(){
    Right += velocidad;
    jugador.style.right = Right + "px";
}

function moverarriba(){
    Top -= velocidad;
    jugador.style.left = Top + "px";
}

function moverabajo(){
    Top += velocidad;
    jugador.style.top = Top +"px";
}
