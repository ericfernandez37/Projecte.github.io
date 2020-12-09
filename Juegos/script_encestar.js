window.onload = function(){
var juego = true;
var fondo = document.getElementById("fondojuego");
var izquierda = 37;
var derecha = 39;
var arriba = 38;
var abajo = 40;
var jugador = document.getElementById("jugador");
var velocidad = 50;
var obstaculo1 = document.getElementById("paso1");
var obstaculo2 = document.getElementById("paso2");
var obstaculo3 = document.getElementById("paso3");
var obstaculo4 = document.getElementById("paso4");
var obstaculo5 = document.getElementById("paso5");
//var altura_fondo = parseInt(window.getComputedStyle(fondo).getPropertyValue("height"));
//var ancho_fondo = parseInt(window.getComputedStyle(fondo).getPropertyValue("width"));
document.addEventListener('keydown', function(event){

    if (event.keyCode == derecha){
        var Right = parseInt(window.getComputedStyle(jugador).getPropertyValue("right"));
        if (Right > 20){
            var nuevapos = Right - velocidad;
            jugador.style.right = nuevapos + "px";
        }
    }

    if (event.keyCode == izquierda){
        var Right = parseInt(window.getComputedStyle(jugador).getPropertyValue("right"));
        if (Right < 1050){
            var nuevapos = Right + velocidad;
            jugador.style.right = nuevapos + "px";
        }
    }

    if (event.keyCode == abajo){
        var Top   = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
        if (Top < 500){
            var nuevapos = Top + velocidad;
            jugador.style.top = nuevapos + "px";
        }
    }

    if (event.keyCode == arriba){
        var Top   = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
        if (Top > 20){
            var nuevapos = Top - velocidad;
            jugador.style.top = nuevapos + "px";
        }
    }

});

//funcion para mover los obstaculos por pantalla
setInterval(function(){
    if(juego == true){

        //Parseamos los valores de obstaculo
        var obstaculo1der = parseInt(window.getComputedStyle(obstaculo1).getPropertyValue("right"));
        var obstaculo2der = parseInt(window.getComputedStyle(obstaculo2).getPropertyValue("right"));
        var obstaculo3der = parseInt(window.getComputedStyle(obstaculo3).getPropertyValue("right"));
        var obstaculo4der = parseInt(window.getComputedStyle(obstaculo4).getPropertyValue("right"));
        var obstaculo5der = parseInt(window.getComputedStyle(obstaculo5).getPropertyValue("right"));
        //Declaramos bloques para que se muevan por la pantalla
        if(obstaculo1der < 1050){
            var nuevaposobst1 = obstaculo1der + 3;
            obstaculo1.style.right = nuevaposobst1 + "px";
        }
        
        if(obstaculo2der < 1050){
            var nuevaposobst2 = obstaculo2der + 4;
            obstaculo2.style.right = nuevaposobst2 + "px";
        }

        if(obstaculo3der < 1050){
            var nuevaposobst3 = obstaculo3der + 2;
            obstaculo3.style.right = nuevaposobst3 + "px";
        }

        if(obstaculo4der < 1050){
            var nuevaposobst4 = obstaculo4der + 3;
            obstaculo4.style.right = nuevaposobst4 + "px";
        }

        if(obstaculo5der < 1050){
            var nuevaposobst5 = obstaculo5der + 2;
            obstaculo5.style.right = nuevaposobst5 + "px";
        }

    }
}, 10)

}
