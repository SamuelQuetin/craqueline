<?php
header("Content-Type: application/json");

// --- CORS ---
$allowedOrigins = [
    "https://www.craqueline.fr",
    "https://craqueline.fr",
    "https://craquey.cluster100.hosting.ovh.net",
    "http://localhost:8080"
];

$origin = $_SERVER["HTTP_ORIGIN"] ?? "";
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: https://www.craqueline.fr");
}

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

$placeId = "ChIJY8aYKQCvtg0ROvt1YgfuXNE";

// 1) Priorité à un fichier local NON versionné (pratique sur OVH mutualisé)
// Vous pouvez surcharger le chemin via GOOGLE_PLACES_KEY_FILE
$customKeyFile = getenv("GOOGLE_PLACES_KEY_FILE") ?: null;
$defaultLocalKeyFile = __DIR__ . DIRECTORY_SEPARATOR . "google_places_key.local.php";

$apiKey = null;
$keyFilePath = $customKeyFile ?: $defaultLocalKeyFile;

if (is_readable($keyFilePath)) {
    $loadedKey = require $keyFilePath;
    if (is_string($loadedKey)) {
        $apiKey = trim($loadedKey);
    }
}

// 2) Fallback compatibilité: variables d'environnement serveur
if (!$apiKey) {
    $apiKey = getenv("GOOGLE_PLACES_API_KEY") ?: getenv("VITE_GOOGLE_PLACES_API_KEY");
}

if (!$apiKey) {
    http_response_code(500);
    echo json_encode([
        "error" => "Google Places API key is missing on server",
        "hint" => "Create api/google_places_key.local.php returning your API key string"
    ]);
    exit;
}

$query = http_build_query([
    "place_id" => $placeId,
    "fields" => "opening_hours,current_opening_hours",
    "key" => $apiKey,
    "language" => "fr"
]);

$googleUrl = "https://maps.googleapis.com/maps/api/place/details/json?$query";

$context = stream_context_create([
    "http" => [
        "method" => "GET",
        "timeout" => 10,
        "ignore_errors" => true
    ]
]);

$googleResponse = @file_get_contents($googleUrl, false, $context);

if ($googleResponse === false) {
    http_response_code(502);
    echo json_encode(["error" => "Failed to reach Google Places API"]);
    exit;
}

$decoded = json_decode($googleResponse, true);
if (!$decoded || ($decoded["status"] ?? "") !== "OK") {
    http_response_code(502);
    echo json_encode([
        "error" => "Invalid Google Places API response",
        "google_status" => $decoded["status"] ?? null
    ]);
    exit;
}

echo json_encode([
    "result" => [
        "opening_hours" => $decoded["result"]["opening_hours"] ?? null,
        "current_opening_hours" => $decoded["result"]["current_opening_hours"] ?? null
    ],
    "status" => "OK"
]);
