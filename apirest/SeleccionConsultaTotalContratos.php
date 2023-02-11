<?php
$array = array();
include("../conexion/conexion.php");

        if ($_REQUEST["estados"] != null) {
            $data=$_REQUEST["estados"];
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
            CROSS APPLY(SELECT * FROM dbo.fnSplit(t.Proveedor_Id,',') where t.ObjID in ($data)) Proveedor_Id   
            )t1 
            on t1.ID_Proveedor=p.objID 
            where 
            --Severidad_ID=3	and										--Tipo de severidad (ejemplo naranja)
            p.Clase_ID='234'
            )
            t2
            on t2.ID_Proveedor=contrato.Proveedor_ID
            where contrato.Empresa_Interna_ID in ($data) 
            and contrato.Estatus_Del_Contrato_ID=4   --- Activo
            and contrato.Tipo_De_Contrato_ID=2    ---Repse";

            $ejecutar=sqlsrv_query($con, $sql);
        

            while ($TotalContratos = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   

                if ($TotalContratos > 0) {
                    $array2 = array(			
                        "TotalContratos" => $TotalContratos[0],
                        "TotalMonto" => $TotalContratos[1],
                    );
                } else {
                    $array2 = array(			
                        "TotalContratos" => 0,
                        "TotalContratos" => 0
                    );
                }                

                array_push($array, $array2);
            }
        } else {
            $ConsultaContratos=0;   
            $sql="EXECUTE ConsultaTotalContratos";
            $ejecutar=sqlsrv_query($con, $sql);
        
    
            while ($TotalContratos = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
    
                if ($TotalContratos > 0) {
                    $array2 = array(			
                        "TotalContratos" => $TotalContratos[0],
                        "TotalMonto" => $TotalContratos[1],
                    );
                } else {
                    $array2 = array(			
                        "TotalContratos" => 0,
                        "TotalContratos" => 0
                    );
                }           
    
                array_push($array, $array2);
            }            
        }


    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;

?>