<?php

	$username = "kennswql_kenny"; 
    $password = "13792468"; 
    $servername = "localhost:3306"; 
    $dbname = "kennswql_Actibuddy"; 

	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}

	echo "<br>";


	$name = $_POST['name'];
	$contact = $_POST['contact'];
	$notes = $_POST['notes'];

	$sql = "INSERT INTO users ( name, contact, notes ) VALUES ( '$name', '$contact', '$notes' )";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	/*
	$datas = file_get_contents("php://input");
	$_POST = json_decode($datas, true);
	
	if (!empty($_POST)) {
		if(empty($_POST['name'])) {
			echo "name is missing";
		} else {
			$name = $_POST['name'];
			echo $name;
		}
		
		if(empty($_POST['contact'])) {
			echo "contact is missing";
		} else {
			$contact = $_POST['contact'];
			echo $contact;
		}
	
		
		$qry = " INSERT INTO users ( name, contact, notes ) VALUES ( :name, :contact, :notes ) ";

		$query_params = array(
			':name' => $_POST['name'],
			':contact' => $_POST['contact'],
			':notes' => $_POST['notes']
		);

		try {
			$stmt   = $db->prepare($qry);
			$result = $stmt->execute($query_params);
		}
		catch (PDOException $ex) {
		   
			$response["success"] = 0;
			$response["message"] = "Database Error2. Please Try Again!";
			die(json_encode($response));
		}


		$response["success"] = 1;
		$response["message"] = "Data Inserted!";
		echo json_encode($response);
		

		/*
		if ($stmt = $conn->prepare("INSERT INTO users (name, contact, notes) VALUES (?, ?, ?)")) {
			$stmt->bind_param('sss', $_POST['name'], $_POST['contact'], $_POST['notes']);
			$stmt->execute();
			$stmt->close();
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $stmt . "<br>" . $conn->error;
		} */

		$conn->close();
	//}

?>


