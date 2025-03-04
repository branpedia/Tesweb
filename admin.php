<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $pdo->query("SELECT * FROM feedback ORDER BY created_at DESC");
        $feedbacks = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($feedbacks);
    } catch (Exception $e) {
        echo json_encode([]);
    }
}
?>
