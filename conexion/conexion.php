<?php
	
	// function conexion(){

		// $pass1="Ark1V@";
		// $pass2=".$";
		// $pass3="Ql";		
		
		// $srv="10.8.0.12";
		// $base="MFSQL_MonitorBackOffice";
		// $user="sa";
		// $pass= $pass1.''.$pass2.''.$pass3;
		// print_r($pass).'<br>';

		$pass1="Z4Qfk@";
		$pass2="DE$";
		$pass3="2tiuK";		
		
		$srv="172.16.1.5";
		$base="MFSQL_Monicom-Dev";
		$user="sa";
		$pass= $pass1.''.$pass2.''.$pass3;


		$informacion=array("Database"=>$base, "UID"=>$user, "PWD"=>$pass);
		$con=sqlsrv_connect($srv, $informacion);
		$con2=sqlsrv_connect($srv, $informacion);
		
		if ($con === false) {
			die(print_r( sqlsrv_errors(), true));
		}
?>