<?php
if (isset($_REQUEST['email']))
//if "email" is filled out, send email
  {
  //send email
  $email = $_REQUEST['email'];
  $name = $_REQUEST['name'];
  $subject = $_REQUEST['subject'];
  $headers  = "From: $email\r\n";  
  $headers .= "Reply-To: $email\r\n"; 
  $message ="Email: $email \nSubject: $subject\nName: $name    \nMessage:" . $_REQUEST['message'] ;
  mail("info@crazyimp.com", $subject, $message);
  echo 1;
  }
else
  {
  echo "0";
  }
?>