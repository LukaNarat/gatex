<?php

function bb()
{
}

{
    $to      = 'luka.narat@gmail.com';
    $subject = 'close2';
    $message = 'Closing gate 2';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Email Sent.';
}


bb();

?>