<?php
$array = array();
// START MONTO TOTAL
    include("../conexion/conexion.php");

    
    $sql="EXECUTE ConsultaCardIssues";
    $ejecutar=sqlsrv_query($con, $sql);
    while ($TotalIssues = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {  

        $ConsultaTotalIssues = $TotalIssues[0];        

        if ($ConsultaTotalIssues > 0) {
            $array2 = array(			
                "TotalIssues" => $ConsultaTotalIssues,
            );
        } else {
            $array2 = array(			
                "TotalIssues" => 0,
            );
        }


        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;
// END MONTO TOTAL
?>