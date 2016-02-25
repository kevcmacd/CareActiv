<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "care_activity_mgr";

$fName = $_GET['fName'];
$lName = $_GET['lName'];
$uName = $_GET['uName'];
$pass = $_GET['pass'];
$squest = $_GET['squest'];
$sans = $_GET['sans'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (username, password, first, last, password_reminder, password_answer)
VALUES ('" . $uName . "','" . $pass . "', '" . $fName . "','" . $lName . "','" . $squest . "','" . $sans . "')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo $sql . "<br>" . $conn->error;
}

$conn->close();
?>