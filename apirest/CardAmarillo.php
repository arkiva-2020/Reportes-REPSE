<?php
$array = array();
// START MONTO TOTAL
    include("../conexion/conexion.php");
    $ConsultaTotalAmarillo=0;
    $sql="EXECUTE ConsultaCardAmarillo";
    $ejecutar=sqlsrv_query($con, $sql);
    while ($TotalAmarillo = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {  
        
        $ConsultaTotalAmarillo = $TotalAmarillo[0];        
            
        if ($ConsultaTotalAmarillo > 0) {
            $array2 = array(			
                "TotalAmarillo" => $ConsultaTotalAmarillo,
            );
        } else {
            $array2 = array(			
                "TotalAmarillo" => 0,
            );
        }
    
        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;
    // END MONTO TOTAL
?>