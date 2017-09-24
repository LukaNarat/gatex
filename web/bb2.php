<?php

function bb()
{
}

{
    $to      = 'luka.narat@gmail.com';
    $subject = 'the subject';
    $message = 'hello222';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';
}


bb();

?>