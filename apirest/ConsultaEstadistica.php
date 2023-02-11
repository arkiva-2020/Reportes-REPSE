<?php
$array = array();
include("../conexion/conexion.php");

    $ConsultaTotalMonto=0;   
    $sql="EXECUTE ConsultaGrafica N'2022'";
    $ejecutar=sqlsrv_query($con, $sql);

    if( $ejecutar === false) {
        die( print_r( sqlsrv_errors(), true) );
    }    

    while ($fila = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {           
        
            $array2 = array(			
                "Fecha" => $fila[0],
                "Mes" => $fila[1],
                "TotalMonto" => $fila[2]
            );        

        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

// $ejecutar=sqlsrv_query($con, $sql);
// echo '1';
?>