<?php

/**
 * LOGIN FORM
 * Autor: Marc Martínez Mayné
 * Fecha: 26/11/2020
 * Revisor: -
 * Fecha: -
 */

$currentPage = "login.php";
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

<?php startblock('titulo') ?>
<?php echo $content["juegomarc"]["pagetitle"]; ?>
<?php endblock() ?>

<?php startblock('ownCSS') ?>
<link rel="stylesheet" href="Juegos/enigma_marc/styles/jocmarc.css" type="text/css">
<?php endblock() ?>

<?php startblock('ownJS_header') ?>
<script src="assets/libraries/jquery-ui/jquery-ui.min.js"></script>
<?php endblock() ?>

<?php startblock('ownJS_bottom') ?>
<script src="Juegos/enigma_marc/items.js" language="javascript" type="text/javascript"></script>
<script src="Juegos/enigma_marc/main.js" language="javascript" type="text/javascript"></script>
<?php endblock() ?>

<?php startblock('principal') ?>
<div class="container h-100 pt-5 mt-5">
    <div class="row align-items-center h-100">
        <div class="card text-white bg-dark m-auto col-sm-10 col-md-7 text-center">
            <div id="infobox" class="  ">
                <div>
                    Points: <span id="points">0</span>
                </div>
                <div>
                    Time: <span id="time"></span>
                </div>
                <button class="gameButton">Start Game</button>
            </div>
            <div id="board">
            </div>
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-dark">¡Has completado el Juego!</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-dismiss="modal" class="gameButton btn btn-primary">Volver a Jugar</button>
                            <button type="button" class="btn btn-success" href="#">Siguiente Juego</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endblock() ?>