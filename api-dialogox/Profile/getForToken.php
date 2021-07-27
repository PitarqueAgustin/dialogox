<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

if(isset($_GET["token"])){
	
	$token = $_GET["token"];
	
	$query = "SELECT 
				P.Id,
				P.Imagen,
				U.Nombre
			FROM perfiles P INNER JOIN usuarios U ON P.UsuarioId = U.Id 
			WHERE U.Token = '$token'";
	
	$result = $con->createQuery($query);
	
	$arr = Array();
	
	while($row = mysqli_fetch_array($result)){
		$arr = [
			"Id" => $row["Id"],
			"Imagen" => $row["Imagen"],
			"Nombre" => $row["Nombre"],
		];
	}
	
	$json = json_encode($arr);

	echo $json;
}
