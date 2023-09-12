<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    error_reporting(E_ALL);
    error_reporting(-1);
    ini_set('error_reporting', E_ALL);
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host       = 'mail.novemyazilim.com'; //mail kısmı
    $mail->SMTPAuth   = true;
    $mail->Username   = 'proconsult@novemyazilim.com'; //  var olan mail kullanıcı adı
    $mail->Password   = 'Tx#Vp[e..ZwA'; //var olan mail şifresi
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('proconsult@novemyazilim.com', 'Pro Consult'); // mail kimden gidecek kısmı  var olan kullanıcı adıyla aynı olmalı
    $mail->addAddress('proconsult@novemyazilim.com'); // mail kime gidecek kısmı birden fazla ekleneiblir
    $mail->addAddress('info@proconsulttech.com'); // mail kime gidecek kısmı birden fazla ekleneiblir

    $messageBody = "<b>Ad Soyad:</b> " . $_POST['name'] . "<br>";
    $messageBody .= "<b>Email:</b> " . $_POST['email'] . "<br>";
    $messageBody .= "<b>Telefon:</b> " . $_POST['phonecode'] . $_POST['phone'] . "<br>";
    $messageBody .= "<b>Mesaj:</b> " . $_POST['message'];

    //Content
    $mail->isHTML(true);
    $mail->Subject = "Pro Consult İletişim Formu";
    $mail->Body    = $messageBody;

    if ($mail->send()) {

        echo "success";
    } else {
        echo "error";
    }
} catch (Exception $e) {
    echo "<pre>";
    print_r($e);
    echo "</pre>";

    echo "error";
}
