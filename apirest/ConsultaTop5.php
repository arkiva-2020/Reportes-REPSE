<?php
$array = array();

    include("../conexion/conexion.php");
    
    $sql="EXECUTE ConsultaTop5";
    
    $ejecutar=sqlsrv_query($con, $sql);
    while ($top5 = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_ASSOC)) {   

        // echo utf8_encode($top5['proveedor']);

            $array2 = array(			
                "NombreEmpresa" => utf8_encode($top5['nombreempresa']),
                "NombreProveedor" => utf8_encode($top5['nombreproveedor']),
                "TotalTrabajadores" => utf8_encode($top5['total_trabajadores']),
                "Monto" => utf8_encode($top5['Monto']),
            );

        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>