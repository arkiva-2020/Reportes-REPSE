<?php
$array = array();
include("../conexion/conexion.php");

    
    
    $data = json_decode($_POST['array']);    

    $azul = "";
    foreach ($data as $valor) {

        if ($azul == "") {
            $azul=$valor[0];        
        } else {
            $azul=$azul.",".$valor[0];    
        }    
                
    }    

    $ConsultaContratos=0;   

    if ($data) {            
    
            $sql="SELECT
            count(ObjID) as contrato,
            sum(monto) as monto
            from MFContrato contrato
            inner join
            (
            select  
            p.Severidad,
            p.Severidad_ID,
            p.name_or_title as nombreproveedor, 
            t1.name_or_title as nombreempresa, 
            t1.ID_Proveedor,
            t1.id_empresa,
            p.Contacto_Externo,
            p.Contacto_Externo_Id
            
            from ConsolidadoProveedores p									---ConsolidadoProveedores
            inner join 
            ( 
            SELECT  
            t.Name_or_Title , 
            t.ObjID as id_empresa,
            Proveedor_Id.ITEM as ID_Proveedor 
            FROM MFEmpresaInterna t											---MFEmpresaInterna
            CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') where t.ObjID in ($azul)) Proveedor_Id   
            )t1 
            on t1.ID_Proveedor=p.objID 
            where Severidad_ID=1											--Tipo de severidad (ejemplo azul)
            )
            t2
            on t2.ID_Proveedor=contrato.Proveedor_ID
            where contrato.Empresa_Interna_ID in ($azul) 
            and contrato.Estatus_Del_Contrato_ID=4   --- Activo
            and contrato.Tipo_De_Contrato_ID=2    ---Repse
            ";

            $ejecutar=sqlsrv_query($con, $sql);

            while ($TotalContratos = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
                

                $array2 = array(			
                    "TotalContratos" => $TotalContratos[0],
                    "TotalMonto" => $TotalContratos[1]            
                );

                array_push($array, $array2);
            }


            

            // Trabajadores
            $sql2="SELECT        
            count (contacto_id.ITEM) as trabajadores
            from
            (
            select    
            contrato.ObjID as contrato_id,    
            t2.ID_Proveedor,    
            t2.Contacto_Externo,
            t2.Contacto_Externo_Id as id_contacto
            
            from MFContrato contrato
            inner join
            (
            select  
            p.Severidad,
            p.Severidad_ID,
            p.name_or_title as nombreproveedor, 
            t1.name_or_title as nombreempresa, 
            t1.ID_Proveedor,
            t1.id_empresa,
            p.Contacto_Externo,
            p.Contacto_Externo_Id
            from ConsolidadoProveedores p									---ConsolidadoProveedores
            inner join 
            ( 
            SELECT  
            t.Name_or_Title , 
            t.ObjID as id_empresa,
            Proveedor_Id.ITEM as ID_Proveedor 
            FROM MFEmpresaInterna t											---MFEmpresaInterna
            CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') where t.ObjID in ($azul)) Proveedor_Id   
            )t1 
            on t1.ID_Proveedor=p.objID 
            where Severidad_ID=1											--Tipo de severidad (ejemplo azul)
            )
            t2
            on t2.ID_Proveedor=contrato.Proveedor_ID
            where contrato.Empresa_Interna_ID in ($azul) 
            and contrato.Estatus_Del_Contrato_ID=4   --- Activo
            and contrato.Tipo_De_Contrato_ID=2    ---Repse
            )
            t3
            CROSS APPLY(SELECT * FROM dbo.fnSplit(t3.id_contacto,',') ) contacto_id";    

            $ejecutar2=sqlsrv_query($con, $sql2);

            while ($TotalTrabajadores = sqlsrv_fetch_array($ejecutar2, SQLSRV_FETCH_NUMERIC)) {   
                

                $array3 = array(			
                    "TotalTrabajadores" => $TotalTrabajadores[0]                   
                );

                array_push($array, $array3);
            }
            // Trabajadores

    } else {
        $sql="SELECT
        count(ObjID) as contrato,
        sum(monto) as monto
        from MFContrato contrato
        inner join
        (
        select  
        p.Severidad,
        p.Severidad_ID,
        p.name_or_title as nombreproveedor, 
        t1.name_or_title as nombreempresa, 
        t1.ID_Proveedor,
        t1.id_empresa,
        p.Contacto_Externo,
        p.Contacto_Externo_Id
        
        from ConsolidadoProveedores p									---ConsolidadoProveedores
        inner join 
        ( 
        SELECT  
        t.Name_or_Title , 
        t.ObjID as id_empresa,
        Proveedor_Id.ITEM as ID_Proveedor 
        FROM MFEmpresaInterna t											---MFEmpresaInterna
        CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') ) Proveedor_Id   
        )t1 
        on t1.ID_Proveedor=p.objID 
        where Severidad_ID=1											--Tipo de severidad (ejemplo azul)
        )
        t2
        on t2.ID_Proveedor=contrato.Proveedor_ID
        where contrato.Estatus_Del_Contrato_ID=4   --- Activo
        and contrato.Tipo_De_Contrato_ID=2    ---Repse
        ";

        $ejecutar=sqlsrv_query($con, $sql);

        while ($TotalContratos = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
            

            $array2 = array(			
                "TotalContratos" => $TotalContratos[0],
                "TotalMonto" => $TotalContratos[1]            
            );

            array_push($array, $array2);
        }

        
            // Trabajadores
            $sql2="SELECT        
            count (contacto_id.ITEM) as trabajadores
            from
            (
            select    
            contrato.ObjID as contrato_id,    
            t2.ID_Proveedor,    
            t2.Contacto_Externo,
            t2.Contacto_Externo_Id as id_contacto
            
            from MFContrato contrato
            inner join
            (
            select  
            p.Severidad,
            p.Severidad_ID,
            p.name_or_title as nombreproveedor, 
            t1.name_or_title as nombreempresa, 
            t1.ID_Proveedor,
            t1.id_empresa,
            p.Contacto_Externo,
            p.Contacto_Externo_Id
            from ConsolidadoProveedores p									---ConsolidadoProveedores
            inner join 
            ( 
            SELECT  
            t.Name_or_Title , 
            t.ObjID as id_empresa,
            Proveedor_Id.ITEM as ID_Proveedor 
            FROM MFEmpresaInterna t											---MFEmpresaInterna
            CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') ) Proveedor_Id   
            )t1 
            on t1.ID_Proveedor=p.objID 
            where Severidad_ID=1											--Tipo de severidad (ejemplo azul)
            )
            t2
            on t2.ID_Proveedor=contrato.Proveedor_ID
            where  contrato.Estatus_Del_Contrato_ID=4   --- Activo
            and contrato.Tipo_De_Contrato_ID=2    ---Repse
            )
            t3
            CROSS APPLY(SELECT * FROM dbo.fnSplit(t3.id_contacto,',') ) contacto_id";    

            $ejecutar2=sqlsrv_query($con, $sql2);

            while ($TotalTrabajadores = sqlsrv_fetch_array($ejecutar2, SQLSRV_FETCH_NUMERIC)) {   
                

                $array3 = array(			
                    "TotalTrabajadores" => $TotalTrabajadores[0]                   
                );

                array_push($array, $array3);
            }
            // Trabajadores

    }




    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

// $ejecutar=sqlsrv_query($con, $sql);
// echo '1';
?>