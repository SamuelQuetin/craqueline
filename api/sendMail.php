<?php
// --- CORS ---
header("Content-Type: application/json");

// Autorise les requêtes venant du site + du localhost
$allowedOrigins = [
    "https://www.craqueline.fr",
    "http://localhost:8080"
];

$origin = $_SERVER["HTTP_ORIGIN"] ?? "";
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: https://www.craqueline.fr");
}

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Gestion des requêtes préflight (important !)
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

// --- Lecture du JSON ---
$input = json_decode(file_get_contents("php://input"), true);

$from = $input["from"] ?? null;
$to = $input["to"] ?? null;
$subject = $input["subject"] ?? "";
$message = $input["message"] ?? "";

if (!$from || !$to) {
    http_response_code(400);
    echo json_encode(["error" => "Missing parameters"]);
    exit;
}

// --- Envoi du mail ---
$headers = "From: " . $from . "\r\n" .
    "Reply-To: " . $from . "\r\n" .
    "Content-Type: text/plain; charset=UTF-8";

$success = mail($to, $subject, $message, $headers);

// --- Réponse JSON ---
echo json_encode(["success" => $success]);
