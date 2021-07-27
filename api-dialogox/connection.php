<?php

class Connection{

	private $con;
	private $dbhost = "localhost";
	private $dbuser = "root";
	private $dbpass = "";
	private $dbname = "dialogox";
	
	public function getConnection(){
		$this->con = mysqli_connect(
		$this->dbhost,
		$this->dbuser,
		$this->dbpass,
		$this->dbname);
		
		if(!$this->con)
			echo "Falló la conexión a la Base de Datos. Verifique.";
	}
	
	public function createQuery($query){
		return mysqli_query($this->con,$query);
	}
	
	public function __destruct(){
		mysqli_close($this->con); 
	}
}