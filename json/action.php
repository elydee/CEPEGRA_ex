<?php //phpinfo(32); 

// la chaîne json sera interceptée et décodée par le code suivant, afin d'être compréhensible par php:
$chaineJson = $_POST['json'];
$myJson = json_decode($chaineJson);
//permet de convertir un format json en langage php
// print_r($myJson); 
var_dump($myJson);
// print_r affiche le contenu d'une variable
// var_dump affiche le type et le contenu d'une variable 
echo $myJson[1]->name;

$array = array('essai', 'test'); //array php

echo json_encode($array);  //l'array est convertis en json pour être compréhensible par js
?>

<!-- le php ne va chercher les balises formulaires que des éléments comportants un attribut name remplit, la méthode post permet de ne pas avoir les informations affichées dans l'url tandis que get place les infos dans l'url -->

<!-- le local storage permet de mémoriser, par exemple, une chaîne de caractère scriptée que le serveur pourra récupérer, chercher le profil correspondant  -->