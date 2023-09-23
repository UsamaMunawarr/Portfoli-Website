<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Your email address where you want to receive messages
    $to = "usamamunawaar@gmail.com"; // Replace with your actual email address
    
    // Subject of the email
    $subject = "Message from $name via your website";
    
    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message";
    
    // Additional headers
    $headers = "From: $email";
    
    // Attempt to send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully, redirect to a thank you page
        header("Location: thank-you.html"); // Create this page
        exit;
    } else {
        // Email delivery failed, display an error message (remove in production)
        echo "Email delivery failed. Please try again later.";
    }
}
?>

