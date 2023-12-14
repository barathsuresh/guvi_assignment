<?php
// provide your mysql username and password
$servername = "localhost";
$username = "barath";
$password = "Barath2002!!";
$dbname = "users_guvi";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$mongoClient = new MongoDB\Client("mongodb://localhost:27017");
$mongoDb = $mongoClient->guvi; 
?>
