<?php
$array = array();
include("../conexion/conexion.php");
    $data=$_POST["estados"];
    // $permitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.@ ";
    $permitidos = "1234567890,";

    for ($i=0; $i<strlen($data); $i++){ 
        if (strpos($permitidos, substr($data,$i,1))===false){ 
        ?>
        <script>
        alert("Formato no valido");
        // window.location.href = "noticias.php";
        </script>               

        <?php
            return false; 
        } 
    }
    
    // $sql="EXECUTE ConsultaEmpresaSeleccionada N'".join($data)."'";
        $sql="SELECT t4.nombreempresa, t4.nombreproveedor, t4.total_trabajadores, sum(mfcon.monto) AS Monto

        FROM MFContrato mfcon
        INNER JOIN  (SELECT t2.nombreempresa, t2.nombreproveedor, t3.ID_Proveedor, count(t3.id_proveedor) total_trabajadores
        FROM (SELECT t.Name_or_Title , 
        --count(Proveedor_Id.ITEM) AS trabajadores,
        Proveedor_Id.ITEM AS ID_Proveedor
            
        FROM MFContactoExternoServicioEspecializado t 
        CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') ) Proveedor_Id   
        --WHERE Proveedor_Id.ITEM=2
        --group by Proveedor_Id.ITEM,name_or_title
        --having count(Proveedor_Id.ITEM)>0
        ) t3
        
        INNER JOIN (SELECT p.name_or_title AS nombreproveedor, t1.name_or_title AS nombreempresa, t1.ID_Proveedor 

        FROM ConsolidadoProveedores p 
        
        INNER JOIN ( SELECT t.Name_or_Title, Proveedor_Id.ITEM AS ID_Proveedor 

        FROM MFEmpresaInterna t 
        
        CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') WHERE t.ObjID in ($data) ) Proveedor_Id   
        
        ) t1 
        
        ON t1.ID_Proveedor=p.objID 
        
        ) t2 
        
        ON t2.Id_proveedor=t3.ID_Proveedor 
        
        group by t3.ID_Proveedor, t2.nombreproveedor ,t2.nombreempresa
        )
        t4
        
        ON t4.ID_Proveedor=mfcon.Proveedor_ID
        WHERE mfcon.Estatus_Del_Contrato='Activo'
        group by t4.nombreempresa,t4.nombreproveedor,t4.total_trabajadores";

        $ejecutar=sqlsrv_query($con, $sql);


    while ($consultaSeleccion = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_ASSOC)) {   

        $array2 = array(			
            "NombreEmpresa" => utf8_encode($consultaSeleccion['nombreempresa']),
            "NombreProveedor" => utf8_encode($consultaSeleccion['nombreproveedor']),
            "TotalTrabajadores" => utf8_encode($consultaSeleccion['total_trabajadores']),
            "Monto" => utf8_encode($consultaSeleccion['Monto']),
        );

        array_push($array, $array2);
    }

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;
?>