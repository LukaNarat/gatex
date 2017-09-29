<?php


if (
    !isset($_COOKIE['agreed'])||
    ($_COOKIE['agreed'] != 'true')
) {
		header("Location: http://www.google.com");
		die();  
}

?>