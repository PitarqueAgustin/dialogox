<?php

	require_once("../connection.php");
	require_once("../requestHeader.php");

	$con = new Connection();

	$con->getConnection();

	$arr = Array();

	if(isset($_GET['token']) && isset($_GET['title']) && isset($_GET['description'])
		&& isset($_GET['imageurl'])){
		
		$token = $_GET['token'];
		$title = $_GET['title'];
		$description = $_GET['description'];
		$imageURL = $_GET['imageurl'];
		
		if(validations($title, $description, $imageURL) == "10"){
		
			$query = "INSERT INTO publicaciones (UsuarioId,Title,Descripcion,Imagen,Fecha)
						VALUES((SELECT Id FROM usuarios WHERE Token = '$token'), '$title', '$description',
						'$imageURL',now())";

			$result = $con->createQuery($query);
			
			if($result){
				$arr = [
					"code" => "10" 
				];
			}else{
				$arr = [
					"code" => "99",
					"message" => "Hubo un error al intentar agregar la publicación."
				];
			}
		}else{
			$arr= [
				"code" => "99",
				"message" => validations($title, $description, $imageURL)
			];
		}
	}

	$json = json_encode($arr);

	echo $json;

	function validations($title, $description, $imageURL){
		
		$rta = "10";
		
		if($title == "" || $description == "" || $imageURL == ""){
			$rta = "Complete los datos por favor.";
		}
		
		return $rta;
	}