<?php

/**
 * LOGIN FORM
 * Autor: Marc Martínez Mayné
 * Fecha: 26/11/2020
 * Revisor: -
 * Fecha: -
 */

error_reporting(E_ALL);
ini_set('display_errors', '1');

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

if (isset($_POST['lang'])) {
    $_SESSION['language'] = $_POST['lang'];
} else if (!isset($_SESSION['language'])) {
    $_SESSION['language'] = "en";
}
// ToDo Borrar cuando se pueda cambiar de idioma. Está así para probar los idiomas.
$_SESSION['language'] = "ca";

include_once "master.php";


$contentFile = "content/" . $_SESSION['language'] . ".json";
$contentJson = file_get_contents($contentFile);
$content = json_decode($contentJson, true);
?>

<?php startblock('titulo')?><?php echo $content["login"]["pagetitle"];?><?php endblock() ?>
<?php startblock('ownCSS')?><link rel="stylesheet" href="css/login.css" type="text/css"><?php endblock() ?>

<?php startblock('principal')?>
<div class="container h-100">
        <div class="row align-items-center h-100">
            <div class="card m-auto col-sm-10 col-md-7 text-center">
                <div class="card-body text-light">
                    <!-- Formulario -->
                    <form class="form-signin" action="" method="POST">
                        <!-- Logo login -->
                        <i class="fas fa-user fa-2x"></i>
                        <!-- Titulo -->
                        <h1 class="h3 mb-3 font-weight-normal"><?php echo $content["login"]["title"];?></h1>
                        <!-- Nombre de Usuario -->
                        <label for="inputUser" class="sr-only"><?php echo $content["login"]["username"]; ?></label>
                        <input type="text" name="identificador" id="inputUser" class="form-control" placeholder="<?php echo $content["login"]["username"];?>" value="" required autofocus>
                        <!-- Contraseña -->
                        <label for="inputPassword" class="sr-only"><?php echo $content["login"]["password"]; ?></label>
                        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="<?php echo $content["login"]["password"];?>" required>
                        <!-- Submit -->
                        <button class="btn btn-lg btn-warning btn-block mt-3" type="submit"><?php echo $content["login"]["title"];?></button>
                        <hr class="mt-4 mb-3 mx-auto col-8">
                        <!-- Link al Registro -->
                        <p><?php echo $content["login"]["noaccount"];?> <a href="registro.html" class="text-warning change_link"><?php echo $content["login"]["register"];?></a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php endblock() ?>
