
<?php

// Check if form was submitted
if (isset($_POST['submit'])) {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $date = $_POST['date'];
    $message = $_POST['message'];

    // Build email headers
    $mailheader = "From: $name <$email>\r\n";

    // Send email
    $recipient = "info@dvfoto.lt";
    $subject = $date;
    $success = mail($recipient, $subject, $message, $mailheader);

    // Check if mail was sent
    if ($success) {
        echo "Message sent";
    } else {
        echo "Error sending message";
    }
}

?>
