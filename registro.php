<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro</title>
  <meta charset="utf-8" />
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/libraries/Font-awesome/css/all.css">
  <link rel="stylesheet" href="assets/css/micss.css" type="text/css">
  <llink rel="stylesheet" href="css/cssmercados.css" type="text/css">
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
    <a class="navbar-brand" href="landingpage.html">MERCAT DE BARCELONA</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  </nav>

  <!--Registro-->

  <div id="fondo-mercado">
    <div class="container">
      <div class="card mt-3">
        <div class="card-header">
          <i class="fas fa-user fa-2x"></i>
          <label for="txtcrear" class="col-sm2 col-form-label font-weight-bold">
            <h4>Crear cuenta</h4>
          </label>
        </div>
        <div class="card-body">
          <form action="" method="POST" enctype="multipart/form-data">
            <div class="form-group row">
              <label for="Nombre" class="col-sm-4 col-form-label control-label">Introduce tu nombre:</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" name="Nombre" id="Nombre" placeholder="Nombre" required>
              </div>
            </div>
            <div class="form-group row">
              <label for="Email" class="col-sm-4 col-form-label control-label">Introduce tu correo electrónico: </label>
              <div class="col-sm-8">
                <input type="text" class="form-control" name="Email" id="Email" placeholder="ejemplo@ejemplo.com"
                  required>
              </div>
            </div>
            <div class="form-group row">
              <label for="Contraseña" class="col-sm-4 control-label col-form-label">Introduce tu contraseña: </label>
              <div class="col-sm-8">
                <input type="password" class="form-control" name="Contraseña" id="Contraseña" placeholder="Contraseña"
                  required>
              </div>
            </div>
            <div class="form-group row">
              <label for="Contraseña" class="col-sm-4 col-form-label control-label">Repetir contraseña: </label>
              <div class="col-sm-8">
                <input type="password" class="form-control" name="Contraseña" id="Contraseña" placeholder="Contraseña"
                  required>
              </div>
            </div>
            <div class="form-group row">
              <label for="fileImagen" class="col-sm-4 col-form-label">Foto de perfil:</label>
              <div class="col-sm-8">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" name="fileImagen" id="fileImagen" lang="en"
                    accept=".pdf,.jpg,.png">
                  <label class="custom-file-label" for="customFileLang">(Opcional)</label>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-secondary float-right"><a href="landingpage.html">Cancelar</a></button>
            <button type="submit" class="btn btn-primary float-right" id="botonacep">Aceptar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer class="page-footer font-small pt-0" id="footer">
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


  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>