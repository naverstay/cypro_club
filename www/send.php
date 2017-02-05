<?php

//$to = "<naverstay.me@gmail.com>";
$to = "<info@cyprogroup.club>";

$subject = $_POST['form_title']; //Загаловок сообщения

$message = '<html>
                <head>
                    <title>' . $subject . '</title>
                </head>
                <body>
                    <p>Время: ' . date("H:i:s") . ' ' . date("d F Y") . '</p>
                    <p>Имя: ' . $_POST['order_name'] . '</p>
                    <p>Телефон: ' . $_POST['order_phone'] . '</p> 
                    <p>Эл.почта: ' . $_POST['order_email'] . '</p> 
                    <p>Комментарий: ' . $_POST['order_comments'] . '</p> 
                </body>
            </html>'; //Текст сообщения можно использовать HTML теги

$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <site@cyprogroup.club>\r\n";
$headers .= "Reply-To: <admin@cyprogroup.club>\r\n";

mail($to, $subject, $message, $headers);
