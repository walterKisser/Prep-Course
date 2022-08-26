<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['password'];


$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $password . " \r\n";

$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'walterkisser2018@gmail.com';
$asunto = 'Mensaje de... (testeo de c.v registracion)';

email($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
