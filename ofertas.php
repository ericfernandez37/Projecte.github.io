<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/libraries/Font-awesome/css/all.css">
    <link rel="stylesheet" href="assets/css/micss.css" type="text/css">
    <llink rel="stylesheet" href="css/cssmercados.css" type="text/css">
    <link rel="stylesheet" href="assets/css/ofertas.css" type="text/css">
  </head>


  <body>


    <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
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





 <!-- sidebar -->
 
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


   <!-- ofertas -->

       <!-- <section  class="py-5">
         <div class="container">
      
        <div class="oferta1" id="oferta1">
          <div class="card" style="width: 18rem;">
              <div class="card text-center border-primary">
                <img src="assets/img/losjueves2x1.png" class="card-img-top" alt="primera oferta" height="215px">
                <div class="card-body">
                   <h3 class="card-text"> Por la compra de dos chuletas <br> llevata una de regalo </h3>                           
                  <button type="submit">canjear cupon</button>
                </div>
               </div>
          </div>
        </div>


          
            <div class="card" style="width: 18rem;">
              <div class="card text-center border-primary">
                <img src="assets/img/30-porciento.png" class="card-img-top" alt="promera oferta">
                <div class="card-body">
                  <h3 class="card-text">Por la compra de 50 &euro;</h3>
                  <button type="submit">canjear cupon</button>
                </div>
              </div>    
            </div>



            <div class="card" style="width: 18rem;">
              <div class="card text-center border-primary">
                <img src="assets/img/30-porciento.png" class="card-img-top" alt="promera oferta">
                <div class="card-body">
                    <h3 class="card-text">Por la compra de 50 &euro;</h3>
                     <button type="submit">canjear cupon</button>
                </div>
              </div>    
            </div>


                                         
   </div> 
  </div>
     </section>  -->

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