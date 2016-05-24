<?php 

if(isset($_POST['submit'])){
$to = ["stephanie@modelsforapp.com","tommyod46@hotmail.com"];
$from = $_POST['modelEmail'];			
$subject = "Email from Models for App";
$message = "<strong>".$_POST['modelName']."</strong> has send you the information.<br/><br/>"."Name: ".$_POST['modelName']."<br/>Email: ".$from."<br/>Relevant Social Media Accounts: ".$_POST['modelSocial']."<br/>Number of followers: ".$_POST['modelFollowers'];
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// Additional headers
//$headers .= 'To:iamanilmhj@hotmail' . "\r\n";
$headers .= 'From: '.$from.'' . "\r\n";
//$headers .= 'Cc: iamanilmhj@hotmail.com' . "\r\n";
$headers .= 'Bcc: iamanilmhj@hotmail.com' . "\r\n";
//print_r($message); die;      
@mail($to,$subject,$message,$headers);
echo "<script type='text/javascript'>
alert('Thank you for your information. We will contact you Soon!');
window.location.href='http://modelsforapp.com/mfa-details.html';
</script>";
	   }

?>
