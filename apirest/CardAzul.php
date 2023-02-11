<?php
$array = array();
// START MONTO TOTAL
    include("../conexion/conexion.php");
    $ConsultaTotalAzul=0;
    $sql="EXECUTE ConsultaCardAzul";
    $ejecutar=sqlsrv_query($con, $sql);
    while ($TotalAzul = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {  
        
        $ConsultaTotalAzul = $TotalAzul[0];        
            
        if ($ConsultaTotalAzul > 0) {
            $array2 = array(			
                "TotalAzul" => $ConsultaTotalAzul,
            );
        } else {
            $array2 = array(			
                "TotalAzul" => 0,
            );
        }
    
        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;
    // END MONTO TOTAL
?>