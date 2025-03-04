<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $pesan = $_POST['pesan'];
    $rating = $_POST['rating'];

    try {
        $stmt = $pdo->prepare("INSERT INTO feedback (nama, email, pesan, rating) VALUES (?, ?, ?, ?)");
        $stmt->execute([$nama, $email, $pesan, $rating]);

        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        echo json_encode(['success' => false]);
    }
}
?>
