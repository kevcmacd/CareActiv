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
   
   $sql = 'SELECT * from clients WHERE userid=' . $id;
   
   $result = $conn->query($sql);

	if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<a href=\"client.html?id=" 
		. $row["id"]. "\" data-role=\"button\">" 
		. $row["firstn"]. " " 
		. $row["lastn"]. "</a><br>";
    }
	} else {
		echo "0 clients";
	}
   $conn->close();
?>