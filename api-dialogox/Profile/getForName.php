<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

if(isset($_GET["token"]) && isset($_GET["text"])){
	
	$token = $_GET["token"];
	$text = $_GET["text"];
	
	$query = "SELECT * 
			FROM usuarios U INNER JOIN perfiles P ON U.Id = P.UsuarioId
			WHERE Token  != '$token' AND U.Nombre like '%$text%'";
	
	$result = $con->createQuery($query);
	
	$arr = Array();
	
	while($row = mysqli_fetch_array($result)){
		$arr[] = [
			"Id" => $row["Id"],
			"Nombre" => $row["Nombre"],
			"Imagen" => $row["Imagen"]
		];
	}
	
	$json = json_encode($arr);

	echo $json;
}
