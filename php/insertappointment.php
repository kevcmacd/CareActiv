<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "care_activity_mgr";

$id = $_GET['id'];
$aDate = $_GET['aDate'];
$lLoc = $_GET['lLoc'];
$lDesc = $_GET['lDesc'];
$sTime = $_GET['sTime'];
$eTime = $_GET['eTime'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO appointments (adate, start_time, end_time, location, description, patient_id)
VALUES ('" . $aDate . "','" 
		. $sTime . "', '" 
		. $eTime . "','" 
		. $lLoc . "','" 
		. $lDesc . "','"
		. $id . "')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo $sql . "<br>" . $conn->error;
}

$conn->close();
?>