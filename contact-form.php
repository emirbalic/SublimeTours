<?php

    if(isset($_POST['submit'])) {

        $name = $_POST['name'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        
        $email_from = 'Sublime Tours';
        $email_subject = 'New Form Submission';
        $email_body = "You have message from: ".$name." ".$lastname."\n".
                      "User email: $email.\n\n".
                      "User message: $message.\n";
    
        $to = 'info@sublime-tours.com';
    
        $headers = "From: $email_from \r\n";
    
        $headers .= "Reply to: $email \r\n";
    
        mail($to, $email_subject, $email_body, $headers);
    
        header("Location: index.html");
    }

?>