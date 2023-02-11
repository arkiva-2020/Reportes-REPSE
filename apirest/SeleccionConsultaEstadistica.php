<?php
$array = array();
include("../conexion/conexion.php");


        // $year = $_POST['year'];
        $year = 2022;
        $id = json_decode($_REQUEST['id']);            

        $isID = "";
        foreach ($id as $valor) {        

            if ($isID == "") {
                $isID=$valor;        
            } else {
                $isID=$isID.",".$valor;    
            }    
                    
        }           

        if ($isID != '') {                        
            $sql="EXECUTE ConsultaGraficaSelect N'$year', N'$isID'";

            $ejecutar=sqlsrv_query($con, $sql);
        

            while ($fila = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {           
        
                $array2 = array(			
                    "Fecha" => $fila[0],
                    "Mes" => $fila[1],
                    "TotalMonto" => $fila[2]
                );        
    
                array_push($array, $array2);
            }
        } else {
            $sql="EXECUTE ConsultaGrafica N'$year'";
            $ejecutar=sqlsrv_query($con, $sql);
    
            if( $ejecutar === false) {
                die( print_r( sqlsrv_errors(), true) );
            }    
    
            while ($fila = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {           
                
                    $array2 = array(			
                        "Fecha" => $fila[0],
                        "Mes" => $fila[1],
                        "TotalMonto" => $fila[2]
                    );        
    
                array_push($array, $array2);
            }
        }
                    
        
    

            // while ($TotalMonto = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   

            //     $ConsultaMonto = $TotalMonto[0];        

            //     if ($ConsultaMonto != null) {
            //         $array2 = array(			
            //             "TotalMonto" => $ConsultaMonto,
            //         );
            //     } else {
            //         $array2 = array(			
            //             "TotalMonto" => 0,
            //         );
            //     }

            //     array_push($array, $array2);
            // }
        // } 
        
        // else {
        //     $ConsultaMonto=0;   
        //     $sql="EXECUTE ConsultaTotalMonto";
    
        //     $ejecutar=sqlsrv_query($con, $sql);
        
    
        //     while ($TotalMonto = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
    
        //         $ConsultaMonto = $TotalMonto[0];        
    
        //         if ($ConsultaMonto != null) {
        //             $array2 = array(			
        //                 "TotalMonto" => $ConsultaMonto,
        //             );
        //         } else {
        //             $array2 = array(			
        //                 "TotalMonto" => 0,
        //             );
        //         }
    
        //         array_push($array, $array2);
        //     }            
        // }


    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>