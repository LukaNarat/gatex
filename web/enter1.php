<?php

function bb()
{
    $to      = 'luka.narat@gmail.com';
    $subject = 'enter1';
    $message = 'Entering Gate 1';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';
}


bb();

?>