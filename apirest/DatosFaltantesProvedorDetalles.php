<?php
// header('Content-Type: application/json; charset=utf-8');
include("../conexion/conexion.php");
$array = array();

// echo $_REQUEST['id'];
// return;


if (isset($_REQUEST['id'])) {

            $id=$_REQUEST['id'];                                
			$detalles = array();
			$sql="EXECUTE ConsultaDocumentosFaltantesProveedor N'$id' ";
			
			
			$ejecutar=sqlsrv_query($con, $sql);
			// if( $ejecutar === false) {
			// 	die( print_r( sqlsrv_errors(), true) );
			// }

			while ($ProveedoresDetalles = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {				
				
					$verificacion1 = 0;
					foreach ($detalles as $valor1) {
					    if( ($valor1["ID"] == $ProveedoresDetalles[7])  ){
					    	$verificacion1=1;
					    	// && ($valor1["Vigencia"] == $Vigencia1)
					    }
					}

				// if ($verificacion1 == 0) {									
					$detalles[] = array(
						"Haber" => utf8_encode($ProveedoresDetalles[0]),
						"ID" => utf8_encode($ProveedoresDetalles[7]),
						"Proveedor" => utf8_encode($ProveedoresDetalles[1]),					
						"NombreDocumento" => utf8_encode($ProveedoresDetalles[2]),
						"Periodo" => utf8_encode($ProveedoresDetalles[3]),
						"TipoDocumento" => utf8_encode($ProveedoresDetalles[4]),
						"PeriodoFecha" => $ProveedoresDetalles[5],	
						"DocumentosID" => utf8_encode($ProveedoresDetalles[8]),
						"ProveedorID" => utf8_encode($ProveedoresDetalles[9]),
						"Status" => utf8_encode($ProveedoresDetalles[10]),
						"StatusComprobante" => utf8_encode($ProveedoresDetalles[11]),
						"NombreComprobante" => utf8_encode($ProveedoresDetalles[12]),
						
					);
					// array_push($array, $array2); 
				// }
			}

			/*Para agregarlo en una variable*/
			$array2 = array(								
				"detallesProveedores"=> $detalles,
			);
			
			array_push($array, $array2); 
			/*Para agregarlo en una variable*/
			
			$arreglo['data']=$array;
			$resultado=json_encode($arreglo);

			echo $resultado;

         

}


?>