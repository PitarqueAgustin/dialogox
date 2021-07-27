<?php

require_once("../connection.php");
require_once("../requestHeader.php");

$con = new Connection();

$con->getConnection();

if(isset($_GET['user']) && isset($_GET['pass']) 
	&& isset($_GET['name']) && isset($_GET['rpass'])){
	
	$user = $_GET['user'];
	
	$pass = $_GET['pass'];
	
	$rPass = $_GET['rpass'];
	
	$name = $_GET['name'];
	
	$arr = Array();
	
	$rta = dataVerify($user, $name, $pass, $rPass, $con);
	
	if($rta == "OK"){
			
		$hash = sha1($pass);	
			
		$query = "INSERT INTO usuarios(Email,Nombre, Clave, Fecha_Alta, Token)
				  VALUES('$user','$name','$hash',now(),'')";

		$result = $con->createQuery($query);
				
		if($result){
			$arr = [
				"code" => "10"
			];
		}else{
			$arr = [
				"code" => "99",
				"message" => "Ocurrio un error al registrar el usuario. Intente más tarde."
			];
		}
	}else{
		$arr = [
			"code" => "99",
			"message" => $rta
		];
	}
	
	$json = json_encode($arr);
	
	echo $json;
	
}

function dataVerify($user,$name,$pass,$rPass,$con){
	
	$rta = "OK";
	
	$query = "SELECT 1 FROM usuarios WHERE Email = '$user'";
	
	$result = $con->createQuery($query);
	
	if(mysqli_num_rows($result) > 0){
		$rta = "Ya existe un usuario con ese email.";
	}
	
	if($user == "" || $name == "" || $pass == ""){
		$rta = "Debe completar todos los datos.";
	}
	
	if($pass != $rPass){
		$rta = "Las claves deben coincidir. Verifique."; 
	}
	
	return $rta;
}