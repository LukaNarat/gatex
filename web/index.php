<?php


if (
    !isset($_COOKIE['gatex'])||
    ($_COOKIE['gatex'] != 'true')
) {
		header("Location: no.html");
		die();  
}

header("Location: gatex.html");
?>