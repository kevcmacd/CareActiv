<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "care_activity_mgr";

$id = $_GET['id'];
$details = $_GET['details'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE appointments SET completed = 1, details = '" . $details . "' WHERE id = " .$id. "";

if ($conn->query($sql) === TRUE) {
    echo "Appointment updated successfully";
} else {
    echo $sql . "<br>" . $conn->error;
}

$conn->close();
?>