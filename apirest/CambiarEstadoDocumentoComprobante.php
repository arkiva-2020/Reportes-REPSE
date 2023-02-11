<?php
include("../conexion/conexion.php");
$id=$_REQUEST['id'];
$sql="EXECUTE EditarEstadoDocumentoComprobante N'$id'";
$ejecutar=sqlsrv_query($con, $sql);
if ($ejecutar) {
    echo 1;
} else {
    echo 2;
}
?>