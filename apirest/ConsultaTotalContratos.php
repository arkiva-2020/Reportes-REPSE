<?php
$array = array();
include("../conexion/conexion.php");
   
    
    $sql="EXECUTE ConsultaTotalContratos";

    $ejecutar=sqlsrv_query($con, $sql);

    while ($TotalContratos = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
        
        if ($TotalContratos > 0) {
            $array1 = array(			
                "TotalContratos" => $TotalContratos[0],
                "TotalMonto" => $TotalContratos[1],
            );
        } else {
            $array1 = array(			
                "TotalContratos" => 0,
                "TotalContratos" => 0
            );
        }

        array_push($array, $array1);
    }


    // TRABAJADORES
    $sql2="EXECUTE ConsultaTotalTrabajadores";
    $ejecutar2=sqlsrv_query($con, $sql2);

    while ($TotalTrabajadores = sqlsrv_fetch_array($ejecutar2, SQLSRV_FETCH_NUMERIC)) {   
        
        if ($TotalTrabajadores > 0) {
            $array2 = array(			
                "TotalTrabajadores" => $TotalTrabajadores[0],                
            );
        } else {
            $array2 = array(			
                "TotalTrabajadores" => 0                
            );
        }

        array_push($array, $array2);
    }
    // TRABAJADORES


    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

// $ejecutar=sqlsrv_query($con, $sql);
// echo '1';
?>
