<?php

function bb()
{
    $to      = 'trigger@applet.ifttt.com';
    $subject = 'maryIn';
    $message = 'Entering Gate 1';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';

    asd
}


bb();

?>