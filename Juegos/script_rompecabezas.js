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
  
  /*puzzle*/

  var piezas = document.getElementsByClassName("movil");

  var tamwidth = [134,192,134,163,134,163,134,192,134];
  var tamheight = [164,134,163,134,192,134,163,134,163];

  for(var i=0; i<piezas.length;i++){
    piezas[i].setAttribute("width", tamwidth[i]);
    piezas[i].setAttribute("height", tamheight[i]);
    piezas[i].setAttribute("x",Math.floor((Math.random() + 10) + 1));
    piezas[i].setAttribute("y",Math.floor((Math.random() + 209) + 1));
    piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
  }


var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;


function seleccionarElemento(evt){
  elementSelect = reordenar(evt);
  currentX = evt.clientX;
  currentY = evt.clientY;
  currentPosX = parseFloat(elementSelect.getAttribute("x"));
  currentPosY = parseFloat(elementSelect.getAttribute("y"));
  elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}

function moverElemento(evt){
  var dx = evt.clientX - currentX;
  var dy = evt.clientY - currentY;
  currentPosX  = currentPosX + dx;
  currentPosY  = currentPosY + dy;
  elementSelect.setAttribute("x",currentPosX);
  elementSelect.setAttribute("y",currentPosY);
  currentX = evt.clientX;
  currentY = evt.clientY;
  elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
  elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
  
}

function deseleccionarElemento(evt){
  if(elementSelect != 0){
    elementSelect.removeAttribute("onmousemove");
    elementSelect.removeAttribute("onmouseout");
    elementSelect.removeAttribute("onmouseup");
    elementSelect = 0;


  }
}

var imagenfondofondo = document.getElementById('imagenfondo');

function reordenar(evt){
  var padre = evt.target.parentNode;
  var clone = padre.cloneNode(true);
  var id = padre.getAttribute("id");
  imagenfondo.removeChild(document.getElementById(id));
  imagenfondo.appendChild(clone);
  return imagenfondo.lastChild.firstChild;

}

var origX = [200,304,466,200,333,437,200,304,466];
var origY = [100,100,100,233,204,233,337,266,337];

var vict = document.getElementById("victoria");

function testing(){
  var bien_ubicada = 0;
  var padres = document.getElementsByClassName('pade');
  for(var i=0; i<piezas.length;i++){
    var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
    var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
    ide = padres[i].getAttribute("id");
    if(origX[ide] == posx && origY[ide] == posy){
        bien:ubicada = bien_ubicada + 1;
    }
  }
}



