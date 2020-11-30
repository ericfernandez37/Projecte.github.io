<?php
    /**
     * MASTER FORM
     * Autor: Marc Martínez Mayné 
     * Fecha: 28/11/2020
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

    require_once 'Terceros/ti/ti.php';
?>

<!DOCTYPE html>
<html lang="<?php echo $_SESSION['language'] ?>">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Favicons -->
        <link rel="apple-touch-icon" href="">
        <link rel="icon" href="">
        <!-- Title -->
        <title><?php startblock('titulo')?><?php endblock() ?></title>
        <!-- Fonts and Icons -->
        <link rel="stylesheet" type="text/css" href="Terceros/Font-awesome/css/all.css">
        <!-- CSS -->
        <link rel="stylesheet" href="css/micss.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="css/csslanding.css">
        <?php startblock('ownCSS')?><?php endblock() ?>
        <!-- Scripts -->
        <?php startblock('ownJS_header')?><?php endblock() ?>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top border-bottom" id="navbar">
            <a class="navbar-brand" href="#">MERCAT DE BARCELONA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>  
        </nav>
        <?php startblock('principal')?><?php endblock() ?>
    </body>
</html>