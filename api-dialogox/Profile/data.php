<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

if(isset($_GET["token"])){
	
	$token = $_GET["token"];
	
	$query = "SELECT * 
			FROM perfiles 
			WHERE UsuarioId  = (SELECT Id FROM usuarios WHERE Token = '$token')";
	
	$result = $con->createQuery($query);
	
	$arr = Array();
	
	while($row = mysqli_fetch_array($result)){
		$arr = [
			"Id" => $row["Id"],
			"UsuarioId" => $row["UsuarioId"],
			"Telefono" => $row["Telefono"],
			"Imagen" => $row["Imagen"]
		];
	}
	
	$json = json_encode($arr);

	echo $json;
}
