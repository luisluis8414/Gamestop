<?php   
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


//Load Composer's autoloader
require 'C:\xampp\htdocs\WebDev\WebShop\Mailer\vendor\autoload.php';
// sendRegistrationEmail('luis.wehrberger2@gmail.com', 'luis',"23423423423423");

function sendPwReset($recipientMail, $recipientName, $pw){
$dotenv = Dotenv\Dotenv::createImmutable('C:\xampp\htdocs\WebDev\WebShop');
$dotenv->load();

$senderMail= $_ENV['EMAIL_SENDER'];
$smtpPW=$_ENV['SMTP_PW'];
$smtpHost=$_ENV['SMTP_HOST'];
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = $smtpHost;                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = $senderMail;                     //SMTP username
    $mail->Password   = $smtpPW;                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($senderMail, 'The GameStop');

    $mail->addAddress($recipientMail, $recipientName);               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Registration';
    $mail->Body    = 'Your Registration was succsessful! <br> 
                        This is your one time password: <br>'.$pw.'<br>
                        Please finish your Registration';
    $mail->AltBody = 'Your Registration was succsessful! <br> 
                    This is your one time password: <br>'.$pw.'<br>
                    Please finish your Registration';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>