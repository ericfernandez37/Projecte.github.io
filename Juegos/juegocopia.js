//primer nivel
var pulsverde = document.querySelector('#verde'),
    pulsrojo = document.querySelector('#rojo'),
    pulsamarillo = document.querySelector('#amarillo'),
    pulsnaranja = document.querySelector('#naranja'),
    pulsblanco = document.querySelector('#blanco'),
    pulsazul = document.querySelector('#azul'),
    empezar = document.querySelector('#empezar'),
    salida = document.querySelector('#salida'),

    verdeapagado = 'background : #26B803; background-image:url(img/pera.png);background-repeat: no-repeat; background-position: center;background-size: 70px;',
    verdeactivo = ' background : #35FA05 ; background-image:url(img/pera.png);background-repeat: no-repeat; background-position: center;background-size: 70px; transform: scale(1.05); border-color :  #26B803 ; border-style : solid;',
    rojoapagado = 'background : #B80303 ; background-image:url(img/fresa.png);background-repeat: no-repeat; background-position: center; ',
    rojoactivo = ' background : #FF0000 ; background-image:url(img/fresa.png);background-repeat: no-repeat; background-position: center; transform: scale(1.05); border-color :   #B80303 ; border-style : solid;',
    amarilloapagado = 'background : #D0C703; background-image:url(img/piña.png);background-repeat: no-repeat; background-position: center;',
    amarilloactivo = ' background : #FEF303 ;background-image:url(img/piña.png);background-repeat: no-repeat; background-position: center; transform: scale(1.05); border-color :  #D0C703 ; border-style : solid;',
    naranjaapagado = 'background : #FA8603; background-image:url(img/naranja.png);background-repeat: no-repeat; background-position: center;',
    naranjaactivo = ' background : #FEA003 ; background-image:url(img/naranja.png);background-repeat: no-repeat; background-position: center;transform: scale(1.05); border-color :   #FA8603 ; border-style : solid;',
    blancoapagado = 'background : #E0E0E0; background-image:url(img/Dragon.png);background-repeat: no-repeat; background-position: center;',
    blancoactivo = ' background : #F7F6F5 ;background-image:url(img/Dragon.png);background-repeat: no-repeat; background-position: center; transform: scale(1.05); border-color :   #E0E0E0 ; border-style : solid;',
    azulapagado = 'background : #057AD0; background-image:url(img/arandano.png);background-repeat: no-repeat; background-position: center;',
    azulactivo = ' background : #0093FF ;background-image:url(img/arandano.png);background-repeat: no-repeat; background-position: center; transform: scale(1.05);border-color :  #057AD0 ; border-style : solid;',
    rojofallo = ' background : #FF0000 ; transform: scale(1.05);',
    nivel = 1,
    secuencia,
    indice,
// segundo nivel
    verdeapagado2 = 'background : #BDBDBD; background-image:url(img/pera2.png);background-repeat: no-repeat; background-position: center;background-size: 70px;',
    verdeactivo2 = ' background : #F0F0F0 ; background-image:url(img/pera2.png);background-repeat: no-repeat; background-position: center;background-size: 70px;  border-color :  #BDBDBD ; border-style : solid;',
    rojoapagado2 = 'background : #BDBDBD ; background-image:url(img/fresa2.png);background-repeat: no-repeat; background-position: center; ',
    rojoactivo2 = ' background : #F0F0F0 ; background-image:url(img/fresa2.png);background-repeat: no-repeat; background-position: center; transform: scale(1.05); border-color :   #BDBDBD ; border-style : solid;',
    amarilloapagado2 = 'background : #BDBDBD; background-image:url(img/piña2.png);background-repeat: no-repeat; background-position: center;',
    amarilloactivo2 = ' background : #F0F0F0 ;background-image:url(img/piña2.png);background-repeat: no-repeat; background-position: center; transform: scale(1.05); border-color :  #BDBDBD ; border-style : solid;',
    naranjaapagado2 = 'background : #BDBDBD; background-image:url(img/naranja2.png);background-repeat: no-repeat; background-position: center;',
    naranjaactivo2 = ' background : #F0F0F0 ; background-image:url(img/naranja2.png);background-repeat: no-repeat; background-position: center;transform: scale(1.05); border-color :   #BDBDBD ; border-style : solid;',
    blancoapagado2 = 'background : #BDBDBD; background-image:url(img/Dragon2.png);background-repeat: no-repeat; background-position: center;',
    blancoactivo2 = ' background : #F0F0F0 ;background-image:url(img/Dragon2.png);background-repeat: no-repeat; background-position: center; transform: scale(1.05); border-color :   #BDBDBD ; border-style : solid;',
    azulapagado2 = 'background : #BDBDBD; background-image:url(img/arandano2.png);background-repeat: no-repeat; background-position: center;',
    azulactivo2 = ' background : #F0F0F0 ;background-image:url(img/arandano2.png);background-repeat: no-repeat; background-position: center; transform: scale(1.05);border-color :  #BDBDBD ; border-style : solid;',
    indice2,
    
    
    // tercer nivel
    indice3;
    //funcion copos de nieve
    var cantidadCopos = 30;
    var puntuaje = 0;
    onload = nieve;
    function saludar(){
        swal('Hola, para ganar puntos debes repetir la macedonia correcta, comenzaremos mostrandote 5 frutas pero no te confies las cosas se va complicando.')
       }
       setTimeout(saludar, 1000);
    function nieve() {
        for(c=0; c<cantidadCopos; c++) {
        copo = document.createElement("div"); 
        copo.setAttribute("class", "nieve"); 
        document.getElementById("capanieve").appendChild(copo); 
        }
      
        for(n=0; n<cantidadCopos; n++) {
        document.querySelectorAll("#capanieve .nieve")[n].addEventListener("transitionend", function(){caida(this)}, false); 
        }
      
        setTimeout(function(){
          for(c=0; c<cantidadCopos; c++) {
          elCopo = document.querySelectorAll("#capanieve .nieve")[c]; 
          elCopo.style.left = Math.floor(Math.random()*100)+ "vw"; 
          elCopo.style.transition = "top 15ms linear"; 
          elCopo.style.top = elCopo.style.top = "1vh"; 
          }
        }, 15);
      }
    function caida(T) {
    
        T.style.transition = "";
        T.style.top = "0"; 
      
        setTimeout(function(){
        T.style.transitionProperty = "left, top"; 
        T.style.transitionDelay = Math.floor(Math.random()*3000)+ "ms"; 
        T.style.transitionDuration = (Math.floor(Math.random()*15000) + 5000)+ "ms"; 
        T.style.transitionTimingFunction = "ease-in, ease-out"; 
        
        T.style.left = Math.floor(Math.random()*100)+ "vw"; 
        T.style.top = "110vh"; 
        }, 15);  
      }
   //cuenta atras para todos los niveles
    function cuentaatras() { 
        console.log(nivel);
        if(nivel == 1){
        empezar.style.cssText ='display: none;';
        cuenta.style.cssText ="display: block";
        var contador = 3;
    
        document.getElementById("cuenta").innerHTML = "<p> </p>";
    
        var tiempo = setInterval(function(){
    
        document.getElementById("cuenta").innerHTML = "<p>" + contador + "</p>";
        contador = contador - 1;
        if(contador == -1){
            comenzarpartida();
            clearInterval(tiempo);
            cuenta.style.cssText ="display: none;";
            
        }
    
    },1000);
        }else if (nivel == 2){
        empezar.style.cssText ='display: none;';
        cuenta.style.cssText ="display: block";
        var contador = 3;
    
        document.getElementById("cuenta").innerHTML = "<p> </p>";
    
        var tiempo = setInterval(function(){
    
        document.getElementById("cuenta").innerHTML = "<p>" + contador + "</p>";
        contador = contador - 1;
        if(contador == -1){
            comienzanivel2();
            clearInterval(tiempo);
            cuenta.style.cssText ="display: none;";
            
        }
        },1000);
    }else if (nivel == 3){
        empezar.style.cssText ='display: none;';
        cuenta.style.cssText ="display: block";
        var contador = 3;
    
        document.getElementById("cuenta").innerHTML = "<p> </p>";
    
        var tiempo = setInterval(function(){
    
        document.getElementById("cuenta").innerHTML = "<p>" + contador + "</p>";
        contador = contador - 1;
        if(contador == -1){
            comienzanivel3();
            clearInterval(tiempo);
            cuenta.style.cssText ="display: none;";
        }
        },1000);
    }
    }
    //funciones nivel 3

    // funciones nivel 1 
    function resetearpantalla(){
        secuencia = [];
        indice = 0;
        pulsverde.style.cssText = verdeapagado;
        pulsrojo.style.cssText = rojoapagado;
        pulsamarillo.style.cssText = amarilloapagado;
        pulsnaranja.style.cssText = naranjaapagado;
        pulsblanco.style.cssText = blancoapagado;
        pulsazul.style.cssText = azulapagado;
        
        salida.innerHTML = 'NIVEL' + nivel;
        puntos.innerHTML ='Puntos: ' + puntuaje;

    }
    function colorsecuencia(){
        var frutas = ['verde','rojo','amarillo','naranja','blanco','azul'];

        for(i=0;i<=4;i++){
        secuencia.push(frutas[numAleat(0,5)]);
        }
    } 
    function respuestasecuencia(){
        if(indice < secuencia.length){
            enciendecolor();
        }else{
            indice=0;
            pantalla.addEventListener('click', comprueba)
        }
    } 
    function enciendecolor(){
        switch(secuencia[indice]){
            case 'verde':
                pulsverde.style.cssText = verdeactivo;
                break;
            case 'rojo':
                pulsrojo.style.cssText = rojoactivo;
                break;
            case 'amarillo':
                pulsamarillo.style.cssText = amarilloactivo;
                break;
            case 'naranja':
                pulsnaranja.style.cssText = naranjaactivo;
                break;
            case 'blanco':
                pulsblanco.style.cssText = blancoactivo;
                break;
            case 'azul':
                pulsazul.style.cssText = azulactivo;
                break;
        }
        setTimeout(apagacolor, 700);
    }
    function apagacolor(){
        switch(secuencia[indice]){
            case 'verde':
                pulsverde.style.cssText = verdeapagado;
                break;
            case 'rojo':
                pulsrojo.style.cssText = rojoapagado;
                break;
            case 'amarillo':
                pulsamarillo.style.cssText = amarilloapagado;
                break;
            case 'naranja':
                pulsnaranja.style.cssText = naranjaapagado;
                break;
            case 'blanco':
                pulsblanco.style.cssText = blancoapagado;
                break;
            case 'azul':
                pulsazul.style.cssText = azulapagado;
                break;
        }
        indice++;
        setTimeout(respuestasecuencia, 150);
    }
    function comprueba(event){
        var pulsador = event.target;
        if(pulsador.id !='pantalla'){
            if(pulsador.id == secuencia[indice]){
                enciendepulsador(pulsador.id);
            }
            else{
                pulsverde.style.cssText = rojofallo;
                pulsrojo.style.cssText = rojofallo;
                pulsamarillo.style.cssText = rojofallo;
                pulsnaranja.style.cssText = rojofallo;
                pulsblanco.style.cssText = rojofallo;
                pulsazul.style.cssText = rojofallo;
                salida.innerHTML ='HAS PERDIDO';
                pantalla.removeEventListener('click',comprueba);
                empezar.style.cssText ='display: block;';
          }
        }
    }
    
    function enciendepulsador(pulsador){
        switch(pulsador){
            case 'verde':
                pulsverde.style.cssText = verdeactivo;
                break;
            case 'rojo':
                pulsrojo.style.cssText = rojoactivo;
                break;
            case 'amarillo':
                pulsamarillo.style.cssText = amarilloactivo;
                break;
            case 'naranja':
                pulsnaranja.style.cssText = naranjaactivo;
                break;
            case 'blanco':
                pulsblanco.style.cssText = blancoactivo;
                break;
            case 'azul':
                pulsazul.style.cssText = azulactivo;
                break;
        }
            setTimeout(apagarpulsador,250,pulsador);
    }
    function apagarpulsador(pulsador){
        switch(pulsador){
            case 'verde':
                pulsverde.style.cssText = verdeapagado;
                break;
            case 'rojo':
                pulsrojo.style.cssText = rojoapagado;
                break;
            case 'amarillo':
                pulsamarillo.style.cssText = amarilloapagado;
                break;
            case 'naranja':
                pulsnaranja.style.cssText = naranjaapagado;
                break;
            case 'blanco':
                pulsblanco.style.cssText = blancoapagado;
                break;
            case 'azul':
                pulsazul.style.cssText = azulapagado;
                break;
            
        }
        
        indice++;
        if(indice == secuencia.length){
            nivel++;
            salida.innerHTML = 'CORRECTO!';
            swal("Muy bien, estas listo para el siguiente nivel ?, en este nivel seran 6 frutas pero no solo cambia eso.");
            indice = 0;
            puntuaje = puntuaje + 150;
            pantalla.removeEventListener('click',comprueba);
            setTimeout(nivel2, 100);
        }
    }
    //acaban funciones nivel 1
    //funcion numero aleatorio
function numAleat(min, max){
    return  Math.floor(Math.random() * (max - min + 1))+ min;
} 
//nivel 1
function comenzarpartida(){
    resetearpantalla();
    colorsecuencia();
    respuestasecuencia();
}

//funciones del nivel 2
function nivel2(){
    empezar.style.cssText ='display: block;';
   }
function resetearpantalla2(){
    secuencia2 = [];
    indice2 = 0;
    pulsverde.style.cssText = verdeapagado2;
    pulsrojo.style.cssText = rojoapagado2;
    pulsamarillo.style.cssText = amarilloapagado2;
    pulsnaranja.style.cssText = naranjaapagado2;
    pulsblanco.style.cssText = blancoapagado2;
    pulsazul.style.cssText = azulapagado2;
    
    salida.innerHTML = 'NIVEL 2' ;
    puntos.innerHTML ='Puntos: ' + puntuaje;
}
function colorsecuencia2(){
    var frutas = ['verde','rojo','amarillo','naranja','blanco','azul'];

    for(i=0;i<=5;i++){
        secuencia2.push(frutas[numAleat(0,5)]);
    }
    
}
function respuestasecuencia2(){
    if(indice2 < secuencia2.length){
        enciendecolor2();
    }else{
        indice2=0;
        pantalla.addEventListener('click', comprueba2);
    }
}
function enciendecolor2(){
    switch(secuencia2[indice2]){
        case 'verde':
            pulsverde.style.cssText = verdeactivo2;
            break;
        case 'rojo':
            pulsrojo.style.cssText = rojoactivo2;
            break;
        case 'amarillo':
            pulsamarillo.style.cssText = amarilloactivo2;
            break;
        case 'naranja':
            pulsnaranja.style.cssText = naranjaactivo2;
            break;
        case 'blanco':
            pulsblanco.style.cssText = blancoactivo2;
            break;
        case 'azul':
            pulsazul.style.cssText = azulactivo2;
            break;
    }
    setTimeout(apagacolor2, 700);
}
function apagacolor2(){
    switch(secuencia2[indice2]){
        case 'verde':
            pulsverde.style.cssText = verdeapagado2;
            break;
        case 'rojo':
            pulsrojo.style.cssText = rojoapagado2;
            break;
        case 'amarillo':
            pulsamarillo.style.cssText = amarilloapagado2;
            break;
        case 'naranja':
            pulsnaranja.style.cssText = naranjaapagado2;
            break;
        case 'blanco':
            pulsblanco.style.cssText = blancoapagado2;
            break;
        case 'azul':
            pulsazul.style.cssText = azulapagado2;
            break;
    }
    indice2++;
    setTimeout(respuestasecuencia2, 150);
}
function comprueba2(event){
    var pulsador = event.target;
    if(pulsador.id !='pantalla'){
        if(pulsador.id == secuencia2[indice2]){
            enciendepulsador2(pulsador.id);
        }
        else{
            pulsverde.style.cssText = rojofallo;
            pulsrojo.style.cssText = rojofallo;
            pulsamarillo.style.cssText = rojofallo;
            pulsnaranja.style.cssText = rojofallo;
            pulsblanco.style.cssText = rojofallo;
            pulsazul.style.cssText = rojofallo;
            salida.innerHTML ='HAS PERDIDO';
            pantalla.removeEventListener('click',comprueba2);
            empezar.style.cssText ='display: block;';
      }
    }
}
function enciendepulsador2(pulsador){
    switch(pulsador){
        case 'verde':
            pulsverde.style.cssText = verdeactivo2;
            break;
        case 'rojo':
            pulsrojo.style.cssText = rojoactivo2;
            break;
        case 'amarillo':
            pulsamarillo.style.cssText = amarilloactivo2;
            break;
        case 'naranja':
            pulsnaranja.style.cssText = naranjaactivo2;
            break;
        case 'blanco':
            pulsblanco.style.cssText = blancoactivo2;
            break;
        case 'azul':
            pulsazul.style.cssText = azulactivo2;
            break;
    }
        setTimeout(apagarpulsador2,250,pulsador);
}
function apagarpulsador2(pulsador){
    switch(pulsador){
        case 'verde':
            pulsverde.style.cssText = verdeapagado2;
            break;
        case 'rojo':
            pulsrojo.style.cssText = rojoapagado2;
            break;
        case 'amarillo':
            pulsamarillo.style.cssText = amarilloapagado2;
            break;
        case 'naranja':
            pulsnaranja.style.cssText = naranjaapagado2;
            break;
        case 'blanco':
            pulsblanco.style.cssText = blancoapagado2;
            break;
        case 'azul':
            pulsazul.style.cssText = azulapagado2;
            break;
        
    }
    
    indice2++;
    if(indice2 == secuencia2.length){
        nivel++;
        salida.innerHTML = 'CORRECTO!';
        swal("Perfecto veo que se te da bien , ten cuidado ahora seran 8 frutas y con mas velocidad");
        empezar.style.cssText ='display: block;';
        puntuaje = puntuaje + 150;
        pantalla.removeEventListener('click',comprueba2);

    }
}
//nivel 2
function comienzanivel2(){
    empezar.style.cssText ='display: none;';

    resetearpantalla2();
    colorsecuencia2();
    respuestasecuencia2();
}
//funciones nivel 3
function nivel3(){
    empezar.style.cssText ='display: block;';
    }
function comienzanivel3(){
    
    empezar.style.cssText ='display: none;';
    
            resetearpantalla3();
            colorsecuencia3();
            respuestasecuencia3();
            
}
function resetearpantalla3(){
    secuencia3 = [];
    indice3 = 0;
    pulsverde.style.cssText = verdeapagado2;
    pulsrojo.style.cssText = rojoapagado2;
    pulsamarillo.style.cssText = amarilloapagado2;
    pulsnaranja.style.cssText = naranjaapagado2;
    pulsblanco.style.cssText = blancoapagado2;
    pulsazul.style.cssText = azulapagado2;
    
    salida.innerHTML = 'NIVEL 3' ;
    puntos.innerHTML ='Puntos: ' + puntuaje;
}
function colorsecuencia3(){
    var frutas = ['verde','rojo','amarillo','naranja','blanco','azul'];

    for(i=0;i<=7;i++){
        secuencia3.push(frutas[numAleat(0,5)]);
    }
    
}
function respuestasecuencia3(){
    if(indice3 < secuencia3.length){
        enciendecolor3();
    }else{
        indice3=0;
        pantalla.addEventListener('click', comprueba3);
    }
}
function enciendecolor3(){
    switch(secuencia3[indice3]){
        case 'verde':
            pulsverde.style.cssText = verdeactivo2;
            break;
        case 'rojo':
            pulsrojo.style.cssText = rojoactivo2;
            break;
        case 'amarillo':
            pulsamarillo.style.cssText = amarilloactivo2;
            break;
        case 'naranja':
            pulsnaranja.style.cssText = naranjaactivo2;
            break;
        case 'blanco':
            pulsblanco.style.cssText = blancoactivo2;
            break;
        case 'azul':
            pulsazul.style.cssText = azulactivo2;
            break;
    }
    setTimeout(apagacolor3, 200);
}
function apagacolor3(){
    switch(secuencia3[indice3]){
        case 'verde':
            pulsverde.style.cssText = verdeapagado2;
            break;
        case 'rojo':
            pulsrojo.style.cssText = rojoapagado2;
            break;
        case 'amarillo':
            pulsamarillo.style.cssText = amarilloapagado2;
            break;
        case 'naranja':
            pulsnaranja.style.cssText = naranjaapagado2;
            break;
        case 'blanco':
            pulsblanco.style.cssText = blancoapagado2;
            break;
        case 'azul':
            pulsazul.style.cssText = azulapagado2;
            break;
    }
    indice3++;
    setTimeout(respuestasecuencia3, 250);
}
function comprueba3(event){
    var pulsador = event.target;
    if(pulsador.id !='pantalla'){
        if(pulsador.id == secuencia3[indice3]){
            enciendepulsador3(pulsador.id);
        }
        else{
            pulsverde.style.cssText = rojofallo;
            pulsrojo.style.cssText = rojofallo;
            pulsamarillo.style.cssText = rojofallo;
            pulsnaranja.style.cssText = rojofallo;
            pulsblanco.style.cssText = rojofallo;
            pulsazul.style.cssText = rojofallo;
            salida.innerHTML ='HAS PERDIDO';
            pantalla.removeEventListener('click',comprueba3);
            empezar.style.cssText ='display: block;';
      }
    }
}
function enciendepulsador3(pulsador){
    switch(pulsador){
        case 'verde':
            pulsverde.style.cssText = verdeactivo2;
            break;
        case 'rojo':
            pulsrojo.style.cssText = rojoactivo2;
            break;
        case 'amarillo':
            pulsamarillo.style.cssText = amarilloactivo2;
            break;
        case 'naranja':
            pulsnaranja.style.cssText = naranjaactivo2;
            break;
        case 'blanco':
            pulsblanco.style.cssText = blancoactivo2;
            break;
        case 'azul':
            pulsazul.style.cssText = azulactivo2;
            break;
    }
        setTimeout(apagarpulsador3,150,pulsador);
}
function apagarpulsador3(pulsador){
    switch(pulsador){
        case 'verde':
            pulsverde.style.cssText = verdeapagado2;
            break;
        case 'rojo':
            pulsrojo.style.cssText = rojoapagado2;
            break;
        case 'amarillo':
            pulsamarillo.style.cssText = amarilloapagado2;
            break;
        case 'naranja':
            pulsnaranja.style.cssText = naranjaapagado2;
            break;
        case 'blanco':
            pulsblanco.style.cssText = blancoapagado2;
            break;
        case 'azul':
            pulsazul.style.cssText = azulapagado2;
            break;
        
    }
    
    indice3++;
    if(indice3 == secuencia3.length){
        nivel++;
        puntuaje = puntuaje +150;
        puntos.innerHTML = 'Puntos: ' + puntuaje;
        salida.innerHTML = 'CORRECTO!';
        swal("MUY BIEN HAS TERMINADO EL JUEGO !!! HAS GANADO 450 PUNTOS.");
        siguiente.style.cssText ="display: block"
        pantalla.removeEventListener('click',comprueba3);

    }
}
siguiente.style.cssText ="display: none";
empezar.addEventListener("click", cuentaatras);
