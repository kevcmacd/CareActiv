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
		. $row["id"]. "\" style=\"background-color:white;width:97%;text-align:left;border:2px solid black;\"><img src=\"images/physicalactivity.png\"style=\"width:30px;height:30px;\"><br>" 
		. $row["adate"]. "<br><b>ROUTINE:</b> " 
		. $row["description"]. " <br><b>STARTS AT:</b> " 
		. $row["start_time"]. " <br><b>ENDS AT:</b> " 
		. $row["end_time"]. " <br><b>SPECIAL CARE:</b> " 
		. $row["special_care"]. " <br><b>INSTRUCTIONS:</b> " 
		. $row["instructions"].  "<br><b>COMPLETED:</b>"
		. $row["completed"]. "<br><b>DETAILS:</b>"
		. $row["details"]. "<br><input type=\"checkbox\" onclick=\"doneRoutine(". $row["id"].")\">Mark as done</div>
								  <div id=\"rou" .$row["id"]. "\" style=\"display: none;\">Completion details:<br>
								  <textarea id=\"rt" .$row["id"]. "\" rows=\"4\" cols=\"50\" style=\"width:97%;\"></textarea><br>
								  <button onclick=\"updateRoutine(". $row["id"].")\">Save and Update</a>
								  </div><br>";
    }
	} else {
		echo "0 routines";
	}
   $conn->close();
?>