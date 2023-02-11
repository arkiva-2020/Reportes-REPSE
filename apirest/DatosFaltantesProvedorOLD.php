<?php

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
		$base="MFSQL_MonitorBackOffice";
		$user="sa";
		$pass= $pass1.''.$pass2.''.$pass3;


		$informacion=array("Database"=>$base, "UID"=>$user, "PWD"=>$pass);
		$con=sqlsrv_connect($srv, $informacion);
		
		if ($con === false) {
			die(print_r( sqlsrv_errors(), true));
		}


// include("../conexion/conexion.php");
$array = array();
$contador=0;
$id="";
$apellido="";
$cantidadPro=0;
$cantidadMonto=0;
$TotalFacturaProveedor=0;


// $mes=$_REQUEST['mes'];


$sql="EXECUTE ConsultaProveedor";
$ejecutar=sqlsrv_query($con, $sql);
	// var_dump ($ejecutar);

while ($filaProveedor = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)){	
		
			$cantidadPro=0;
			if (utf8_decode($filaProveedor[0]) != "") {
				$sql2="SELECT count(*)  FROM MFProyectoServicioEspecializado WHERE 
				Estatus_Proyecto_Servicio_Especializado ='En Progreso' 
				AND Proveedor_Servicio_Especializado_ID = '".utf8_decode($filaProveedor[0])."' ";				
				$ejecutar2=sqlsrv_query($con, $sql2);
				while ($Proyectos = sqlsrv_fetch_array($ejecutar2, SQLSRV_FETCH_NUMERIC)) {
					$cantidadPro = $Proyectos[0];						
				}
			} else {
				$cantidadPro=0;
			}							
			


			$detallesProveedores = array();
			$sql3="EXECUTE ConsultaDocumentosFaltantesProveedor N'".utf8_decode($filaProveedor[0])."' ";
			$ejecutar3=sqlsrv_query($con, $sql3);

			while ($DocumentosFaltantesProveedores = sqlsrv_fetch_array($ejecutar3, SQLSRV_FETCH_NUMERIC)) {				
				// var_dump ($DocumentosFaltantesProveedores);	
				// $Vigencia1='';
				// if (utf8_decode($DocumentosFaltantesProveedores[5]) == "Semanal") {
				// 	$Vigencia1='4';
				// } elseif (utf8_decode($DocumentosFaltantesProveedores[5]) == "Quincenal") {
				// 	$Vigencia1='2';
				// } elseif (utf8_decode($DocumentosFaltantesProveedores[5]) == "Catorcenal") {
				// 	$Vigencia1='2-1';
				// } elseif (utf8_decode($DocumentosFaltantesProveedores[5]) == "Mensual") {
				// 	$Vigencia1='1';
				// } else {
				// 	$Vigencia1='-';
				// }	

					$verificacion1 = 0;
					foreach ($detallesProveedores as $valor1) {
					    if( ($valor1["Proveedor"] == utf8_decode($DocumentosFaltantesProveedores[0]))  ){
					    	$verificacion1=1;
					    	// && ($valor1["Vigencia"] == $Vigencia1)
					    }
					}

				if ($verificacion1 == 0) {									
					$detallesProveedores[] = array(
						"ID" => utf8_decode($DocumentosFaltantesProveedores[9]),
						"Proveedor" => utf8_decode($DocumentosFaltantesProveedores[1]),					
						"NombreDocumento" => utf8_encode($DocumentosFaltantesProveedores[2]),
						"Periodo" => utf8_decode($DocumentosFaltantesProveedores[3]),
						"TipoDocumento" => utf8_decode($DocumentosFaltantesProveedores[4]),
						"PeriodoFecha" => $DocumentosFaltantesProveedores[5],	
						"ProveedorID" => utf8_decode($DocumentosFaltantesProveedores[7]),
						"DocumentosID" => utf8_decode($DocumentosFaltantesProveedores[8]),
						"Status" => utf8_encode($DocumentosFaltantesProveedores[10]),
						"StatusComprobante" => utf8_encode($DocumentosFaltantesProveedores[11]),
						"NombreComprobante" => utf8_encode($DocumentosFaltantesProveedores[12]),
						// "Empleado" => utf8_decode($DocumentosFaltantesProveedores[9]),
						// "Vigencia" => $Vigencia1,				
					);
				}
			}



			$detallesEmpleados = array();	
			$TotalEmpleados=0;		
			$sql4="EXECUTE ConsultaDocumentosFaltantesEmpleados N'".utf8_decode($filaProveedor[0])."' ";
			$ejecutar4=sqlsrv_query($con, $sql4);

			

			while ($DocumentosFaltantesEmpleados = sqlsrv_fetch_array($ejecutar4, SQLSRV_FETCH_NUMERIC)) {				
						// var_dump ($DocumentosFaltantesEmpleados);
				// $Vigencia='';
				// if (utf8_decode($DocumentosFaltantesEmpleados[10]) == "Semanal") {
				// 	$Vigencia='4';
				// } elseif (utf8_decode($DocumentosFaltantesEmpleados[10]) == "Quincenal") {
				// 	$Vigencia='2';
				// } elseif (utf8_decode($DocumentosFaltantesEmpleados[10]) == "Catorcenal") {
				// 	$Vigencia='2-1';
				// } elseif (utf8_decode($DocumentosFaltantesEmpleados[10]) == "Mensual") {
				// 	$Vigencia='1';
				// } else {
				// 	$Vigencia='-';
				// }

				$TotalEmpleados++; 

					$verificacion = 0;
					foreach ($detallesEmpleados as $valor) {						
					    if( ($valor["Empleado_ID"] == utf8_decode($DocumentosFaltantesEmpleados[11])) ){
					    	$verificacion=1;
					    }
					}

				$detallesDocumentos = array();
				$sqlDocumentos="EXECUTE ConsultaDocumentosFaltantesEmpleadosTablaPivote N'".utf8_decode($DocumentosFaltantesEmpleados[6])."', N'".utf8_decode($DocumentosFaltantesEmpleados[11])."' ";
				$ejecutarDocumentos=sqlsrv_query($con, $sqlDocumentos);
				while ($DocumentosEmpleados = sqlsrv_fetch_array($ejecutarDocumentos, SQLSRV_FETCH_NUMERIC)) {		
					$detallesDocumentos[] = array (
						"ID" => utf8_decode($DocumentosEmpleados[7]),
						"Documentos" => utf8_decode($DocumentosEmpleados[2]),
						"Fecha" => $DocumentosEmpleados[3]
					);
				}

				if($verificacion==0){					
					$detallesEmpleados[] = array(
						"ID" => utf8_decode($DocumentosFaltantesEmpleados[8]),
						"Proveedor" => utf8_decode($DocumentosFaltantesEmpleados[1]),					
						"NombreDocumento" => utf8_encode($DocumentosFaltantesEmpleados[2]),
						"Periodo" => utf8_decode($DocumentosFaltantesEmpleados[3]),
						"TipoDocumento" => utf8_decode($DocumentosFaltantesEmpleados[4]),
						"PeriodoFecha" => $DocumentosFaltantesEmpleados[5],	
						"ProveedorID" => utf8_decode($DocumentosFaltantesEmpleados[6]),
						"DocumentosID" => utf8_decode($DocumentosFaltantesEmpleados[7]),
						"Empleado" => utf8_decode($DocumentosFaltantesEmpleados[9]),						
						"Empleado_ID" => $DocumentosFaltantesEmpleados[11],
						"DocumentosEmpleados" => $detallesDocumentos,
						// "Vigencia" => $Vigencia,						
					);
				}
			}

	$verificacionGlobal = 0;

	foreach ($array as $valor) {
	    if( ($valor["ID"] == utf8_decode($filaProveedor[0])) ){
	//	    	$array["Total01"] = $array["Total01"] + utf8_decode($filaProveedor[7]);
	    	$verificacionGlobal=1;
	    }
	}


	if ($verificacionGlobal==0) {
			$array2 = array(				
				"ID" => utf8_decode($filaProveedor[0]),
				"Estatus_Proveedor_Servicios_Especializados" => utf8_decode($filaProveedor[1]),
				"Name_Or_Tilte" => utf8_decode($filaProveedor[2]),
				"Rfc_Empresa" => utf8_decode($filaProveedor[3]),
				"Estatus_Proyecto_Servicio_Especializado" => utf8_decode($filaProveedor[4]),						      
				"Proyectos"=> $cantidadPro,
				"Número_De_La_Factura" => utf8_decode($filaProveedor[5]),
				"Total01" => utf8_decode($filaProveedor[6]),		
				"Número_De_La_Orden_De_Compra" => utf8_decode($filaProveedor[7]),
				"Created" => $filaProveedor[8],	
				"Listas_Art_69" => $filaProveedor[9],	
				"Listas_Art_69b" => $filaProveedor[10],					
				"Project_Title" => $filaProveedor[11],				
				// "TotalFacturasProveedores" => $TotalFacturaProveedor,
				"detallesProveedores"	=> $detallesProveedores,
				"detallesEmpleados" => $detallesEmpleados,
				"detallesEmpleados2" => $detallesEmpleados,			
				"TotalEmpleados" => $TotalEmpleados,	
				// "OrdenesEmpleados" => $NumeroOrden,
			);

		array_push($array, $array2);
	}else{
		for($i=0; $i<count($array); $i++){
			if( ($array[$i]["ID"] == utf8_decode($filaProveedor[0])) ){
				$array[$i]["Total01"]=$array[$i]["Total01"]+utf8_decode($filaProveedor[6]);
				$array[$i]["Número_De_La_Factura"]=$array[$i]["Número_De_La_Factura"]." / ".utf8_decode($filaProveedor[5]);
			}
		}
	}
}


		// $arreglo['data']=$array;
		// $resultado=json_encode($arreglo);

		// echo $resultado;



$arreglo['data']=$array;
$resultado=json_encode($arreglo);

echo $resultado;




?>





