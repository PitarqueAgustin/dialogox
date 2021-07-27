<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

if(isset($_GET["user"]) && isset($_GET["pass"])){
	
	$user = $_GET["user"];
	$pass = $_GET["pass"];
	
	$hash = sha1($pass);
	
	$query = "SELECT * 
			FROM usuarios 
			WHERE Email = '$user' AND
					Clave = '$hash' ";
	
	$result = $con->createQuery($query);
	
	$arr = Array();
	
	if(mysqli_num_rows($result) > 0){
		
		$token = createToken($user, $pass, $con);
		
		$arr = [
			"code" => "10",
			"token" => $token
		];
	}else{
		$arr = [
			"code" => "99",
			"message" => "Usuario y/o clave incorrecta."
		];
	}
	
	$json = json_encode($arr);

	echo $json;
}

function createToken($user, $pass, $con){
		
	$str = $user . time();
	
	$hashPass = sha1($pass);
	
	$hash = sha1($str);
	
	$query = "UPDATE usuarios SET Token = '$hash'
				WHERE Email = '$user' AND Clave = '$hashPass'";
	
	$con->createQuery($query);
	
	return $hash;
}