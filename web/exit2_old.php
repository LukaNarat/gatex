<?php

function bb()
{
    $to      = 'trigger@applet.ifttt.com';
    $subject = 'rabyOut';
    $message = 'Exiting gate 2';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';
}


bb();

?>