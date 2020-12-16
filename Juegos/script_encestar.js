window.onload = function(){
var juego = false;
var aumentarvelocidad = 1;
var fondo = document.getElementById("fondojuego");
var izquierda = 37;
var derecha = 39;
var arriba = 38;
var abajo = 40;
var jugador = document.getElementById("jugador");
var comida = document.getElementById("final");
var boton = document.getElementById("empezar");
var siguiente = document.getElementById("siguiente");
var puntuacio = document.getElementById("puntuacio");
var nivel = document.getElementById("nivel");
nivel = 1;
document.getElementById("nivel").innerHTML = "<strong>Nivel: " + nivel + "</strong>";
document.getElementById("puntuacio").innerHTML = "<p><strong>Puntuación</strong> <br> </p>";
puntuacio = 0;
//Variables para poder hacer el detector de colisiones
var jugadorw, jugadorh, jugadorx, jugadory;
var comidaw, comidah, comidax, comiday;
var obstaculo1w, obstaculo1h, obstaculo1x, obstaculo1y;
var obstaculo2w, obstaculo2h, obstaculo2x, obstaculo2y;
var obstaculo3w, obstaculo3h, obstaculo3x, obstaculo3y;
var obstaculo4w, obstaculo4h, obstaculo4x, obstaculo4y;
//Velocidades en las que se mueven los div
var velocidad = 35;
var velocidadlenta = 1;
var velocidadmedia = 2;
var velocidadalta = 3;
//Variables obstaculos
var obstaculo1 = document.getElementById("paso1");
var obstaculo2 = document.getElementById("paso2");
var obstaculo3 = document.getElementById("paso3");
var obstaculo4 = document.getElementById("paso4");
var obstaculo5 = document.getElementById("paso5");

var contador = 60;

siguiente.style.visibility = "hidden";

document.addEventListener('keyup', function(event){

    if (event.keyCode == derecha){
        var Left = parseInt(window.getComputedStyle(jugador).getPropertyValue("left"));
        if (Left < 1060){
            var nuevapos = Left + velocidad;
            jugador.style.left = nuevapos + "px";  
            jugador.style.backgroundImage = "url('img/2jugador.png')";
        }
    }

    if (event.keyCode == izquierda){
        var Left = parseInt(window.getComputedStyle(jugador).getPropertyValue("left"));
        if (Left > 20){
            var nuevapos = Left - velocidad;
            jugador.style.left = nuevapos + "px";
            jugador.style.backgroundImage = "url('img/jugador.png')";
        }
    }

    if (event.keyCode == abajo){
        var Top   = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
        if (Top < 500){
            var nuevapos = Top + velocidad;
            jugador.style.top = nuevapos + "px";
            jugador.style.backgroundImage = "url('img/2jugador.png')";
        }
    }

    if (event.keyCode == arriba){
        var Top   = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
        if (Top > 30){
            var nuevapos = Top - velocidad;
            jugador.style.top = nuevapos + "px";
            jugador.style.backgroundImage = "url('img/jugador.png')";
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
        if(obstaculo1.dataset.izquierda == "true"){
            if (obstaculo1iz < 1050){
                var nuevaposobst1 = obstaculo1iz + velocidadmedia;
                obstaculo1.style.left = nuevaposobst1 + "px";
            }
            else{
                obstaculo1.dataset.izquierda = false;  
                obstaculo1.style.backgroundImage = "url('img/2Personaje1.gif')";
            }
           
        }else if(obstaculo1.dataset.izquierda == "false"){
            if (obstaculo1iz > 10){
                var nuevaposobst1 = obstaculo1iz - velocidadmedia;
                obstaculo1.style.left = nuevaposobst1 + "px";
                obstaculo1.style.backgroundImage = "url('img/2Personaje1.gif')";

            }else{
                obstaculo1.dataset.izquierda = true;
                obstaculo1.style.backgroundImage = "url('img/Personaje1.gif')";
            }
        }

        if(obstaculo2.dataset.izquierda == "true"){
            if (obstaculo2iz < 1050){
                var nuevaposobst2 = obstaculo2iz + velocidadalta;
                obstaculo2.style.left = nuevaposobst2 + "px";

            }else{
                obstaculo2.dataset.izquierda = false; 
                obstaculo2.style.backgroundImage = "url('img/2Personaje2.gif')";
            }
           
        }else if(obstaculo2.dataset.izquierda == "false"){
            if (obstaculo2iz > 10){
                var nuevaposobst2 = obstaculo2iz - velocidadalta;
                obstaculo2.style.left = nuevaposobst2 + "px";
                obstaculo2.style.backgroundImage = "url('img/2Personaje2.gif')";


            }else{
                obstaculo2.dataset.izquierda = true;
                obstaculo2.style.backgroundImage = "url('img/Personaje2.gif')" ;
            }
        }

        if(obstaculo3.dataset.izquierda == "true"){
            if (obstaculo3iz < 1050){
                var nuevaposobst3 = obstaculo3iz + velocidadlenta;
                obstaculo3.style.left = nuevaposobst3 + "px";
            }
            else{
                obstaculo3.dataset.izquierda = false;   
                obstaculo3.style.backgroundImage = "url('img/2Personaje3.gif')";
            }
           
        }else if(obstaculo3.dataset.izquierda == "false"){
            if (obstaculo3iz > 10){
                var nuevaposobst3 = obstaculo3iz - velocidadlenta;
                obstaculo3.style.left = nuevaposobst3 + "px";
                obstaculo3.style.backgroundImage = "url('img/2Personaje3.gif')";
            }else{
                obstaculo3.dataset.izquierda = true;
                obstaculo3.style.backgroundImage = "url('img/Personaje3.gif')";
            }
        }

        if(obstaculo4.dataset.izquierda == "true"){
            if (obstaculo4iz < 1050){
                var nuevaposobst4 = obstaculo4iz + velocidadmedia;
                obstaculo4.style.left = nuevaposobst4 + "px";

            }
            else{
                obstaculo4.dataset.izquierda = false;   
                obstaculo4.style.backgroundImage = "url('img/2Personaje4.gif')";
            }
           
        }else if(obstaculo4.dataset.izquierda == "false"){
            if (obstaculo4iz > 10){
                var nuevaposobst4 = obstaculo4iz - velocidadmedia;
                obstaculo4.style.left = nuevaposobst4 + "px";
                obstaculo4.style.backgroundImage = "url('img/2Personaje4.gif')";
            }else{
                obstaculo4.dataset.izquierda = true;
                obstaculo4.style.backgroundImage = "url('img/Personaje4.gif')";
            }
        }

        if(obstaculo5.dataset.izquierda == "true"){
            if (obstaculo5iz < 1050){
                var nuevaposobst5 = obstaculo5iz + velocidadlenta;
                obstaculo5.style.left = nuevaposobst5 + "px";
            }
            else{
                obstaculo5.dataset.izquierda = false;   
                obstaculo5.style.backgroundImage = "url('img/2Personaje5.gif')";
            }
           
        }else if(obstaculo5.dataset.izquierda == "false"){
            if (obstaculo5iz > 10){
                var nuevaposobst5 = obstaculo5iz - velocidadlenta;
                obstaculo5.style.left = nuevaposobst5 + "px";
                obstaculo5.style.backgroundImage = "url('img/2Personaje5.gif')";
            }else{
                obstaculo5.dataset.izquierda = true;
                obstaculo5.style.backgroundImage = "url('img/Personaje5.gif')";
            }
        }

    }
    }, 10);

   //Metodo detencion de colisiones 
    setInterval(function(){


            var topcomida = parseInt(window.getComputedStyle(comida).getPropertyValue("top"));

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


            //Comprobamos que la posicion del jugador con las de los obstaculos no se esten tocando del obstaculo1
            if((jugadorx + jugadorw) > obstaculo1x && jugadorx < (obstaculo1x + obstaculo1w) && (jugadory + jugadorh) > obstaculo1y && jugadory < (obstaculo1y + obstaculo1h)){

                if(topcomida == 5){
                    //Devolvemos el jugador a la posicion incial
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 511 + "px";
                }else{
                    //Colocamos al jugador a la parte superior ya que la cesta se encontraria en la parte inferior de la pantalla
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 5 + "px";
                }
                
            }

            
            //Comprobamos que la posicion del jugador con las de los obstaculos no se esten tocando del obstaculo2
            if((jugadorx + jugadorw) > obstaculo2x && jugadorx < (obstaculo2x + obstaculo2w) && (jugadory + jugadorh) > obstaculo2y && jugadory < (obstaculo2y + obstaculo2h)){
                
                if(topcomida == 5){
                    //Devolvemos el jugador a la posicion incial
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 511 + "px";
                }else{
                    //Colocamos al jugador a la parte superior ya que la cesta se encontraria en la parte inferior de la pantalla
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 5 + "px";
                }
                
                
            }
            
            //Comprobamos que la posicion del jugador con las de los obstaculos no se esten tocando del obstaculo3
            if((jugadorx + jugadorw) > obstaculo3x && jugadorx < (obstaculo3x + obstaculo3w) && (jugadory + jugadorh) > obstaculo3y && jugadory < (obstaculo3y + obstaculo3h)){
                
                if(topcomida == 5){
                    //Devolvemos el jugador a la posicion incial
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 511 + "px";
                }else{
                    //Colocamos al jugador a la parte superior ya que la cesta se encontraria en la parte inferior de la pantalla
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 5 + "px";
                }
              
            }

            //Comprobamos que la posicion del jugador con las de los obstaculos no se esten tocando del obstaculo4
            if((jugadorx + jugadorw) > obstaculo4x && jugadorx < (obstaculo4x + obstaculo4w) && (jugadory + jugadorh) > obstaculo4y && jugadory < (obstaculo4y + obstaculo4h)){
                
                if(topcomida == 5){
                    //Devolvemos el jugador a la posicion incial
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 511 + "px";
                }else{
                    //Colocamos al jugador a la parte superior ya que la cesta se encontraria en la parte inferior de la pantalla
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 5 + "px";
                }
               
            }

            //Comprobamos que la posicion del jugador con las de los obstaculos no se esten tocando del obstaculo5
            if((jugadorx + jugadorw) > obstaculo5x && jugadorx < (obstaculo5x + obstaculo5w) && (jugadory + jugadorh) > obstaculo5y && jugadory < (obstaculo5y + obstaculo5h)){
                
                if(topcomida == 5){
                    //Devolvemos el jugador a la posicion incial
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 511 + "px";
                }else{
                    //Colocamos al jugador a la parte superior ya que la cesta se encontraria en la parte inferior de la pantalla
                    jugador.style.left = 510 + "px";
                    jugador.style.top = 5 + "px";
                }
                
            }
    });


    //Funcion para que el jugador pueda recoger la comida de la cesta
    setInterval(function(){

            jugadorw = jugador.offsetWidth;
            jugadorh = jugador.offsetHeight;
            jugadorx = jugador.offsetLeft;
            jugadory = jugador.offsetTop;

            comidaw = comida.offsetWidth;
            comidah = comida.offsetHeight;
            comidax = comida.offsetLeft;
            comiday = comida.offsetTop;

            //Comprobamos la colision del jugador con la cesta de la comida
            if((jugadorx + jugadorw) > comidax && jugadorx < (comidax + comidaw) && (jugadory + jugadorh) > comiday 
            && jugadory < (comiday + comidah)){

                //Aumentamos la velocidad de los obstaculos cada vez que el jugador llegue a la cesta de comida
                velocidadlenta = velocidadlenta + 1 * aumentarvelocidad;
                velocidadmedia = velocidadmedia + 1 * aumentarvelocidad;
                velocidadalta = velocidadalta + 1 * aumentarvelocidad;

                //Devolvemos la cesta cuando el jugador colisiona con ella

                if (parseInt(comida.style.top) == 500 && parseInt(comida.style.left) == 120){
                    comida.style.top = 5 + "px";
                    comida.style.left = 850 + "px";

                }else if(parseInt(comida.style.top) == 5){
                    comida.style.top = 500 + "px";
                    comida.style.left = 850 + "px";
                    

                }else if(parseInt(comida.style.left) == 850){
                    comida.style.top = 5 + "px";
                    comida.style.left = 120 + "px";
                }
            
                else{
                    comida.style.top = 500 + "px";
                    comida.style.left = 120 + "px";
                    
                }
                aumentarpuntos();
                //Incrementamos la velocidad de los obstaculos cuando el jugador colisiona con la cesta
                aumentarvelocidad++;
                
                //Comprobamos que ha conseguido toda la comida y mostramos pantalla del final de juego
                if(aumentarvelocidad >= 6){
                    final();
                }
                    
            }
    });

    //Creamos el contador para que el jugador tenga 1 minuto de tiempo y para ello repetimos la funcion en un intervalo de 1000ms (1 segundo)
    var tiempojuego = setInterval(function(){
        document.getElementById("contador").innerHTML = "<p><strong>Tiempo <br>" + contador + "</strong></p>";
        if(juego == true){
            contador = contador - 1;
            if (contador < 0){
                final();
                clearInterval(tiempojuego);
            }
        }else{
            juego = false;
        }
        
    }, 1000);

    function aumentarpuntos(){
       
        //Ponemos que el condicional sea igual true para que no se sumen los punto si se acaba el juego
        if (aumentarvelocidad <= 6 && juego == true){
            puntuacio += 150;
            nivel += 1;
            document.getElementById("puntuacio").innerHTML = "<p><strong>Puntuación <br>" + puntuacio + "</strong></p>";
            document.getElementById("nivel").innerHTML = "<strong>Nivel: "+ nivel +"</strong>";
        }
    }

    //Funcion final 
    function final(){
            if (contador <= 0){
            swal("Juego finalizado, el tiempo ha terminado!" + " Puntuación: " + puntuacio);
            }        
            else if(aumentarvelocidad >= 4){
                swal("Compra completada, puntos: " + puntuacio);
            }
            juego = false;
            obstaculo1.style.left = 0 + "px";
            obstaculo2.style.left = 1050 + "px";
            obstaculo3.style.left = 0 + "px";
            obstaculo4.style.left = 1050 + "px";
            obstaculo5.style.left = 0 + "px";
            jugador.style.left = 510 + "px";
            jugador.style.top = 511 + "px";
            reiniciar.style.visibility = "visible";
        
    }

    boton.addEventListener("click", function(){
        juego = true;
        boton.style.visibility = "hidden";
        
    })

    siguiente.addEventListener ("click", function(){
        juego = false;
        siguiente.style.visibility = "hidden";
        window.location.href = "rompecabezas.html";

    })

}

