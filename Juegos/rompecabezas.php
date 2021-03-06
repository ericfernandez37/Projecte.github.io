<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rompecabezas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/libraries/Font-awesome/css/all.css">
    <link rel="stylesheet" href="../assets/css/micss.css" type="text/css">
    <link rel="stylesheet" href="styles/cssrompecabezas.css">
</head>
<body>
  

  <!--https://www.jspuzzles.com/puzzle.php?puzzle=2458709&lang=es&size=5&cut=7&scale=6-->

    <nav class="navbar navbar-expand-lg navbar-dark fixed-top border-bottom" id="navbar">
        <a class="navbar-brand" href="#">MERCAT DE BARCELONA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto topnav">
            <li class="nav-item active">
              <a class="nav-link" href="landingpage.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="ofertas.html">Ofertas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mercados.html">Tiendas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn text-white" type="button" href="#" data-toggle="modal" data-target="#myModal" id="botoniniciar">Iniciar sessión</a>                  
            </li>
            <li class="nav-item">
              <a class="nav-link btn text-white" type="button" href="/registro.html" data-toggle="modal" data-target="#myModal" id="botonregistnav">Registrarse</a>
            </li>
          </ul>
        </div>     
    </nav>


    
          <div class="sidenav">
            <br><br>
            <h4> <div class="cuentaregresiva"> Cuenta Regresiva</div></h4>
            <h2><span id="countdown"></span></h2>
             <a href="#">puntuación</a>
            <div class="parrafo">
              <p>completa el puzzle para pasar al 
                  siguiente nivel.
              </p>
            </div>
            
            <div id="botonfondo" class="container">
              <a href="../landingpage.php"><img src="Imagenes_puzzle/regresar.png" height="30" width="45" alt="Botón"></a>
            </div> 
          </div>
        


          <svg width="600" height="600" id="entorno">
            <g id="fondo"><image xlink:href="Imagenes_puzzle/fondo.jpg" width="400" height="400" x="180" y="60"></g>
          <g class="padre" id="0"><image xlink:href="Imagenes_puzzle/pieza01.png" class="movil"></g>
          <g class="padre" id="1"><image xlink:href="Imagenes_puzzle/pieza02.png" class="movil"></g>
          <g class="padre" id="2"><image xlink:href="Imagenes_puzzle/pieza03.png" class="movil"></g>
          <g class="padre" id="3"><image xlink:href="Imagenes_puzzle/pieza04.png" class="movil"></g>
          <g class="padre" id="4"><image xlink:href="Imagenes_puzzle/pieza05.png" class="movil"></g>
          <g class="padre" id="5"><image xlink:href="Imagenes_puzzle/pieza06.png" class="movil"></g>
          <g class="padre" id="6"><image xlink:href="Imagenes_puzzle/pieza07.png" class="movil"></g>
          <g class="padre" id="7"><image xlink:href="Imagenes_puzzle/pieza08.png" class="movil"></g>
          <g class="padre" id="8"><image xlink:href="Imagenes_puzzle/pieza09.png" class="movil"></g>
        </svg>

        <div class="ganador">
          
        </div>

        <br>
        
        <button type="button" id="siguiente" class="border 2px"></button>


        <audio id="win" src="media/victoria.mp3"></audio>
          
        <script type="text/javascript" src="script_rompecabezas.js"></script>
<!-- Footer -->
<footer class="font-small pt-4 border-top fixed-bottom" id="footer">

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
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">Conocenos mas:
      <a href="https://politecnics.barcelona/">Politecnics</a>
    </div>
    <!-- Copyright -->
  
  </footer>
  <!-- Footer -->
</body>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

</html>