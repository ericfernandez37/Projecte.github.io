/*Cronometro*/ 
var inicio=0;
	var timeout=0;
 
	function empezarDetener(elemento)
	{
		if(timeout==0)
		{
			// empezar el cronometro
 
			elemento.value="Detener";
 
			// Obtenemos el valor actual
			inicio=vuelta=new Date().getTime();
 
			// iniciamos el proceso
			funcionando();
		}else{
			// detemer el cronometro
 
			elemento.value="Empezar";
			clearTimeout(timeout);
			timeout=0;
		}
	}
 
	function funcionando()
	{
		// obteneos la fecha actual
		var actual = new Date().getTime();
 
		// obtenemos la diferencia entre la fecha actual y la de inicio
		var diff=new Date(actual-inicio);
 
		// mostramos la diferencia entre la fecha actual y la inicial
		var result=LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds());
		document.getElementById('crono').innerHTML = result;
 
		// Indicamos que se ejecute esta función nuevamente dentro de 1 segundo
		timeout=setTimeout("funcionando()",1000);
	}
 
    /* Funcion que pone un 0 delante de un valor si es necesario */
	function LeadingZero(Time) {
		return (Time < 10) ? "0" + Time : + Time;
  }


/*Puzzle*/ 
var piezas = document.getElementsByClassName('movil');

var tamwidth = [230,1800,230,230,230,230,230,150,230];
var tamheight = [200,180,200,200,200,200,230,250,200];

for(var i=0;i<piezas.length;i++){
    piezas[i].setAttribute("width",tamwidth[i]);
    piezas[i].setAttribute("height",tamheight[i]);
    piezas[i].setAttribute("x", Math.floor((Math.random() * 10) * 1));
    piezas[i].setAttribute("y", Math.floor((Math.random() * 409) * 1));
    piezas[i].setAttribute("onmousedown","seleccionarelemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarelemento(evt) {
    elementSelect = reordenar(evt);
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPosx = parseFloat(elementSelect.getAttribute("x"));
    currentPosy = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove","moverelemento(evt)");
}

function moverelemento(evt){
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    currentPosx = currentPosx + dx;
    currentPosy = currentPosy + dy;
    elementSelect.setAttribute("x",currentPosx);
    elementSelect.setAttribute("y",currentPosy);
    currentX = evt.clientX;
    currentY = evt.clientY;
    elementSelect.setAttribute("onmouseout","deseleccionarelemento(evt)");
    elementSelect.setAttribute("onmouseup","deseleccionarelemento(evt)");
    iman();
}

function deseleccionarelemento(evt){
    if(elementSelect != 0){
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmousemout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }
}

var entorno = document.getElementById('entorno');

function reordenar(evt){
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;
}

var origX = [200,304,466,200,333,437,200,304,466];   
var origY = [100,100,100,233,204,233,337,366,337];

function iman(){
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}

function testing() {
	var bien_ubicada = 0;
	var padres = document.getElementsByClassName('padre');
	for(var i=0;i<piezas.length;i++){
		var posx = parseFloat(padres[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
		ide = padres[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			bien_ubicada = bien_ubicada + 1;
		}
	}
	if(bien_ubicada == 9){
		win.play();
	}
}