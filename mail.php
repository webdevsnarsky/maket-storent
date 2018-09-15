<?php

$recepient = "snarsky93@mail.ru";
$sitename = "maket-storent.ru";

$phone = trim($_POST["user_phone"]);
$name = trim($_POST["user_name"]);
$about = trim($_POST["user_about"]);
$message = "Телефон: $phone Имя: $name Материалы: $about";



$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");