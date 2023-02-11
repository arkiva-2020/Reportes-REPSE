<?php
$array = array();

    include("../conexion/conexion.php");
    
    $sql="EXECUTE ConsultaContratos";
    
    $ejecutar=sqlsrv_query($con, $sql);
    while ($contratos = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
        
            $array2 = array(			
                "Contratos" => utf8_encode($contratos[0]),
                "NombreProveedor" => utf8_encode($contratos[1]),
                "NombreEmpresa" => utf8_encode($contratos[2]),
                "Proyecto" => utf8_encode($contratos[3]),
            );

        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>