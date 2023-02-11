<?php
include("../conexion/conexion.php");
$array = array();
$contador=0;
$id="";
$apellido="";
$cantidadPro=0;
$cantidadMonto=0;
$TotalFacturaProveedor=0;

// $arraySegundario = array();
$sql="EXECUTE ConsultaProveedor2";
$ejecutar=sqlsrv_query($con, $sql);
	
while ($filaProveedor = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)){	
		
	$cantidadPro=$filaProveedor[10];


        $verificacionGlobal = 0;
        foreach ($array as $valor) {
            if( ($valor["ID"] == utf8_decode($filaProveedor[8])) ){        
                $verificacionGlobal=1;
            }
        }
		
        if ($verificacionGlobal==0) {
            $arraySegundario = array(				
                "Estatus_Proveedor_Servicios_Especializados" => utf8_encode($filaProveedor[0]),
                "Name_Or_Tilte" => utf8_encode($filaProveedor[1]),
                "Rfc_Empresa" => utf8_encode($filaProveedor[2]),
                "Estatus_Proyecto_Servicio_Especializado" => utf8_encode($filaProveedor[3]),
                "Total01" => utf8_encode($filaProveedor[4]),				
                "Número_De_La_Orden_De_Compra" => utf8_encode($filaProveedor[5]),
                "Created" => $filaProveedor[6],	
                "Project_Title" => $filaProveedor[7],		
                "ID" => utf8_encode($filaProveedor[8]),
                "Proyectos"=> $cantidadPro,														
                "detallesProveedores"	=> [],
                "detallesEmpleados" => [],
                "detallesEmpleados2" => [],							
            );
            array_push($array, $arraySegundario);	
        }else{
            for($i=0; $i<count($array); $i++){
                if( ($array[$i]["ID"] == utf8_decode($filaProveedor[8])) ){
                    // $array[$i]["Total01"]=$array[$i]["Total01"]+utf8_decode($filaProveedor[4]);
                    // $array[$i]["Número_De_La_Factura"]=$array[$i]["Número_De_La_Factura"]." / ".utf8_decode($filaProveedor[5]);
                }
            }
        }
}
	

$varcadena="";
foreach ($array as $valor1) {
    if ($varcadena == "") {
        $varcadena=$valor1['ID'];        
    } else {
        $varcadena=$varcadena.",".$valor1['ID'];    
    }    
}
    // if( is_string($varcadena) == true )
    //     echo "'var1' contiene una cadena de texto<br/>";
    // else
    //     echo "'var1' NO contiene una cadena de texto<br/>";

    // return;



    
$detallesProveedores = array();
$idVarcadena=$varcadena;
$fecha="'yyyy-MM-dd'";
$p="',' ";
$Eproveedor="Documentos Pendientes";
$Null="'NULL";
$TipoD="'Documento Proveedor' ";

$sql3="
DECLARE	@return_value int

EXEC	@return_value = [dbo].[ConsultaDocumentosFaltantesProveedor]
		@ID = N'".$idVarcadena."',
		@Fecha = N'''yyyy-MM-dd''',
		@Eproveedor = N'''Documentos Pendientes''',
		@Null = N'''NULL''',
		@TipoD = N'''Documento Proveedor''',
		@p = N''','''

SELECT	'Return Value' = @return_value
";
// echo $sql3;
// yyyy-MM-dd
// Documentos Pendientes
// Documento Proveedor
// En Progreso
// NULL
$ejecutar3=sqlsrv_query($con, $sql3);
if( $ejecutar3 === false) {
	die( print_r( sqlsrv_errors(), true) );
}
$arrayV = array();
while ($DocumentosFaltantesProveedores = sqlsrv_fetch_array($ejecutar3, SQLSRV_FETCH_NUMERIC)) {				
        			
		$detallesProveedores = array(
			"Haber" => utf8_encode($DocumentosFaltantesProveedores[0]),
			"ID" => utf8_encode($DocumentosFaltantesProveedores[7]),
			"Proveedor" => utf8_encode($DocumentosFaltantesProveedores[1]),					
			"NombreDocumento" => utf8_encode($DocumentosFaltantesProveedores[2]),
			"Periodo" => utf8_encode($DocumentosFaltantesProveedores[3]),
			"TipoDocumento" => utf8_encode($DocumentosFaltantesProveedores[4]),
			"PeriodoFecha" => $DocumentosFaltantesProveedores[5],	
			"DocumentosID" => utf8_encode($DocumentosFaltantesProveedores[8]),
			"ProveedorID" => utf8_encode($DocumentosFaltantesProveedores[9]),
			"Status" => utf8_encode($DocumentosFaltantesProveedores[10]),
			"StatusComprobante" => utf8_encode($DocumentosFaltantesProveedores[11]),
			"NombreComprobante" => utf8_encode($DocumentosFaltantesProveedores[12]),												
		);	

        
                
        array_push($arrayV, $detallesProveedores);	
}




for ($i=0; $i < count($array); $i++) { 
    $arrayX = array();
    for ($j=0; $j < count($arrayV); $j++) { 

        if ($arrayV[$j]['ID'] == $array[$i]["ID"]) {
            
            array_push($arrayX, $arrayV[$j]);
           
        }

    }
    $array[$i]["detallesProveedores"]=$arrayX;
}


$arreglo['data']=$array;
$resultado=json_encode($arreglo);

echo $resultado;




?>





