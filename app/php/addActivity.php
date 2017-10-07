<?php

	$username = "kennswql_kenny"; 
    $password = "13792468"; 
    $servername = "localhost:3306"; 
    $dbname = "kennswql_Activity"; 

	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}

	echo "<br>";

	$name = $_POST['activity_name'];

	$sql = "INSERT INTO ACTIVITY ( ACTIVITY_NAME ) VALUES ( '$name' )";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();

?>


