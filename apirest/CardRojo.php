<?php
$array = array();
// START MONTO TOTAL
    include("../conexion/conexion.php");

    
    $sql="EXECUTE ConsultaCardRojo";
    $ejecutar=sqlsrv_query($con, $sql);
    while ($TotalRojo = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {  

        $ConsultaTotalRojo = $TotalRojo[0];        

        if ($ConsultaTotalRojo > 0) {
            $array2 = array(			
                "TotalRojo" => $ConsultaTotalRojo,
            );
        } else {
            $array2 = array(			
                "TotalRojo" => 0,
            );
        }


        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;
// END MONTO TOTAL
?>