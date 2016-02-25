<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "care_activity_mgr";

$id = $_GET['id'];
$sDate = $_GET['sDate'];
$tDesc = $_GET['tDesc'];
$sTime = $_GET['sTime'];
$tCare = $_GET['tCare'];
$tIns = $_GET['tIns'];
$rDate = $_GET['rDate'];
$eTime = $_GET['eTime'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO routines (patient_id, adate, description, start_time, end_time, special_care, instructions, repeating)
VALUES ('" . $id . "','" . $sDate . "', '" . $tDesc . "','" . $sTime . "','" . $eTime . "','" . $tCare . "','" . $tIns . "','" . $rDate . "')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo $sql . "<br>" . $conn->error;
}

$conn->close();
?>