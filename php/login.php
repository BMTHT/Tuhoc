<?php
  session_start();
  $user = $_POST["user_name"];
  $pass = $_POST["user_password"];
  include "connect.php";
  $sql = "SELECT * FROM admin";
  $result = mysqli_query($conn, $sql);
  if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)){
      if($row["admin"] === $user){
        if($row["pass"] === $pass){
          $_SESSION["admin"] = $row["admin"];
          echo "true";
        }else{
          echo "false";
        }
      }else{
        echo "false";
      }

    }


  }
 ?>
