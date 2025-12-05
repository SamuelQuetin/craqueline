<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'ssl0.ovh.net';
    $mail->SMTPAuth = true;
    $mail->Username = 'contact@tondomaine.fr';
    $mail->Password = 'TON_MOT_DE_PASSE';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($data["from"]);
    $mail->addAddress($data["to"]);
    $mail->Subject = $data["subject"];
    $mail->Body = $data["message"];

    $mail->send();

    echo json_encode(["success" => true]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
}