<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

if(isset($_GET['token'])){

	$token = $_GET['token'];

	$query = "SELECT 1 FROM usuarios WHERE Token = '$token'";

	$result = $con->createQuery($query);

	$arr = Array();

	if(mysqli_num_rows($result) > 0){
		$arr = [
			"code" => "10"
		];
	}else{
		$arr = [
			"code" => "99"
		];
	}

	$json = json_encode($arr);

	echo $json;

}