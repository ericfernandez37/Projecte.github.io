<?php  
/**
 * DATABASE CONNECTION
 * Autor: Marc Martínez Mayné
 * Fecha: 01/12/2020
 * Revisor: -
 * Fecha: -
 */ 

    $servername = "localhost";
    $dbname = "";
    $username = "";
    $password = "";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        $_SESSION['error'] = $e;
    }
