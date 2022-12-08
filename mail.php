<?php
 if(isset($_POST['submit']))

$name = $_POST['name'] 
$email = $_POST['email']
$tel = $_POST['tel']
$date = $_POST['date']
$message = $_POST['message']

$mailheader = "From:".$name."<".$email.">\r\n"

$recipient = "dvfoto@info.lt";

mail($recipient, $date, $tel, $message, $mailheader)
 or die("Error!")
echo"Message send";

?>