<?php
// header('Content-Type: application/json; charset=utf-8');

$array = array();
include("../conexion/conexion.php");

        // echo "<h1>".$_REQUEST["split"]."</h1>";
        if (@$_REQUEST["estados"] != null) {
            @$data=$_REQUEST["estados"];
            @$p=$_REQUEST["split"];
            @$sql = "{call SelectCardRojo(?,?)}";  

            // $sql="EXECUTE SelectCardRojo N'$data'";
            $params = array(  
                array($data),
                array($p)
            );  
        
            
            $ejecutar=sqlsrv_query($con, $sql, $params);
        

            while ($TotalRojo = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   

                $ConsultaTotalRojo = $TotalRojo[0];        

                if ($ConsultaTotalRojo != null) {
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
        } else {
            $ConsultaTotalRojo=0;   
            $sql="EXECUTE ConsultaCardRojo";
    
            $ejecutar=sqlsrv_query($con, $sql);
        
    
            while ($TotalRojo = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
    
                $ConsultaTotalRojo = $TotalRojo[0];        
    
                if ($ConsultaTotalRojo != null) {
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
        }


    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>