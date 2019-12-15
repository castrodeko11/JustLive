<?php

$nome = $_POST['nome'];/*recebe os dados digitados no campo "nome"*/
$email = $_POST['email'];/*recebe os dados digitados no campo "email"*/


$formcontent=
"Nome: $nome \n 
Email: $email \n ";


 $recipient = "tec2pulse@gmail.com";
 $subject = "Contato JustLive ";
 $mailheader = "From: JustLive \r\n"; 
  mail($recipient, $subject, $formcontent, $mailheader) or die("Ouve um erro no envio, desculpe-nos pelo transtorno!!!"); 
  echo "<script>alert(\"Mensagem enviada com sucesso!\")</script>";
  echo "<script>window.location = \"contato.html\"</script>";

?>