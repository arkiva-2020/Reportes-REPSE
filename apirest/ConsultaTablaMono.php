<?php
$array = array();

    include("../conexion/conexion.php");

    // if ($_REQUEST["idEmpresa"] != null && $_REQUEST["idProveedor"] != null) {
        // echo "<h1>".$_REQUEST["id"]."</h1>";
        $empresa=$_REQUEST["idEmpresa"];
        $proveedor=$_REQUEST["idProveedor"];
        $sql="DECLARE @return_value int

        EXEC @return_value = [dbo].[ConsultaTablaMono]
            @IDEmpresa = N'''$empresa''',
            @IDProveedor = N'''$proveedor'''           
        
        SELECT	'Return Value' = @return_value";
        // $sql="EXECUTE ConsultaTablaMono N''$data''";      
        $ejecutar=sqlsrv_query($con, $sql);
        while ($top5 = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {               
                $array2 = array(			
                    "Contrato" => utf8_encode($top5[0]),
                    "nombreEmpresa" => utf8_encode($top5[1]),
                    "ID" => utf8_encode($top5[2]),
                    "proyecto" => utf8_encode($top5[3]),  
                    "Ordenes_De_Compras_Emitidas" => utf8_encode($top5[4]),
                    "entregables_recibidos" => utf8_encode($top5[5])                                     
                );

            array_push($array, $array2);
        }
    // } else {
    //     // echo "<h1>".$_REQUEST["estados"]."</h1>";
    //     $sql="DECLARE @return_value int

    //     EXEC @return_value = [dbo].[ConsultaTablaMono]
    //          @RFC = N'''$data'''
        
    //     SELECT	'Return Value' = @return_value";
    //     $ejecutar=sqlsrv_query($con, $sql);
    //     while ($top5 = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_ASSOC)) {   

    //         // echo utf8_encode($top5['proveedor']);

    //             $array2 = array(			
    //                 "Contrato" => utf8_encode($top5[0]),
    //                 "nombreEmpresa" => utf8_encode($top5[1]),
    //                 "proyecto" => utf8_encode($top5[2]),  
    //                 "Ordenes_De_Compras_Emitidas" => utf8_encode($top5[3]),
    //                 "entregables_recibidos" => utf8_encode($top5[4])                                     
    //             );

    //         array_push($array, $array2);
    //     }
    // } 
  

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>