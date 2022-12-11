<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["date"];
$message = $_POST["message"];
$tel = $_POST["tel"];

$to = "vilimaitisdeividas@gmail.com";
$headers = "From: $email" . "\r\n";
$txt = "Gavau iš puslapio".$tel.".\n\n".$message;

mail($to, $subject, $txt, $headers);

header("Location: contact-form-thank-you.html");

?>