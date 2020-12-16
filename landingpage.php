<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/libraries/Font-awesome/css/all.css">
        <link rel="stylesheet" href="assets/css/micss.css" type="text/css">
        <link rel="stylesheet" href="assets/css/landing.css" type="text/css">
    </head>

<!-- web para que te maquete la web con el boostrap mas facil https://www.layoutit.com/cn -->


  <body>


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
              <a class="nav-link" href="ofertas.php">Ofertas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mercados.php">Tiendas</a>
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



      <div class="container-fluid" id="container">

        <div class="row">

          <div class="col-2 px-1 position-fixed" id="sidebar-fija">

            <div class="nav flex-column flex-nowrap 100px overflow-auto text-white">

              <h3><u>Menú</u></h3>

              <hr id="separador">

              <a style="text-decoration:none" href="landing.php"><i class="fas fa-home fa-2x"></i> Home</a>

              <hr id="separador">

              <a style="text-decoration:none" href="mercados.php"><i class="fas fa-store-alt fa-2x"></i> Tiendas</a>

              <hr id="separador">

              <a style="text-decoration:none" href="ofertas.php"><i class="fas fa-tags fa-2x"></i> Ofertas</a>

              <hr id="separador">

              <a style="text-decoration:none" href="Juegos/juego.php"><i class="fas fa-dice fa-2x"></i> Juegos</a>
            
            </div>

          </div>

            <div class="col-8" id="noticias">

              <h1><u>Bienvenidos a la pagina del mercado de Barcelona</u></h1>

              <div class="card mb-3" id="card-noticia">
              
                <div class="row g-0">
                
                  <div class="col-md-4" id="foto-noticia">
                  
                    <img src="assets/img/boqueria.jpg">
                  
                  </div>
                  
                  <div class="col-md-8">
                  
                    <div class="card-body" id="informacion-noticia">
                    
                      <h5 class="card-title">Titulo de la notícia</h5>
                      
                      <p class="card-text">información sobre la notícia correspondiente, en este caso se trataria sobre una notícia de la boqueria o algo relacionado con los mercados de Barcelona
                                           y su ayuda de promocionar los negocios locales para ayudar a los trabajadores</p>
                      
                      <a href="#" class="btn" id="boton-noticia">Ir notícia</a>
                    
                    </div>
                  
                  </div>
                
                </div>
              
              </div>

            </div>

            <div class="col-2 px-1 position-fixed" id="sidebar-fija2">

              <h3><u>Ofertas y descuentos</u></h3>

            </div>

        </div>

      </div>

      




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