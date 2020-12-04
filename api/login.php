<?php

/**
 * LOGIN API
 * Autor: Marc Martínez Mayné
 * Fecha: 01/12/2020
 * Revisor: -
 * Fecha: -
 */

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// require_once "../api/bdconnection.php";

$identificador = $_POST['identificador'];
$password = $_POST['password'];

try {
    $sentencia = $conn->prepare('SELECT id, role FROM users WHERE (username = :username OR email = :username AND password = :password)');
    $sentencia->bindParam(':username', $identificador);
    $sentencia->bindParam(':password', $password);
    $sentencia->execute();

    $rows = $sentencia->rowCount();

    if ($rows > 0) {
        $resultado = $sentencia->fetch(PDO::FETCH_ASSOC);
        $_SESSION['userInfo']['id'] = $resultado['id'];
        $_SESSION['userInfo']['role'] = $resultado['role'];
        header('Location: ' . "../landingpage.html"); // Cambiar ruta
    } else {
        $_SESSION['error'] = "Usuario/Contraseña incorrectos.";
        $_SESSION['identificador'] = $identificador;
        header('Location: ' . "../login.php"); // Cambiar ruta
    }
} catch (PDOException $e) {
    $_SESSION['error'] = $e;
    $_SESSION['identificador'] = $identificador;
    header('Location: ' . "../login.php"); // Cambiar ruta
} finally {
    if (!is_null($conn)) {
        $conn = null;
    }
}

