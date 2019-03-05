<?php

$nom = $_POST['nom'];
$email = $_POST['email'];
$sujet = $_POST['sujet'];
$msg = $_POST['msg'];

echo "<p>Votre nom est : <b><u>" .$nom. "</b></u></p>";
echo "<p>votre émail : <b><u>" .$email. "</b></u></p>";
echo "<p>Votre sujet est : <b><u>" .$sujet. "</b></u></p>";
echo "<p>Votre message est : <b><u>" .$msg. "</b></u></p>";
?>