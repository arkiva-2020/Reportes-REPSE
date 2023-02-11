<?php
// header('Content-Type: application/json; charset=utf-8');

$array = array();
include("../conexion/conexion.php");

        // echo "<h1>".$_REQUEST["split"]."</h1>";
        if (@$_REQUEST["estados"] != null) {
            @$data=$_REQUEST["estados"];
            @$p=$_REQUEST["split"];
            @$sql = "{call SelectCardAzul(?,?)}";  

            // $sql="EXECUTE SelectCardAmarillo N'$data'";
            $params = array(  
                array($data),
                array($p)
            );  
        
            
            $ejecutar=sqlsrv_query($con, $sql, $params);
        

            while ($TotalAzul = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   

                $ConsultaTotalAzul = $TotalAzul[0];        

                if ($ConsultaTotalAzul != null) {
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
        } else {
            $ConsultaTotalAzul=0;   
            $sql="EXECUTE ConsultaCardAmarillo";
    
            $ejecutar=sqlsrv_query($con, $sql);
        
    
            while ($TotalAzul = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
    
                $ConsultaTotalAzul = $TotalAzul[0];        
    
                if ($ConsultaTotalAzul != null) {
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
        }


    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>