<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

$query = "SELECT 
			PU.Id,
			PU.UsuarioId,
			PU.Title,
			PU.Descripcion,
			PU.Imagen,
			PU.Fecha,
			PR.Imagen AS ProfileImage,
			U.Nombre AS UserName
		FROM publicaciones PU INNER JOIN usuarios U ON PU.UsuarioId = U.Id
			INNER JOIN perfiles PR ON PR.UsuarioId = U.Id
		ORDER BY Fecha DESC";

$result = $con->createQuery($query);

$arr = Array();

while($row = mysqli_fetch_array($result)){
	
	$date = new DateTime($row['Fecha']);
	
	$arr[] = [
		"Id" => $row['Id'],
		"UserId" => $row['UsuarioId'],
		"Title" => $row['Title'],
		"Description" => $row['Descripcion'],
		"Image" => $row['Imagen'],
		"Date" => todayDate($date) ? 'Hoy ' . date_format($date,"H:i") . " hs"  : date_format($date,"d/m/Y H:i")." hs",
		"UserName" => $row['UserName'],
		"ImageProfile" => $row['ProfileImage']
	];
}

function todayDate($date){
	
	if(date_format($date,"d") == date("d") &&
		date_format($date,"m") == date("m") &&
		date_format($date,"y") == date("y")){
			return true;
		}else{
			return false;
		}
	
} 

$json = json_encode($arr);

echo $json;