<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

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

$headers = "From: " . $from . "\r\n" .
    "Reply-To: " . $from . "\r\n" .
    "Content-Type: text/plain; charset=UTF-8";

$success = mail($to, $subject, $message, $headers);

echo json_encode(["success" => $success]);