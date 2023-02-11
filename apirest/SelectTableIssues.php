<?php
// header('Content-Type: application/json; charset=utf-8');
header("Content-Type: text/html;charset=utf-8");
$array = array();

    include("../conexion/conexion.php");

    // echo "<h1>".$_REQUEST["id"]."</h1>";

    if ($_REQUEST["id"] != "") {
        $id=$_REQUEST['id'];
        
        @$p="',' ";
        @$sql = "{call ConsultaIssues(?,?)}";  

        $params = array(  
            array($id),
            array($p)
        );   
        $ejecutar=sqlsrv_query($con, $sql, $params);
        
        while ($top5 = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
            // echo utf8_encode($top5['proveedor']);
                $array2 = array(			
                    "Rfc_Empresa" => utf8_encode($top5[0]),
                    "Nombreproveedor" => utf8_encode($top5[1]),
                    "Nombreempresa" => utf8_encode($top5[2]),
                    "Descripcion" => utf8_encode($top5[3]),
                );

            array_push($array, $array2);
        }
    } else {
        // echo "<h1>".$_REQUEST["estados"]."</h1>";
        $sql="EXECUTE ConsultaIssuesAll";
        $ejecutar=sqlsrv_query($con, $sql);
        while ($top5 = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   

            // echo utf8_encode($top5['proveedor']);

                $array2 = array(			
                    "Rfc_Empresa" => utf8_encode($top5[0]),
                    "Nombreproveedor" => utf8_encode($top5[1]),
                    "Nombreempresa" => utf8_encode($top5[2]),
                    "Descripcion" => utf8_encode($top5[3]),
                );

            array_push($array, $array2);
        }
    } 
  

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>