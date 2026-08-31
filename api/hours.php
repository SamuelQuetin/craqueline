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

$placeId = "ChIJY8aYKwCvthIROvt1YgfuXNE";
$cacheFile = __DIR__ . DIRECTORY_SEPARATOR . "hours.cache.json";
$cacheTtl = 12 * 60 * 60;

$defaultWeekdayText = [
    "Lundi: Fermé",
    "Mardi: Fermé",
    "Mercredi: 10:00 – 19:00",
    "Jeudi: 10:00 – 19:00",
    "Vendredi: 10:00 – 19:00",
    "Samedi: 10:00 – 19:00",
    "Dimanche: 10:00 – 18:00"
];

function buildHoursPayload($openingHours, $currentOpeningHours, $source, $fetchedAt = null)
{
    return [
        "result" => [
            "opening_hours" => $openingHours,
            "current_opening_hours" => $currentOpeningHours
        ],
        "status" => "OK",
        "source" => $source,
        "fetched_at" => $fetchedAt ?: gmdate("c")
    ];
}

function readCache($cacheFile)
{
    if (!is_readable($cacheFile)) {
        return null;
    }

    $cacheContent = file_get_contents($cacheFile);
    if ($cacheContent === false) {
        return null;
    }

    $cachedPayload = json_decode($cacheContent, true);
    if (!is_array($cachedPayload) || ($cachedPayload["status"] ?? "") !== "OK") {
        return null;
    }

    return $cachedPayload;
}

function sendJson($payload)
{
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

$cachedPayload = readCache($cacheFile);

if ($cachedPayload && (time() - filemtime($cacheFile)) < $cacheTtl) {
    $cachedPayload["source"] = "cache";
    sendJson($cachedPayload);
}

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
    if ($cachedPayload) {
        $cachedPayload["source"] = "stale_cache";
        sendJson($cachedPayload);
    }

    sendJson(buildHoursPayload(
        ["weekday_text" => $defaultWeekdayText],
        null,
        "default"
    ));
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
    if ($cachedPayload) {
        $cachedPayload["source"] = "stale_cache";
        sendJson($cachedPayload);
    }

    sendJson(buildHoursPayload(
        ["weekday_text" => $defaultWeekdayText],
        null,
        "default"
    ));
}

$decoded = json_decode($googleResponse, true);
if (!$decoded || ($decoded["status"] ?? "") !== "OK") {
    if ($cachedPayload) {
        $cachedPayload["source"] = "stale_cache";
        $cachedPayload["google_status"] = $decoded["status"] ?? null;
        sendJson($cachedPayload);
    }

    sendJson(buildHoursPayload(
        ["weekday_text" => $defaultWeekdayText],
        null,
        "default"
    ));
}

$payload = buildHoursPayload(
    $decoded["result"]["opening_hours"] ?? null,
    $decoded["result"]["current_opening_hours"] ?? null,
    "google"
);

file_put_contents($cacheFile, json_encode($payload, JSON_UNESCAPED_UNICODE), LOCK_EX);

sendJson($payload);
