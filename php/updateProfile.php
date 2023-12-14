<?php
session_start();
require_once("db.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_SESSION["username"];
    $age = $_POST["age"];
    $dob = $_POST["dob"];
    $gender = $_POST["gender"];
    $contact = $_POST["contact"];

    $user_data = [
        "age" => $age,
        "dob" => $dob,
        "gender" => $gender,
        "contact" => $contact
    ];

    // Assuming you have a MongoDB collection named "user_profiles"
    // $user_profiles = $mongoDb->users;
    $user_profiles->updateOne(["username" => $username], ['$set' => $user_data], ["upsert" => true]);

    echo "Profile updated successfully";
}
?>
