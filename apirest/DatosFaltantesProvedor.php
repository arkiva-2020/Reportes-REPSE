    <?php    
    header('Content-Type: application/json; charset=utf-8');
    include("../conexion/conexion.php");
    $array = array();
    $contador=0;
    $id="";
    $apellido="";
    $cantidadPro=0;
    $cantidadMonto=0;
    $TotalFacturaProveedor=0;
    $null = 0;
    $id=$_REQUEST['id'];
    

    if ($id == "") {

        $sql="EXECUTE ConsultaProveedor";
        $ejecutar=sqlsrv_query($con, $sql);
            
        while ($filaProveedor = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)){	
                
                $cantidadPro=$filaProveedor[9];


                $verificacionGlobal = 0;
                foreach ($array as $valor) {
                    if( ($valor["ID"] == utf8_decode($filaProveedor[8])) ){        
                        $verificacionGlobal=1;
                    }
                }
                
                if ($verificacionGlobal==0) {
                    $arraySegundario = array(				
                        "Estatus_Proveedor_Servicios_Especializados" => utf8_decode($filaProveedor[0]),
                        "Name_Or_Tilte" => utf8_decode($filaProveedor[1]),
                        "Rfc_Empresa" => utf8_decode($filaProveedor[2]),
                        "Estatus_Proyecto_Servicio_Especializado" => utf8_decode($filaProveedor[3]),
                        "Total01" => utf8_decode($filaProveedor[4]),				
                        "Número_De_La_Orden_De_Compra" => utf8_decode($filaProveedor[5]),
                        "Created" => $filaProveedor[6],	
                        "Project_Title" => utf8_decode($filaProveedor[7]),		
                        "ID" => utf8_decode($filaProveedor[8]),                    
                        "Proyectos"=> $filaProveedor[9],		
                        "Severidad" => utf8_decode($filaProveedor[10]),												
                        "Moneda" => utf8_decode($filaProveedor[11]),
                        "IdEmpresa" => utf8_decode($filaProveedor[13]),
                        "detallesProveedores"	=> [],
                        "detallesEmpleados" => [],
                        "detallesEmpleados2" => [],							
                    );
                    array_push($array, $arraySegundario);	
                }else{
                    for($i=0; $i<count($array); $i++){
                        if( ($array[$i]["ID"] == utf8_decode($filaProveedor[8])) ){                        
                        }
                    }
                }
        }  
         
    } else {

        $sql="EXECUTE ConsultaProveedor2 N'$id'";
        $ejecutar=sqlsrv_query($con, $sql);
                
            
        while ($filaProveedor = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)){	                                            

                $null = 1;

                $verificacionGlobal = 0;
                foreach ($array as $valor) {
                    if( ($valor["ID"] == utf8_decode($filaProveedor[8])) ){        
                        $verificacionGlobal=1;
                    }
                }
                
                if ($verificacionGlobal==0) {
                    $arraySegundario = array(				
                        "Estatus_Proveedor_Servicios_Especializados" => utf8_decode($filaProveedor[0]),
                        "Name_Or_Tilte" => utf8_decode($filaProveedor[1]),
                        "Rfc_Empresa" => utf8_decode($filaProveedor[2]),
                        "Estatus_Proyecto_Servicio_Especializado" => utf8_decode($filaProveedor[3]),
                        "Total01" => utf8_decode($filaProveedor[4]),				
                        "Número_De_La_Orden_De_Compra" => utf8_decode($filaProveedor[5]),
                        "Created" => $filaProveedor[6],	
                        "Project_Title" => utf8_decode($filaProveedor[7]),		
                        "ID" => utf8_decode($filaProveedor[8]),                    
                        "Proyectos"=> $filaProveedor[9],		
                        "Severidad" => utf8_decode($filaProveedor[10]),												
                        "Moneda" => utf8_decode($filaProveedor[11]),
                        "IdEmpresa" => utf8_decode($filaProveedor[13]),
                        "detallesProveedores"	=> [],
                        "detallesEmpleados" => [],
                        "detallesEmpleados2" => [],							
                    );
                    array_push($array, $arraySegundario);	
                }else{
                    for($i=0; $i<count($array); $i++){
                        if( ($array[$i]["ID"] == utf8_decode($filaProveedor[8])) ){                        
                        }
                    }
                }
        }  

    }        

    
        

    $varcadena="";
    foreach ($array as $valor1) {
        if ($varcadena == "") {
            $varcadena=$valor1['ID'];        
        } else {
            $varcadena=$varcadena.",".$valor1['ID'];    
        }    
    }
    
        // if( is_string($varcadena) == true )
        //     echo "'var1' contiene una cadena de texto<br/>";
        // else
        //     echo "'var1' NO contiene una cadena de texto<br/>";
        // return;        



                  
    if ($null == 0) {
        $idVarcadena=0;
    } else {
        $idVarcadena=$varcadena;
    }

    $detallesProveedores = array();    
    $fecha="'yyyy-MM-dd'";    

    $sql3="
    DECLARE	@return_value int

    EXEC	@return_value = [dbo].[ConsultaDocumentosFaltantesProveedor]

            @ID = N'".$idVarcadena."',
            @Eproveedor = N'''Documentos Pendientes''',
            @Proceso = N'''En Proceso''',            
            @Fecha = N'''yyyy-MM-dd''',
            @Clase_ID = N'''234''',
            @IDEmpresInterna = N'''1''',
            @p = N''',''',
            @DocumentoProveedor = N'''Documento Proveedor''',
            @Vacio = N''''''            

    SELECT	'Return Value' = @return_value
    ";
    
    $ejecutar3=sqlsrv_query($con, $sql3);
    if( $ejecutar3 === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
    $arrayV = array();

    while ($DocumentosFaltantesProveedores = sqlsrv_fetch_array($ejecutar3, SQLSRV_FETCH_NUMERIC)) {				

            $verificacion1 = 0;
            foreach ($detallesProveedores as $clave => $valor) {
                if( $clave == "Proveedor"){
                    if( ($valor == utf8_encode($DocumentosFaltantesProveedores[0]))){
                        $verificacion1=1;                                          
                    }
                }
            }            

            if ($verificacion1 == 0) {	
                $detallesProveedores = array(                    
                    "ID" => utf8_encode($DocumentosFaltantesProveedores[8]),
                    "Proveedor" => utf8_encode($DocumentosFaltantesProveedores[1]),					
                    "NombreDocumento" => utf8_encode($DocumentosFaltantesProveedores[2]),
                    "Periodo" => utf8_encode($DocumentosFaltantesProveedores[3]),
                    "TipoDocumento" => utf8_encode($DocumentosFaltantesProveedores[4]),
                    "PeriodoFecha" => $DocumentosFaltantesProveedores[5],	
                    "ProveedorID" => utf8_encode($DocumentosFaltantesProveedores[7]),
                    "DocumentosID" => utf8_encode($DocumentosFaltantesProveedores[8]),                    
                    "Status" => utf8_encode($DocumentosFaltantesProveedores[9]),
                    "StatusComprobante" => utf8_encode($DocumentosFaltantesProveedores[11]),
                    // "NombreComprobante" => utf8_encode($DocumentosFaltantesProveedores[12]),												
                );	 
            }
            array_push($arrayV, $detallesProveedores);	
    }

    for ($i=0; $i < count($array); $i++) { 
        $arrayX = array();
        for ($j=0; $j < count($arrayV); $j++) { 

            if ($arrayV[$j]['ProveedorID'] == $array[$i]["ID"]) {
                
                array_push($arrayX, $arrayV[$j]);
            
            }

        }
        $array[$i]["detallesProveedores"]=$arrayX;
    }
    

    //////////////////////// EMPLEADOS ////////////////////////    
    

    $detallesEmpleados = array();    
    $detallesEmpleados2 = array(); 
    $arrayA = array();


    $empleadoID = "";
    $sql4="  
    DECLARE	@return_value int

    EXEC	@return_value = [dbo].[ConsultaDocumentosFaltantesEmpleados]
            @ID = N'".$idVarcadena."',
            @Fecha = N'''yyyy-MM-dd''',
            @Eproveedor = N'''Documentos Pendientes''',
            @DocumentoEmpleado = N'''Documento Empleado''',
            @p = N''',''',
            @Proceso = N'''En Proceso''',
            @Cero = '''0''',
			@IDEmpresInterna = '''1''',
			@Clase_ID = '''234'''

    SELECT	'Return Value' = @return_value    
    ";    
    $ejecutar4=sqlsrv_query($con, $sql4);    
    if( $ejecutar4 === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
    $arrayE = array();
    while ($DocumentosFaltantesEmpleados = sqlsrv_fetch_array($ejecutar4, SQLSRV_FETCH_NUMERIC)) {				                                    

            $detallesEmpleados = array(
                "EstatusProveedor" => $DocumentosFaltantesEmpleados[0],
                "ID" => utf8_encode($DocumentosFaltantesEmpleados[6]),
                "Proveedor" => utf8_encode($DocumentosFaltantesEmpleados[1]),					
                "Documentos" => utf8_encode($DocumentosFaltantesEmpleados[2]),                
                "TipoDocumento" => utf8_encode($DocumentosFaltantesEmpleados[3]),
                "PeriodoFecha" => $DocumentosFaltantesEmpleados[4],							
                "DocumentosID" => utf8_encode($DocumentosFaltantesEmpleados[5]),                
                "Empleado" => utf8_encode($DocumentosFaltantesEmpleados[7]),						
                "Empleado_ID" => $DocumentosFaltantesEmpleados[9],
                "ProveedorID" => utf8_encode($DocumentosFaltantesEmpleados[10])
                // "DocumentosEmpleados" => [], #$detallesDocumentos
            );	             
            array_push($arrayE, $detallesEmpleados);	


            $verificacionEmpleados = 0;
            foreach ($arrayA as $valorEmpleado) {
                if( ($valorEmpleado["Empleado_ID"] == $DocumentosFaltantesEmpleados[9]) ){        
                    $verificacionEmpleados=1;
                }
            }

            if ($verificacionEmpleados==0) {
                $detallesEmpleados = array(
                    "EstatusProveedor" => $DocumentosFaltantesEmpleados[0],
                    "ID" => utf8_encode($DocumentosFaltantesEmpleados[6]),
                    "Proveedor" => utf8_encode($DocumentosFaltantesEmpleados[1]),					
                    "Documentos" => utf8_encode($DocumentosFaltantesEmpleados[2]),                
                    "TipoDocumento" => utf8_encode($DocumentosFaltantesEmpleados[3]),
                    "PeriodoFecha" => $DocumentosFaltantesEmpleados[4],							
                    "DocumentosID" => utf8_encode($DocumentosFaltantesEmpleados[5]),                
                    "Empleado" => utf8_encode($DocumentosFaltantesEmpleados[7]),						
                    "Empleado_ID" => $DocumentosFaltantesEmpleados[9],
                    "ProveedorID" => utf8_encode($DocumentosFaltantesEmpleados[10])                    
                );	             
                array_push($arrayA, $detallesEmpleados);	
            }

    }
        

  

    $varcadena3="";
    foreach ($arrayA as $valor3) {
        if ($varcadena3 == "") {
            $varcadena3=$valor3['Empleado_ID'];        
        } else {
            $varcadena3=$varcadena3.",".$valor3['Empleado_ID'];    
        }    
    }


    $varcadena2="";
    foreach ($arrayA as $valor1) {
               
        if ($varcadena2 == "") {
            $varcadena2=$valor1['ProveedorID'];        
        } else {

            $explo = explode(",", $varcadena2);                    
            $validar="false";
            foreach ($explo as $x) {
                
                if ($x == $valor1['ProveedorID']) {
                    $validar="true";
                }
            }

            if ($validar == "false") {
                $varcadena2=$varcadena2.",".$valor1['ProveedorID'];    
            }                    
        } 
        
    }


    if ($null == 0) {        
        $varcadena2=0;
        $varcadena3=0;
    } else {
        $varcadena2;
        $varcadena3;
    }
    
        //////////////////////// DOCUMENTOS /////////////////////
        $sql5="
        DECLARE	@return_value int

        EXEC	@return_value = [dbo].[ConsultaDocumentosFaltantesEmpleadosTablaPivote]
                @ID = N'".$varcadena2."',
                @IDEmpleado = N'".$varcadena3."',
				@Fecha = N'''yyyy-MM-dd''',
				@p = N''',''',
				@Eproveedor = N'''Documentos Pendientes'''

        SELECT	'Return Value' = @return_value
        ";

        $ejecutar5=sqlsrv_query($con, $sql5);   
        if( $ejecutar5 === false) {
            die( print_r( sqlsrv_errors(), true) );
        }    
        $arrayD = array();
        while ($DocumentosEmpleados = sqlsrv_fetch_array($ejecutar5, SQLSRV_FETCH_NUMERIC)) {		
            $detallesDocumentos = array (
                "Proveedor" => utf8_encode($DocumentosEmpleados[0]),
                "Empleado" => utf8_encode($DocumentosEmpleados[1]),
                "Documentos" => utf8_encode($DocumentosEmpleados[2]),
                "Fecha" => utf8_encode($DocumentosEmpleados[3]),
                "IDproveedor" => utf8_encode($DocumentosEmpleados[4]),
                "IDempleado" => utf8_encode($DocumentosEmpleados[5]),
                "Vigencia" => utf8_encode($DocumentosEmpleados[6]),
                "ID" => utf8_encode($DocumentosEmpleados[7]),                                
                "Status" => utf8_encode($DocumentosEmpleados[8]),  
            );
            array_push($arrayD, $detallesDocumentos);	
        }
        // echo json_encode($arrayA);
        // return;

        for ($i=0; $i < count($arrayA); $i++) { 
            $arrayDocEmpleado = array();
            for ($j=0; $j < count($arrayD); $j++) { 

                if ($arrayA[$i]['Empleado_ID'] == $arrayD[$j]["IDempleado"]) {
                                    
                    array_push($arrayDocEmpleado, $arrayD[$j]);

                    // echo json_encode($arrayA[$i]);                    
                
                }
    
            }
            $arrayA[$i]["DocumentosEmpleados"]=$arrayDocEmpleado;            
        } 
        
 
//////////////////////// DOCUMENTOS /////////////////////
    for ($i=0; $i < count($array); $i++) { 
        $arrayX2 = array();
        for ($j=0; $j < count($arrayA); $j++) { 

            if ($arrayA[$j]['ProveedorID'] == $array[$i]["ID"]) {
                                
                array_push($arrayX2, $arrayA[$j]);
            
            }

        }
        $array[$i]["detallesEmpleados"]=$arrayX2;
        $array[$i]["detallesEmpleados2"]=$arrayX2;
    } 

    // echo $varcadena2;
    // return;

    //////////////////////// EMPLEADOS ////////////////////////




    $arreglo['data']=$array;
    $resultado=json_encode($arreglo);

    echo $resultado;
    ?>





