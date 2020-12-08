document.onkeydown  = pulsaTecla;
document.onkeyup    = soltarTecla;
document.onkeypress = mantenerTecla;

var fondo   = $('#fondojuego');
var jugador = $('#jugador');
var w       = fondo.width() - jugador.width();
var d       = {};
var x       = 3;

function nuevapos(v, a, b){
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function(){
    jugador.css({
        left: function(i,v) {return nuevapos(v, 37, 39); },
        top:  function(i,v) {return nuevapos(v, 38, 40); }
    });
}, 20);