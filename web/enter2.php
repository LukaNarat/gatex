<?php

function bb()
{
    $to      = 'trigger@applet.ifttt.com';
    $subject = 'enter2';
    $message = 'Entering gate 2';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';
}


bb();

?>