<?php
	$holyname = $_POST["holyname"];
	$fullname = $_POST["fullname"];
	$holyname = $_POST["holyname"];
	$gender = $_POST["sex"];
	if($gender === "male") $gender = 1;
	else $gender = 0;
	$birthday = $_POST["birthday"];
	$birthday = date("Y-m-d",strtotime($birthday));
	$fathername = $_POST["fathername"];
	$mothername = $_POST["mothername"];
	$baptism = $_POST["baptism"];
	$baptism = date("Y-m-d",strtotime($baptism));
	$godparent = $_POST["godparent"];
	$priest = $_POST["priest"];
	$eucharist = $_POST["eucharist"];
	if($eucharist === ""){
		$eucharist = date("Y-m-d",strtotime("0001-1-1"));
	}
	else{
		$eucharist = date("Y-m-d",strtotime($eucharist));
	}
	$confimation = $_POST["confimation"];
	if($confimation === ""){
		$confimation = date("Y-m-d",strtotime("0001-1-1"));
		$bishop = "";
		$sponsor = "";
	}
	else{
		$confimation = date("Y-m-d",strtotime($confimation));
		$bishop = $_POST["bishop"];
		$sponsor = $_POST["sponsor"];
	}
	$alive = $_POST["alive"];
	if($alive === "alive") $alivesql = 1;
	else $alivesql = $_POST["year"];
	include "connect.php";
	$id = 0;
	$sql = "SELECT id FROM soruatoi ORDER BY id DESC LIMIT 1";
	$result = mysqli_query($conn,$sql);
	if(mysqli_num_rows($result) > 0){

		while ($row = mysqli_fetch_assoc($result)) {
			$id=intval($row["id"])+1;
		}
	}else{
		echo "sai roi dd";
	}
	$sql = "INSERT INTO soruatoi (id,holyname,fullname,gender,birthday,fathername,mothername,dateofbaptism,godparent,priest,eucharist,confimation,bishop,sponsor,alive) VALUES('$id','$holyname','$fullname','$gender','$birthday','$fathername','$mothername','$baptism','$godparent','$priest','$eucharist','$confimation','$bishop','$sponsor','$alivesql')";
	if (mysqli_query($conn, $sql)) {
    	echo $id;
	} else {
    	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}
	mysqli_close($conn);

?>
