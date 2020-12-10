window.onload = function(){
var juego = true;
var fondo = document.getElementById("fondojuego");
var izquierda = 37;
var derecha = 39;
var arriba = 38;
var abajo = 40;
var jugador = document.getElementById("jugador");
var comida = document.getElementById("final");
var jugadorw, jugadorh, jugadorx, jugadory;
var comidaw, comidah, comidax, comiday;
var obstaculo1w, obstaculo1h, obstaculo1x, obstaculo1y;
var obstaculo2w, obstaculo2h, obstaculo2x, obstaculo2y;
var obstaculo3w, obstaculo3h, obstaculo3x, obstaculo3y;
var obstaculo4w, obstaculo4h, obstaculo4x, obstaculo4y;
var velocidad = 35;
var obstaculo1 = document.getElementById("paso1");
var obstaculo2 = document.getElementById("paso2");
var obstaculo3 = document.getElementById("paso3");
var obstaculo4 = document.getElementById("paso4");
var obstaculo5 = document.getElementById("paso5");
var posizquierda = true;
var posderecha = true;
//var altura_fondo = parseInt(window.getComputedStyle(fondo).getPropertyValue("height"));
//var ancho_fondo = parseInt(window.getComputedStyle(fondo).getPropertyValue("width"));
document.addEventListener('keydown', function(event){

    if (event.keyCode == derecha){
        var Left = parseInt(window.getComputedStyle(jugador).getPropertyValue("left"));
        if (Left < 1060){
            var nuevapos = Left + velocidad;
            jugador.style.left = nuevapos + "px";
        }
    }

    if (event.keyCode == izquierda){
        var Left = parseInt(window.getComputedStyle(jugador).getPropertyValue("left"));
        if (Left > 20){
            var nuevapos = Left - velocidad;
            jugador.style.left = nuevapos + "px";
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
        var obstaculo1iz = parseInt(window.getComputedStyle(obstaculo1).getPropertyValue("left"));
        var obstaculo2iz = parseInt(window.getComputedStyle(obstaculo2).getPropertyValue("left"));
        var obstaculo3iz = parseInt(window.getComputedStyle(obstaculo3).getPropertyValue("left"));
        var obstaculo4iz = parseInt(window.getComputedStyle(obstaculo4).getPropertyValue("left"));
        var obstaculo5iz = parseInt(window.getComputedStyle(obstaculo5).getPropertyValue("left"));
        //Declaramos bloques para que se muevan por la pantalla
        if(obstaculo1.dataset.izquierda = true){
            if (obstaculo1iz < 1050){
                var nuevaposobst1 = obstaculo1iz + 3;
                obstaculo1.style.left = nuevaposobst1 + "px";
            }
           obstaculo1.dataset.izquierda = false;   
        }else if(obstaculo1.dataset.izquierda = false){
            if (obstaculo1iz > 10){
                var nuevaposobst1 = obstaculo1iz - 3;
                obstaculo1.style.left = nuevaposobst1 + "px";
            }
        }
        /*if(obstaculo1.dataset.derecha = true){
            
            obstaculo1.dataset.derecha = true;
            obstaculo1.dataset.izquierda = false;
        }
        if(obstaculo1.dataset.izquierda = true){
            if (obstaculo1iz >= 1050){
                var nuevaposobst1 = obstaculo1iz - 3;
                obstaculo1.style.left = nuevaposobst1 + "px";
            }
        }*/
        
        
        /*if(obstaculo1der < 200){
            var posvuelt = obstaculo1der + 3;
            obstaculo1.style.right = posvuelt +"px";
        }*/
        
        if(obstaculo2iz < 1050){
            var nuevaposobst2 = obstaculo2iz + 4;
            obstaculo2.style.left = nuevaposobst2 + "px";
        }

        if(obstaculo3iz < 1050){
            var nuevaposobst3 = obstaculo3iz + 2;
            obstaculo3.style.left = nuevaposobst3 + "px";
        }

        if(obstaculo4iz < 1050){
            var nuevaposobst4 = obstaculo4iz + 3;
            obstaculo4.style.left = nuevaposobst4 + "px";
        }

        if(obstaculo5iz < 1050){
            var nuevaposobst5 = obstaculo5iz + 2;
            obstaculo5.style.left = nuevaposobst5 + "px";
        }

    }
    }, 10)

/*
    var detectarcolisions = setInterval(function(){
        var topjugador = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
        var leftjugador = parseInt(window.getComputedStyle(jugador).getPropertyValue("left"));
        var obstaculo1left = parseInt (window.getComputedStyle(obstaculo1).getPropertyValue("left"));
        var obstaculo1top = parseInt(window.getComputedStyle(obstaculo1).getPropertyValue("top"));
        if(obstaculo1left < 500 && obstaculo1left < 0 && topjugador >= 50){
            jugador.style.top = 520 + "px";
            obstaculo1.style.right = 0 + "px";
            alert("Has perdido");
        }
    })
    */
   //Metodo detencion de colisiones 
    var colisiones = setInterval(function(){

            //igualamos las variables de anchura y altura
            jugadorw = jugador.offsetWidth;
            jugadorh = jugador.offsetHeight;
            jugadorx = jugador.offsetLeft;
            jugadory = jugador.offsetTop;

            obstaculo1w = obstaculo1.offsetWidth;
            obstaculo1h = obstaculo1.offsetHeight;
            obstaculo1x = obstaculo1.offsetLeft;
            obstaculo1y = obstaculo1.offsetTop;

            obstaculo2w = obstaculo2.offsetWidth;
            obstaculo2h = obstaculo2.offsetHeight;
            obstaculo2x = obstaculo2.offsetLeft;
            obstaculo2y = obstaculo2.offsetTop;

            obstaculo3w = obstaculo3.offsetWidth;
            obstaculo3h = obstaculo3.offsetHeight;
            obstaculo3x = obstaculo3.offsetLeft;
            obstaculo3y = obstaculo3.offsetTop;

            obstaculo4w = obstaculo4.offsetWidth;
            obstaculo4h = obstaculo4.offsetHeight;
            obstaculo4x = obstaculo4.offsetLeft;
            obstaculo4y = obstaculo4.offsetTop;

            obstaculo5w = obstaculo5.offsetWidth;
            obstaculo5h = obstaculo5.offsetHeight;
            obstaculo5x = obstaculo5.offsetLeft;
            obstaculo5y = obstaculo5.offsetTop;


            //Comprobamos que la posicion del jugador con las de los obstaculos no se esten tocando
            if((jugadorx + jugadorw) > obstaculo1x && jugadorx < (obstaculo1x + obstaculo1w) && (jugadory + jugadorh) > obstaculo1y && jugadory < (obstaculo1y + obstaculo1h)){
                alert("Has perdido");
            }

            if((jugadorx + jugadorw) > obstaculo2x && jugadorx < (obstaculo2x + obstaculo2w) && (jugadory + jugadorh) > obstaculo2y && jugadory < (obstaculo2y + obstaculo2h)){
                alert("Has perdido");
            }
            
            if((jugadorx + jugadorw) > obstaculo3x && jugadorx < (obstaculo3x + obstaculo3w) && (jugadory + jugadorh) > obstaculo3y && jugadory < (obstaculo3y + obstaculo3h)){
                alert("Has perdido");
            }

            if((jugadorx + jugadorw) > obstaculo4x && jugadorx < (obstaculo4x + obstaculo4w) && (jugadory + jugadorh) > obstaculo4y && jugadory < (obstaculo4y + obstaculo4h)){
                alert("Has perdido");
            }

            if((jugadorx + jugadorw) > obstaculo5x && jugadorx < (obstaculo5x + obstaculo5w) && (jugadory + jugadorh) > obstaculo5y && jugadory < (obstaculo5y + obstaculo5h)){
                alert("Has perdido");
            }
    });

    var recoger = setInterval(function(){

            jugadorw = jugador.offsetWidth;
            jugadorh = jugador.offsetHeight;
            jugadorx = jugador.offsetLeft;
            jugadory = jugador.offsetTop;

            comidaw = comida.offsetWidth;
            comidah = comida.offsetHeight;
            comidax = comida.offsetLeft;
            comiday = comida.offsetTop;

            if((jugadorx + jugadorw) > comidax && jugadorx < (comidax + comidaw) && (jugadory + jugadorh) > comiday && jugadory < (comiday + comidah)){
                alert("Objeto recogido");
            }
    });
}

