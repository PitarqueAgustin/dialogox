<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

if(isset($_GET["token"]) && isset($_GET["url"])
	&& isset($_GET["phone"])){
	
	$token = $_GET["token"];
	
	$urlImage = $_GET["url"];
	
	$phone = $_GET["phone"];
	
	$query = "UPDATE perfiles SET Telefono = '$phone',
				Imagen = '$urlImage'
				WHERE UsuarioId = (SELECT Id FROM usuarios WHERE Token = '$token')";
	
	$result = $con->createQuery($query);
	
	$arr = Array();
	
	if($result){
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