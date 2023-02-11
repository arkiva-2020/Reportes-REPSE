<?php
// header('Content-Type: application/json; charset=utf-8');

$array = array();
include("../conexion/conexion.php");

        // echo "<h1>".$_REQUEST["split"]."</h1>";
        if (@$_REQUEST["estados"] != null) {
            @$data=$_REQUEST["estados"];
            @$p=$_REQUEST["split"];
            @$sql = "{call SelectCardIssues(?,?)}";  

            // $sql="EXECUTE SelectCardRojo N'$data'";
            $params = array(  
                array($data),
                array($p)
            );  
        
            
            $ejecutar=sqlsrv_query($con, $sql, $params);
        

            while ($TotalIssues = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   

                $ConsultaTotalIssues = $TotalIssues[0];        

                if ($ConsultaTotalIssues != null) {
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
        } else {
            $ConsultaTotalIssues=0;   
            $sql="EXECUTE ConsultaCardIssues";
    
            $ejecutar=sqlsrv_query($con, $sql);
        
    
            while ($TotalIssues = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
    
                $ConsultaTotalIssues = $TotalIssues[0];        
    
                if ($ConsultaTotalIssues != null) {
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
        }


    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>