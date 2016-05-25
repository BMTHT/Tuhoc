<?php
	include 'connect.php';

	$searchBy = $_REQUEST["searchby"];
	$searchText = $_REQUEST["searchtext"];
	$search;
	if($searchBy === "By Name"){
		$search = "WHERE fullname = '$searchText'";
	}elseif($searchBy === "By Year"){
		$search = "WHERE year(birthday) = $searchText";
	}elseif($searchBy === "id"){
		$search = "WHERE id = $searchText";
	}elseif ($searchBy === "All") {
		$search="";
	}
	$sql = "SELECT * FROM soruatoi ".$search;
	$result = mysqli_query($conn,$sql);
	$resultText = array();
	if(mysqli_num_rows($result) > 0){
		$i = 0;
		while ($row = mysqli_fetch_assoc($result)) {
			$resultText[$i] = $row;
			$i++;
		}
	}else{
		echo "sai roi dd";
	}
	echo json_encode($resultText);
	mysqli_close($conn);
?>
