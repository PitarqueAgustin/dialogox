<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

if(isset($_GET["token"])){
	
	$token = $_GET["token"];
	
	$query = "SELECT 
				PD.UsuarioId AS 'UserLike',
				U.Nombre AS 'NameUserLike',
				P.Imagen AS 'Image'
			FROM publicacionesdestacadas PD 
				INNER JOIN publicaciones P ON PD.PublicacionId = P.Id
				INNER JOIN usuarios U ON U.Id = PD.UsuarioId
			WHERE 
				U.Token != '$token'
				AND P.UsuarioId = (SELECT Id FROM usuarios WHERE Token = '$token')
			ORDER BY P.Fecha DESC";
	
	$result = $con->createQuery($query);
	
	$arr = Array();
	
	while($row = mysqli_fetch_array($result)){
		$arr[] = [
			"UserLike" => $row["UserLike"],
			"NameUserLike" => $row["NameUserLike"],
			"Image" => $row["Image"]
		];
	}
	
	$json = json_encode($arr);

	echo $json;
	
}