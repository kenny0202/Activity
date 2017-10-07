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

	$qry = "SELECT * FROM NAME";
	$result = mysqli_query($conn, $qry);

	
	$row = array();
	
	while($r = mysqli_fetch_assoc($result)) {
		$row[] = $r;
		//echo "id: " . $row["id"]. ", Name: " . $row["name"]. "<br>";
	}
	echo json_encode($row);
	mysqli_close($conn);
?>


