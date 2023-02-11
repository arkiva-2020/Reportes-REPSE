<?php
include("../conexion/conexion.php");
$id=$_REQUEST['id'];
$sql="EXECUTE EditarEstadoDocumento N'$id'";
$ejecutar=sqlsrv_query($con, $sql);
echo '1';
?>