<?php
$array = array();
// START MONTO TOTAL
    include("../conexion/conexion.php");
    
    $sql="EXECUTE ConsultaCardNaranja";
    $ejecutar=sqlsrv_query($con, $sql);
    while ($TotalNaranja = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {  

        $ConsultaTotalNaranja = $TotalNaranja[0];        

        if ($ConsultaTotalNaranja > 0) {
            $array2 = array(			
                "TotalNaranja" => $ConsultaTotalNaranja,
            );
        } else {
            $array2 = array(			
                "TotalNaranja" => 0,
            );
        }


        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;
// END MONTO TOTAL
?>