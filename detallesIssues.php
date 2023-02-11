<?php
    include("./conexion/conexion.php");
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Repse | Administrativo</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="css/plugins/dataTables/datatables.min.css" rel="stylesheet">
    <link href="css/bootstrap-multiselect.min.css" rel="stylesheet">

    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">


</head>

<body class="top-navigation">

    <div id="wrapper">



        <div id="page-wrapper" class="personalizado-bg">




            <div class="panel-header bg-primary-gradient">
                <div class="page-inner">
                    <!--py-5-->
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div class="ml-md-auto py-2 py-md-0 mb-4 menu">
                            <!-- <h2 class="text-white pb-2 fw-bold">Dashboard</h2> -->
                            <h4 class="text-white op-7 mb-2 d-inline p-2 "><i class="fa fa-file-text-o"></i><a
                                    style="color:white;" href="index.php"> DASHBOARD </a></h4>
                            <h4 class="text-white op-7 mb-2 d-inline p-2 ">
                                <i class="fa fa-sitemap"></i> 
                                <a style="color:white;" href="detallesContratos.php"> CONTRATOS </a>
                            </h4>
                            <h4 class="text-white op-7 mb-2 d-inline p-2 ">
                                <i class="fa fa-user"></i> 
                                <a style="color:white;" href="DatosFaltantesProveedor.php"> PROVEEDORES  </a>
                            </h4>
                        </div>
                        <div class="ml-md-auto py-2 py-md-0 mb-4">
                            <!-- <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"> -->

                            <!-- <select style="background:white;" class="btn btn-round" name="txtcategoria"
                                id="idtxtcategoria" aria-required="true" aria-invalid="false">
                                <option value="1">Leyes</option>
                                <option value="2">Deportes</option>
                                <option value="3">Municipal</option>
                                <option value="4">Nacional</option>
                                <option value="6">Cultura</option>
                                <option value="7">Social</option>
                                <option value="8">Efemérides</option>
                                <option value="9">Servicio-Público</option>
                                <option value="10">Salud</option>
                                <option value="11">Ambiente</option>
                                <option value="12">Seguridad</option>
                            </select> -->


                            <select style="background:white;" name="estados" class="btn btn-round" id="example-getting-started" multiple="multiple" aria-required="true" aria-invalid="false">
                                <?php
                                    $sql2="SELECT * FROM MFEmpresaInterna WHERE Proveedor!=''";
                                    $ejecutar2=sqlsrv_query($con, $sql2);
                                    while ($row = sqlsrv_fetch_array($ejecutar2, SQLSRV_FETCH_ASSOC)){	
                                ?>
                                    <option value="<?php echo $row['Proveedor_ID']; ?>"><?php echo utf8_encode($row['Name_Or_Title']); ?></option>
                                <?php } ?>
                                
                            </select>

                            <!-- <a href="#" class="btn btn-white btn-border btn-round mr-2">Manage</a>
                            <a href="#" class="btn btn-secondary btn-round">Add Customer</a> -->
                        </div>
                    </div>
                </div>
            </div>


            <div class="wrapper wrapper-content animated fadeInRight">


                <div class="row" style="margin-top: -13rem;">
                    <div class="col-lg-3">
                        <div class="widget style1 white-bg">
                            <div class="row">
                                <div class="col-8 text-left">
                                    <p class="titulo-card"> <b>ROJO</b></p>
                                    <h2 class="font-bold" id="TotalRojo">0</h2>
                                </div>
                                <div class="col-4 text-right">
                                    <i id="icon" class="dripicons dripicons-bell fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="widget style1 white-bg">
                            <div class="row">
                                <div class="col-8 text-left">
                                    <p class="titulo-card"> <b>NARANJA</b></p>
                                    <h2 class="font-bold" id="TotalNaranja">0</h2>
                                </div>
                                <div class="col-4 text-right">
                                    <i id="icon" class="dripicons dripicons-upload fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="widget style1 white-bg">
                            <div class="row">
                                <div class="col-8 text-left">
                                    <p class="titulo-card"> <b>AMARILLO</b></p>
                                    <h2 class="font-bold" id="TotalAmarillo">0</h2>
                                </div>
                                <div class="col-4 text-right">
                                    <i id="icon" class="dripicons dripicons-document fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="widget style1 white-bg">
                            <div class="row">
                                <div class="col-8 text-left">
                                    <p class="titulo-card"> <b>TOTAL ISSUES</b></p>
                                    <h2 class="font-bold" id="ConteoListasNegras">0</h2>
                                </div>
                                <div class="col-4 text-right">
                                    <i id="icon" class="dripicons dripicons-warning fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <br>
                <br>

                <div class="container-fluid">
                    <div class="row mt-5">
                        <!-- Start Total Proyectos -->
                        <div class="col-md-12">
                            <div class="ibox ">
                                <div class="ibox-title header">
                                    <h5>Issues</h5>
                                    <div class="float-right" style="margin-right: -80px;">
                                        <div class="">
                                
                                            <button type="button" class="btn btn-xs text-white"
                                                style="padding: 3px 20px; border-radius: 10px; background:#ed1c24;">Rojo</button>
                                            <button type="button" class="btn btn-xs text-dark"
                                                style="padding: 3px 20px; border-radius: 10px; background:#fff200;">Amarillo</button>
                                            <button type="button" class="btn btn-xs text-white"
                                                style="padding: 3px 20px; border-radius: 10px; background:#ff7f27;">Naranja</button>
                                            <button type="button" class="btn btn-xs text-white"
                                                style="padding: 3px 20px; border-radius: 10px; background:#3f48cc;">Azul</button>
                                            <button type="button" class="btn btn-xs text-white"
                                                style="padding: 3px 20px; border-radius: 10px; background:#808080;">All</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="ibox-content body-content">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <table id="Contratos" class="table table-hover no-margins">
                                                <thead>
                                                    <tr>
                                                        <th>RFC</th>
                                                        <th>Razón Social</th>
                                                        <th>Empresa Interna</th>                                                        
                                                        <th>Descripcioón ISSUE</th>                                                        
                                                        <th>Estatus</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
    </div>



    <!-- Mainly scripts -->
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="js/inspinia.js"></script>
    <script src="js/plugins/pace/pace.min.js"></script>


    <script src="js/table.js"></script>
    <script src="js/functiones.js"></script>

    <script src="js/plugins/dataTables/datatables.min.js"></script>
    <script src="js/plugins/dataTables/dataTables.bootstrap4.min.js"></script>

    <!-- Tinycon -->
    <script src="js/plugins/tinycon/tinycon.min.js"></script>

    <script src="js/Chart.min.js"></script>
    
    <script src="js/bootstrap-multiselect.min.js"></script>

    <script>

    function CargarProveedores(val) {        
        console.log(`array: ${val}`);
        var result = val;
        var formData = new FormData();
        formData.append("estados", result);
        $.ajax({
            url: "apirest/ConsultaEmpresaSeleccionada.php",
            type: "post",
            dataType: "json",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
        }).done(function (res) {
            alert(`Success ${JSON.stringify(res.data)}`)
        });

    }

    $(document).ready(function() {
        $('#example-getting-started').multiselect({
            enableFiltering: true,
            includeSelectAllOption: true,
            dropUp: true
        });
        $("#example-getting-started").on('change', function() {
            var val = $(this).val();
            // te muestra un array de todos los seleccionados
            // console.log(val);
            CargarProveedores(val);
            
        });
        TotalRojo();
        TotalNaranja();
        TotalAmarillo();
        Contratos();
        TotalContratos();
        TotalMonto();
        ConsultaGrafica();
        // ContadorDocumentosFaltantesAdmin();
        // ContadorFacturasAdmin();
        // datosEstadisticas2();
        // datosGraficaAnios();
        // listasNegrasP();
        // DatosFaltantesProvedor();
        // TotalOrdenes();
        // top5();
    });
    </script>


</body>

</html>