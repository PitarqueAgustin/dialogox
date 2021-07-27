<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

$arr = Array();

if(isset($_GET['get']) && isset($_GET['token']) && isset($_GET['publicationid'])){
	
	$token = $_GET['token'];
	$publicationId = $_GET['publicationid'];
	
	$query = "SELECT 1 FROM publicacionesdestacadas
	WHERE UsuarioId = (SELECT Id FROM usuarios WHERE Token = '$token')
	AND PublicacionId = $publicationId";

	$result = $con->createQuery($query);
	
	if(mysqli_num_rows($result) > 0){
		$arr = [
			"Result" => "Ok"
		];
	}else{
		$arr = [
			"Result" => "Err"
		];
	}
}

if(isset($_GET['del']) && isset($_GET['token']) && isset($_GET['publicationid'])){
	
	$token = $_GET['token'];
	$publicationId = $_GET['publicationid'];
	
	$query = "DELETE FROM publicacionesdestacadas 
	WHERE UsuarioId = (SELECT Id FROM usuarios WHERE Token = '$token')
	AND PublicacionId = $publicationId";

	$result = $con->createQuery($query);
	
	if($result){
		$arr = [
			"Result" => "Ok"
		];
	}else{
		$arr = [
			"Result" => "Err"
		];
	}
}

if(isset($_GET['ins']) && isset($_GET['token']) && isset($_GET['publicationid'])){
	
	$token = $_GET['token'];
	$publicationId = $_GET['publicationid'];
	
	$query = "INSERT INTO  publicacionesdestacadas (UsuarioId, PublicacionId)
	VALUES((SELECT Id FROM usuarios WHERE Token = '$token'),$publicationId)";

	$result = $con->createQuery($query);
	
	if($result){
		$arr = [
			"Result" => "Ok"
		];
	}else{
		$arr = [
			"Result" => "Err"
		];
	}
}

$json = json_encode($arr);

echo $json;