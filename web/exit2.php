<?php

function bb()
{
    $to      = 'luka.narat@gmail.com';
    $subject = 'exit2';
    $message = 'Exiting gate 2';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';
}


bb();

?>