<?php
session_start();
require_once("db.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $age = $_POST["age"];
    $dob = $_POST["dob"];
    $contact = $_POST["contact"];

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);

    if ($stmt->execute()) {
        // Assuming $mongoDb is your MongoDB database connection
        // $mongoCollection = $mongoDb->users_guvi; // Replace with your actual MongoDB collection name

        // // Store additional information in MongoDB
        // $mongoData = [
        //     "username" => $username,
        //     "age" => $age,
        //     "dob" => $dob,
        //     "contact" => $contact,
        // ];

        // $mongoCollection->insertOne($mongoData);

        echo "Signup successful";
    } else {
        echo "Error during signup";
    }

    $stmt->close();
    $conn->close();
} else {
    // Handle the case where the script is accessed without a proper POST request
    echo "Invalid request";
}
?>
