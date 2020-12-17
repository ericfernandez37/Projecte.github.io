<?php

/**
 * LOGIN FORM
 * Autor: Marc Martínez Mayné
 * Fecha: 26/11/2020
 * Revisor: -
 * Fecha: -
 */

$currentPage = "enigmaMarc.php";
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
        <div class="card text-white bg-dark m-auto col-sm-10 col-md-6 text-center">
            <div id="infobox" class="  ">
                <div>
                    <p><?php echo $content["juegomarc"]["explanation"]; ?></p>
                </div>
                <div>
                    <?php echo $content["juegomarc"]["points"]; ?>: <span id="points">0</span>
                </div>
                <div>
                    <?php echo $content["juegomarc"]["time"]; ?>: <span id="time"></span>
                </div>
                <button class="gameButton"><?php echo $content["juegomarc"]["start"]; ?></button>
            </div>
            <div id="board">
            </div>
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-dark"><?php echo $content["juegomarc"]["modaltitle"]; ?></h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-dismiss="modal" class="gameButton btn btn-primary"><?php echo $content["juegomarc"]["modalrestart"]; ?></button>
                            <button type="button" class="btn btn-success" href="#"><?php echo $content["juegomarc"]["modalnextgame"]; ?></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endblock() ?>