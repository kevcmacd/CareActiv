<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "care_activity_mgr";

$aDate = $_GET['aDate'];
$lDesc = $_GET['lDesc'];
$sTime = $_GET['sTime'];
$eTime = $_GET['eTime'];
$lCare = $_GET['lCare'];
$lIns = $_GET['lIns'];
$lRep = $_GET['lRep'];
$dRep = $_GET['dRep'];
$lMed = $_GET['lMed'];
$id = $_GET['id'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO medication (adate, description, start_time, end_time, special_care, instructions, repeating_until, medication_interval, repeating, patient_id)
VALUES ('" . $aDate . "','" 
		. $lDesc . "', '" 
		. $sTime . "','" 
		. $eTime . "','" 
		. $lCare . "','"
		. $lIns . "','"
		. $dRep . "','"
		. $lMed . "','"
		. $lRep . "','"
		. $id . "')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo $sql . "<br>" . $conn->error;
}

$conn->close();
?>