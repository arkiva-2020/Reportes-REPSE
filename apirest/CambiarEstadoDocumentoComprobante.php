<?php
include("../conexion/conexion.php");

// if($_FILES["pdf"]["type"] != "application/pdf"){
//     echo "2";
//     return;
// }
if(isset($_FILES["pdf"])){
    
    $id=$_REQUEST['id'];
    $rfc=$_REQUEST['rfc'];
    $clase=$_REQUEST['clase'];
    $fecha=$_REQUEST['fecha'];
    
    $filename = $_FILES['pdf']['name'];
    $temp = $_FILES['pdf']['tmp_name'];
    
    $explode    =   explode('.', $filename);
    $extension  =   array_pop($explode);
    $result     =   $rfc.'_'.$clase.'_'.$fecha.'.'.$extension;
    

    move_uploaded_file($temp, '../documentos/comprobantes/'.$result);    
    
    $sql="EXECUTE EditarEstadoDocumentoComprobante N'$id'";
    $ejecutar=sqlsrv_query($con, $sql);
    echo '1';
} else {
    echo '2';
}

?>