<?php


if (
    !isset($_COOKIE['gatex'])||
    ($_COOKIE['gatex'] != 'true')
) {
		header("Location: gatex.html");
		die();  
}

header("Location: gatex.html");
?>