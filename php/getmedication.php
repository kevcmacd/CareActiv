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
   
   $sql = 'SELECT * from medication WHERE patient_id=' . $id;
   
   $result = $conn->query($sql);

	if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<div id=\"" 
		. $row["id"]. "\" style=\"background-color:#ffcccc;width:97%;text-align:left;\"><img src=\"images/medication.png\"style=\"width:30px;height:30px;\">"
		. $row["adate"]. " - <b>MEDICATION:</b> " 
		. $row["description"]. " <b>STARTS AT:</b> " 
		. $row["start_time"]. " </b>ENDS AT:</b> " 
		. $row["end_time"]. " <b>SPECIAL CARE:</b> " 
		. $row["special_care"]. " <b>INSTRUCTIONS:</b> " 
		. $row["instructions"]. "<button data-role=\"button\" data-icon=\"delete\" data-inline=\"true\" data-mini=\"true\">Delete</button></div><br>";
    }
	} else {
		echo "0 medication routines";
	}
   $conn->close();
?>