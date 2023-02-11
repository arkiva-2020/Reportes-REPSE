<?php
$array = array();

    include("../conexion/conexion.php");

    if ($_REQUEST["estados"] != null) {
        // echo "<h1>".$_REQUEST["estados"]."</h1>";
        $data=$_REQUEST["estados"];
        // $sql="EXECUTE ConsultaTop5Seleccion N'$data'";
        $sql="--top 5

        select top 5
        t4.nombreempresa,
        t4.nombreproveedor,
        t4.total_trabajadores,
        sum(mfcon.monto) as Monto
        from MFContrato mfcon
        inner join
        (
        select 
        t2.nombreempresa,
        t2.nombreproveedor,
        t3.ID_Proveedor,
        count(t3.trabajador_id) total_trabajadores
        from
        (SELECT  
        t.ObjID as trabajador_id,
        t.Name_or_Title , 
        --count(Proveedor_Id.ITEM) as trabajadores,
        Proveedor_Id.ITEM as ID_Proveedor
        FROM MFContactoExternoServicioEspecializado t 
        CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') ) Proveedor_Id   
        --where Proveedor_Id.ITEM=2
        --group by Proveedor_Id.ITEM,name_or_title
        --having count(Proveedor_Id.ITEM)>0
        )
        t3
        inner join 
        (select  
        p.name_or_title as nombreproveedor, 
        t1.name_or_title as nombreempresa, 
        t1.ID_Proveedor 
        from ConsolidadoProveedores p 
        inner join 
        ( 
        SELECT  
        t.Name_or_Title , 
        Proveedor_Id.ITEM as ID_Proveedor 
        FROM MFEmpresaInterna t 
        CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') where t.ObjID in ($data)) Proveedor_Id   
        )t1 
        on t1.ID_Proveedor=p.objID 
        ) t2 
        on t2.Id_proveedor=t3.ID_Proveedor 
        group by t3.ID_Proveedor, t2.nombreproveedor ,t2.nombreempresa
        )
        t4
        on t4.ID_Proveedor=mfcon.Proveedor_ID
        where mfcon.Estatus_Del_Contrato='Activo'
        group by t4.nombreempresa,t4.nombreproveedor,t4.total_trabajadores
        order by MAX(mfcon.Monto) Desc";
        $ejecutar=sqlsrv_query($con, $sql);
        while ($top5 = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_ASSOC)) {   
            // echo utf8_encode($top5['proveedor']);
                $array2 = array(			
                    "NombreEmpresa" => utf8_encode($top5['nombreempresa']),
                    "NombreProveedor" => utf8_encode($top5['nombreproveedor']),
                    "TotalTrabajadores" => utf8_encode($top5['total_trabajadores']),
                    "Monto" => utf8_encode($top5['Monto']),
                );

            array_push($array, $array2);
        }
    } else {
        // echo "<h1>".$_REQUEST["estados"]."</h1>";
        $sql="EXECUTE ConsultaTop5";
        $ejecutar=sqlsrv_query($con, $sql);
        while ($top5 = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_ASSOC)) {   

            // echo utf8_encode($top5['proveedor']);

                $array2 = array(			
                    "NombreEmpresa" => utf8_encode($top5['nombreempresa']),
                    "NombreProveedor" => utf8_encode($top5['nombreproveedor']),
                    "TotalTrabajadores" => utf8_encode($top5['total_trabajadores']),
                    "Monto" => utf8_encode($top5['Monto']),
                );

            array_push($array, $array2);
        }
    } 
  

    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>