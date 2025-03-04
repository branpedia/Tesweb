<?php
$host = 'localhost';
$dbname = 'saran_kritik';
$username = 'root'; // Ganti sesuai konfigurasi Anda
$password = 'root';     // Ganti sesuai konfigurasi Anda

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
