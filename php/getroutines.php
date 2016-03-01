<?php
    $servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "care_activity_mgr";
	
	$id = $_GET['id'];
   
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
   
   $sql = 'SELECT * from routines WHERE patient_id=' . $id;
   
   $result = $conn->query($sql);

	if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<div id=\"" 
		. $row["id"]. "\" style=\"background-color:white;width:97%;text-align:left;\">" 
		. $row["adate"]. " - ROUTINE: " 
		. $row["description"]. " STARTS AT: " 
		. $row["start_time"]. " ENDS AT: " 
		. $row["end_time"]. " SPECIAL CARE: " 
		. $row["special_care"]. " INSTRUCTIONS: " 
		. $row["instructions"].  "<button data-role=\"button\" data-icon=\"delete\" data-inline=\"true\" data-mini=\"true\">Delete</button></div><br>";
    }
	} else {
		echo "0 routines";
	}
   $conn->close();
?>