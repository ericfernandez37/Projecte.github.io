<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="styles/cssjuego.css" type="text/css">
    </head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">

        <a class="navbar-brand" href="#">MERCAT DE BARCELONA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto topnav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ofertas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tiendas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn text-white" type="button" href="#" data-toggle="modal" data-target="#myModal" id="botoniniciar">Iniciar sessión</a>                  
                </li>
                <li class="nav-item">
                    <a class="nav-link btn text-white" type="button" href="#" data-toggle="modal" data-target="#myModal" id="botonregistnav">Registrarse</a>
                </li>
            </ul>
        </div>
    </nav>

    <div id="capanieve"></div>
<div class="contenedor" style="margin-top: 0%">
    
    <h1 id="salida" style="margin-top: 2.8%; margin-left: 15%;">MACEDONIA</h1>
    <h2 id="puntos" style="margin-left: 55%;">Puntos:</h2>
    <div class="pantalla" id="pantalla" style=" margin-left: 27%;">
        <div class="fruta" id="rojo" data-izquierda="false"></div>
        <div class="fruta" id="amarillo" data-izquierda="true"></div>
        <div class="fruta med" id="naranja" data-izquierda="true"></div>
        <div class="fruta med" id ="blanco" data-izquierda="true"></div>
        <div class="fruta" id ="azul" data-izquierda="true"></div>
        <div class="fruta" id ="verde" data-izquierda="true"></div>
        <div class="macedonia"></div>
        <div class="macedonia" id="cuenta"></div>
        <button class="macedonia" id="empezar">Empezar</button>
        <button class="macedonia" id="siguiente">Siguiente Juego</button>

        
    </div>

</div>

<!-- Footer -->
<footer class="page-footer font-small pt-4 mb-0 fixed-bottom" id="footer">

    <!-- Call to action -->
  
    <!-- Social buttons -->
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fab fa-facebook fa-2x"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter-square fa-2x"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fab fa-google-plus fa-2x"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fab fa-linkedin fa-2x"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-github mx-1">
          <i class="fab fa-github fa-2x"> </i>
        </a>
      </li>
    </ul>
    <!-- Social buttons -->

    <!--
    <ul class="list-unstyled list-inline text-center py-2">
        <li class="list-inline-item">
          <h5 class="mb-1">Registrate gratis!</h5>
        </li>
        <li class="list-inline-item">
          <a href="#!" class="btn btn-rounded" id="botonregistr">Registrarse</a>
        </li>
      </ul>
      -->
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">Conocenos mas:
      <a href="https://politecnics.barcelona/">Politecnics</a>
    </div>
    <!-- Copyright -->
  
  </footer>
  <!-- Footer -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="juegocopia.js"></script>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

</html>