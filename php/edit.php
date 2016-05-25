<?php
	include 'connect.php';

	$id = $_POST["no"];
	$id = intval($id);
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
	}
	else{
		$confimation = date("Y-m-d",strtotime($confimation));
	}
	$bishop = $_POST["bishop"];
	$sponsor = $_POST["sponsor"];
	$alive = $_POST["alive"];
	if($alive === "alive") $alivesql = 1;
	else $alivesql = $_POST["year"];
	$sql = "UPDATE soruatoi SET holyname='$holyname', fullname='$fullname', gender='$gender', birthday='$birthday', fathername='$fathername', mothername='$mothername', dateofbaptism='$baptism', godparent='$godparent', priest='$priest', eucharist='$eucharist', confimation='$confimation', bishop='$bishop', sponsor='$sponsor', alive='$alivesql' WHERE id=$id ";
	if(mysqli_query($conn,$sql)){
		echo $id;
	}else{
		echo "Error updating record: " . mysqli_error($conn);
	}
?>
