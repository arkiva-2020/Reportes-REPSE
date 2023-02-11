<?php
// header('Content-Type: application/json; charset=utf-8');
// header("Content-Type: text/html;charset=utf-8");

$array = array();
include("../conexion/conexion.php");

        // echo "<h1>".$_REQUEST["split"]."</h1>";
        if (@$_REQUEST["estados"] != null) {
            @$data=$_REQUEST["estados"];
            @$p=$_REQUEST["split"];
            @$sql = "{call SelectCardNaranja(?,?)}";  

            // $sql="EXECUTE SelectCardNaranja N'$data'";
            $params = array(  
                array($data),
                array($p)
            );  
        
            
            $ejecutar=sqlsrv_query($con, $sql, $params);
        

            while ($TotalNaranja = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   

                $ConsultaTotalNaranja = $TotalNaranja[0];        

                if ($ConsultaTotalNaranja != null) {
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
        } else {
            $ConsultaTotalNaranja=0;   
            $sql="EXECUTE ConsultaCardNaranja";
    
            $ejecutar=sqlsrv_query($con, $sql);
        
    
            while ($TotalNaranja = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
    
                $ConsultaTotalNaranja = $TotalNaranja[0];        
    
                if ($ConsultaTotalNaranja != null) {
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
        }


    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>