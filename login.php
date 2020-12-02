<?php

/**
 * LOGIN FORM
 * Autor: Marc Martínez Mayné
 * Fecha: 26/11/2020
 * Revisor: -
 * Fecha: -
 */

include_once "assets/templates/master.php";

error_reporting(E_ALL);
ini_set('display_errors', '1');

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

if (isset($_SESSION['identificador'])) {
    $identificador = $_SESSION['identificador'];
} else {
    $identificador = "";
}

?>

<?php startblock('titulo') ?><?php echo $content["login"]["pagetitle"]; ?><?php endblock() ?>
<?php startblock('ownCSS') ?>
<link rel="stylesheet" href="assets/css/login.css" type="text/css"><?php endblock() ?>

<?php startblock('principal') ?>
<div class="container h-100">
    <div class="row align-items-center h-100">
        <div class="card m-auto col-sm-10 col-md-7 text-center">
            <div class="card-body text-light">
                <!-- Formulario -->
                <form class="form-signin" action="api/login.php" method="POST">
                    <!-- Logo login -->
                    <i class="fas fa-user fa-2x"></i>
                    <!-- Titulo -->
                    <h1 class="h3 mb-3 font-weight-normal"><?php echo $content["login"]["title"]; ?></h1>
                    <!-- Nombre de Usuario -->
                    <label for="inputUser" class="sr-only"><?php echo $content["login"]["username"]; ?></label>
                    <input type="text" name="identificador" id="inputUser" class="form-control" placeholder="<?php echo $content["login"]["username"]; ?>" value="<?php echo $identificador ?>" required autofocus>
                    <!-- Contraseña -->
                    <label for="inputPassword" class="sr-only"><?php echo $content["login"]["password"]; ?></label>
                    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="<?php echo $content["login"]["password"]; ?>" required>
                    <!-- Submit -->
                    <button class="btn btn-lg btn-warning btn-block mt-3" type="submit"><?php echo $content["login"]["title"]; ?></button>
                    <hr class="mt-4 mb-3 mx-auto col-8">
                    <!-- Error -->
                    <?php if (isset($_SESSION['error'])) { ?>
                        <div class="alert alert-danger" role="alert">
                            <?php
                                echo $_SESSION['error'];
                                unset($_SESSION['error']);
                            ?>
                        </div>
                    <?php } ?>
                    <!-- Link al Registro -->
                    <p><?php echo $content["login"]["noaccount"]; ?> <a href="registro.html" class="text-warning change_link"><?php echo $content["login"]["register"]; ?></a></p>
                </form>
            </div>
        </div>
    </div>
</div>
<?php endblock() ?>