<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "care_activity_mgr";

$fName = $_GET['fName'];
$lName = $_GET['lName'];
$dob = $_GET['dob'];
$sex = $_GET['sex'];
$loc = $_GET['loc'];
$toc = $_GET['toc'];
$allg = $_GET['allg'];
$cond = $_GET['cond'];
$pcp = $_GET['pcp'];
$emc = $_GET['emc'];
$emp = $_GET['emp'];
$id = $_GET['id'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO clients (userid, firstn, lastn, dob, sex, location, type_of_care, allergies, conditions, doctor, emergency_contact, emergency_phone)
VALUES ('" . $id . "','" 
		. $fName . "', '" 
		. $lName . "','" 
		. $dob . "','" 
		. $sex . "','"
		. $loc . "','" 
		. $toc . "','" 
		. $allg . "','" 
		. $cond . "','" 
		. $pcp . "','"
		. $emc . "','" 
		. $emp . "')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo $sql . "<br>" . $conn->error;
}

$conn->close();
?>