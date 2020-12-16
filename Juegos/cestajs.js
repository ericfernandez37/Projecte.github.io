
window.onload = function(){

    //Variables 

    var juego = false;

    var fondoJuego = document.getElementById("fondoJuego");
    
    var puntuacion = 0;
    var contador = 20;

    var botonIniciar = document.getElementById("empezar");
    var siguiente = document.getElementById("siguiente");
    
    
    //variables productos 
    var producto1 = document.getElementById("producto1");
    var producto2 = document.getElementById("producto2");
    var producto3 = document.getElementById("producto3");
  

    // variables canasta y movimineto teclado 
    var canasta = document.getElementById("canasta");
    var izquierda = 37;
    var derecha = 39;
   
    
    // variables para detector de colisiones 
    var canastaw,canastah,canastax,canastay;
    var producto1w , producto1h, producto1x, producto1y;
    var producto2w , producto2h, producto2x, producto2y;
    var producto3w , producto3h, producto3x, producto3y;

    //velociddades en las que se mueven los divs
    var velocitat = 25;
    var aumentarvelocidad = 10;

    

    document.addEventListener("keydown",function(key){ // moviment de les teclas (esquerra ,dreta)

         if (key.keyCode == izquierda){
            var posicionCanasta = parseInt(window.getComputedStyle(canasta).getPropertyValue("left"));
            console.log(posicionCanasta);
         
                if(posicionCanasta >= 22){
                    var posicionNueva = posicionCanasta  - velocitat;
                    canasta.style.left = posicionNueva + 'px';      
                }
        }
            else if (key.keyCode == derecha) {
                var posicionCanasta = parseInt(window.getComputedStyle(canasta).getPropertyValue("left"));
            
                    if(posicionCanasta < 720){
                        var posicionNueva = posicionCanasta + velocitat; 
                        canasta.style.left = posicionNueva + 'px'; 
                    }
                
            }
    });
  
    setInterval (function(){ // funcio per a que els productes caiguin en un interval de temps 

       

        if(juego == true){//condicion para que se pare el juego 


            var producto1top = parseInt(window.getComputedStyle(producto1).getPropertyValue("top"));
            var producto2top = parseInt(window.getComputedStyle(producto2).getPropertyValue("top"));  
            var producto3top = parseInt(window.getComputedStyle(producto3).getPropertyValue("top"));   
            var posiciontopnueva1;
            var posiciontopnueva2;
            var posiciontopnueva3;

            if(producto1top <= 450){
              
                 posiciontopnueva1 = producto1top + 5;
                producto1.style.top = posiciontopnueva1 +'px';
                
                

            }else if (producto1top >= 450 ){
                producto1.style.top = '0px';
                producto1.style.left = numAleatorio() + 'px';
                producto1.style.backgroundImage = imagenAleatoria();//recoremos la funcion para cambio de imagenes 
               
            }

             if(producto2top < 450){
                
                 posiciontopnueva2 = producto2top + 4;
                producto2.style.top = posiciontopnueva2 +'px';

            } else if (producto2top >= 450 ){
                producto2.style.top = '0px';
                producto2.style.left = numAleatorio() + 'px';
                producto3.style.backgroundImage = imagenAleatoria();//recoremos la funcion para cambio de imagenes 
            }

            if(producto3top < 450){
             
                 posiciontopnueva3 = producto3top + 6;
                producto3.style.top = posiciontopnueva3 +'px';

            }else if (producto3top >= 450 ){
                producto3.style.top = '0px';
                producto3.style.left = numAleatorio() + 'px';
                producto3.style.backgroundImage = imagenAleatoria();//recoremos la funcion para cambio de imagenes 
            }
            
        }    

    },50);
    
   function numAleatorio(){ // funcio per que els productes es moguin aleatoriament 
       var numAleatorio = Math.floor(Math.random() *5 );

       switch (numAleatorio){

        case 0 : var posicionleft = 0;
        break;

        case 1  : var posicionleft = 160;
        break;

        case 2  : var posicionleft = 320;
        break;

        case 3  : var posicionleft = 480;
        break;

        case 4  : var posicionleft = 640;
        break;         
       }

            return posicionleft;
   }    


        function imagenAleatoria(){// funcio per imatges aleatorias 

            var numAleatorioImg = Math.floor(Math.random() *11 );

            switch (numAleatorioImg){
     
             case 0 : var imagen = "url('imagenes/135.png')";
             break;
     
             case 1  : var imagen= "url('imagenes/Apple_Pie.png')";
             break;
     
             case 2  : var imagen= "url('imagenes/Bagel.png')";
             break;
     
             case 3  : var imagen = "url('imagenes/Banana_Bread.png')";
             break;
     
             case 4  : var imagen = "url('imagenes/BreadSU.png')";
             break;
             
             case 5  : var imagen = "url('imagenes/Cake.png')";
             break; 
             
             case 6  : var imagen = "url('imagenes/Churros.png')";
             break;   
             
             case 7  : var imagen = "url('imagenes/Cinnamon_Bun.png')";
             break; 
             
             case 8  : var imagen = "url('imagenes/Cream_Puff.png')";
             break;  
             
             case 9  : var imagen = "url('imagenes/Cupcake.png')";
             break; 
             
             case 10 : var imagen = "url('imagenes/GingerbreadSU.png')";
             break;
             
                
            }
     
                 return imagen;
        }    
     
    

        setInterval (function deteccioncolision(){ // deteccion de los productos con la canasta 
            
    
          //   const colision =  document.querySelectorAll(".productos"); 
               
            canastaw = canasta.offsetWidth;
            canastah = canasta.offsetHeight;
            canastax = canasta.offsetLeft;
            canastay = canasta.offsetTop;

            producto1w = producto1.offsetWidth;
            producto1h = producto1.offsetHeight;
            producto1x = producto1.offsetLeft;
            producto1y = producto1.offsetTop;

            producto2w = producto2.offsetWidth;
            producto2h = producto2.offsetHeight;
            producto2x = producto2.offsetLeft;
            producto2y = producto2.offsetTop;

            producto3w = producto3.offsetWidth;
            producto3h = producto3.offsetHeight;
            producto3x = producto3.offsetLeft;
            producto3y = producto3.offsetTop;

            if(juego == true){// condicio para iniciar 
            // comprobamos que alla colision prducto1
            if ((canastax + canastaw) > producto1x && canastax < (producto1x + producto1w) 
            && (canastay + canastah) > producto1y && canastay < (producto1y + producto1h)){
                // hacemos que al hacer colision desaparezca
                 puntuacion = puntuacion + 10;
                 producto1.style.top = '0px';
                 producto1.style.left = numAleatorio() + 'px';
                 producto1.style.backgroundImage = imagenAleatoria();//recoremos la funcion para cambio de imagenes 
               
            }
        

             // comprobamos que alla colision producto2
             if ((canastax + canastaw) > producto2x && canastax < (producto2x + producto2w) 
             && (canastay + canastah) > producto2y && canastay < (producto2y + producto2h)){
                   // hacemos que al hacer colision desaparezca
                   puntuacion = puntuacion + 10;
                   producto2.style.top = '0px';
                   producto2.style.left = numAleatorio() + 'px';
                   producto2.style.backgroundImage = imagenAleatoria();//recoremos la funcion para cambio de imagenes 
             }


              // comprobamos que alla colision producto3
              if ((canastax + canastaw) > producto3x && canastax < (producto3x + producto3w) 
              && (canastay + canastah) > producto3y && canastay < (producto3y + producto3h)){
                // hacemos que al hacer colision desaparezca
                   puntuacion = puntuacion + 10;
                   producto3.style.top = '0px';
                   producto3.style.left = numAleatorio() + 'px';
                   producto3.style.backgroundImage = imagenAleatoria();//recoremos la funcion para cambio de imagenes 
                
              }
            }
        });
    
     

        //contador para que el jugador tenga un minuto ,repetimos la funcion en un intervalo de (1 segundo)

        var tiempojuego = setInterval(function(){
            
            if (juego == true){
                contador = contador -1;
                document.getElementById("contador").innerHTML =  "<p> Tiempo <br>" + contador + "</p>";
                if (contador <= 0){
                    final();
                    clearInterval(tiempojuego);
                }
              
            } else {
                juego == false;
            } 
        }, 1000);


     intervalpuntuacion = setInterval (function(){//funcio per a la puntuacio 
        document.getElementById("puntuacion").innerHTML = "<p> puntuacion <br>" + puntuacion + "</p>";
        if(juego == false){
            if(puntuacion >= 150){
                // alert("fin de juego");
                final();
                clearInterval(intervalpuntuacion);
                
            }
        }{
            juego == true;
        }
            
       
    },100);

         function velocidadProductos(){

            if(aumentarvelocidad < 6 && juego == true ){
                 puntuacion += 50;
                 }
             }


             function final(){ //funcion para terminar juego 
                alert("juego finalizado");
                juego = false;
            }
            
    
            botonIniciar.addEventListener("click", function(){//funcion para empezar juego 
                juego = true;
                botonIniciar.style.visibility = "hidden";
            })
    

            siguiente.addEventListener ("click", function(){ //funcion para pasar a siguiente juego 
                juego = false;
                siguiente.style.visibility = "hidden";
                window.location.href = "encestar.php";
        
            })
}







