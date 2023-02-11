<?php

?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Repse | Cliente</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="css/plugins/dataTables/datatables.min.css" rel="stylesheet">

    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">

    <link href="css/plugins/datapicker/datepicker3.css" rel="stylesheet">
    <link href="css/plugins/daterangepicker/daterangepicker-bs3.css" rel="stylesheet">
    <link href="css/plugins/select2/select2.min.css" rel="stylesheet">

</head>

<body class="top-navigation">

    <div id="wrapper">



        <div id="page-wrapper" class="personalizado-bg">

            <div class="panel-header bg-primary-gradient">
                <div class="page-inner">
                    <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div class="ml-md-auto py-2 mb-4 menu">
                            <h4 class="text-white op-7 mb-2 d-inline p-2 "><i class="fa fa-home"></i><a
                                    style="color:white;" href="#"> Dashboard</a></h4>
                        </div>
                        <div class="ml-md-auto py-2 py-md-0 mb-4">
                        </div>
                    </div>
                </div>
            </div>


            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="container-fluid">

                    <div class="row" style="margin-top: -13rem;">
                        <div class="col-lg-4">
                            <div class="widget style1 white-bg">
                                <div class="row">
                                    <div class="col-8 text-left">
                                        <p class="titulo-card"> Documentos Faltantes </p>
                                        <h2 class="font-bold" id="DocumentosFaltantesClientes">0</h2>
                                    </div>
                                    <div class="col-4 text-right">
                                        <i id="icon" class="dripicons dripicons-upload fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="widget style1 white-bg">
                                <div class="row">
                                    <div class="col-8 text-left">
                                        <p class="titulo-card"> Documentos Vencidos </p>
                                        <h2 class="font-bold">6</h2>
                                    </div>
                                    <div class="col-4 text-right">
                                        <i id="icon" class="dripicons dripicons-document fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="widget style1 white-bg">
                                <div class="row">
                                    <div class="col-8 text-left">
                                        <p class="titulo-card"> Facturas Proveedor</p>
                                        <h2 class="font-bold" id="ContadorFacturasClientes">0</h2>
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


                    <div class="row gutters mt-5" id="ProveedorPrincipal">

                        <div class="col-lg-9">
                        </div>

                        <div class="col-lg-3">
                            <div class="form-group" id="data_4">
                                <label class="font-normal">Seleccionar mes</label>
                                <div class="input-group date"
                                    style="box-shadow: 0 3px 10px rgb(0 0 0 / 20%);border:none;">
                                    <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                                    <input autocomplete="off" type="text" class="form-control" id="FiltroMes"
                                        onchange="FiltroMesCliente()" value="">
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="card empleadosCard">
                                <div class="card-header"
                                    style="height: 40px; border-bottom:none!important; border-radius: 20px 20px 0px 0px;">
                                    <h5 style="margin-top: -3px;">
                                        <i style="font-size: 17px;" class="fa fa-sitemap"></i> Proveedor
                                    </h5>

                                </div>
                                <div class="ibox-content table-content">
                                    <div class="table-responsive" id="tableProvedores">
                                        <table id="tablaDocumentosFaltantesProveedor"
                                            class="tableCustomize2 table table-hover ">

                                            <thead>
                                                <tr class="tr">
                                                    <th width="20%">Proveedor</th>
                                                    <th>RFC</th>
                                                    <th>N° Orden</th>
                                                    <th>N° Factura</th>
                                                    <th>Proyecto</th>
                                                    <th>Status</th>
                                                    <th>Moneda</th>
                                                    <th>Total</th>
                                                    <th>Opciones</th>
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

                    <!-- Start TablaPivote -->
                    <div class="row mt-5" id="ProveedorPage" style="display: none;">


                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="card empleadosCard">
                                <div class="card-header"
                                    style="height: 40px; border-bottom:none!important; border-radius: 20px 20px 0px 0px;">
                                    <h5 style="margin-top: -5px;"><i style="font-size: 17px;" class="fa fa-user-o"></i>
                                        Detalles empleados<span style="cursor: pointer;" id="div-atras2"><i
                                                class='fa fa-arrow-circle-left fa-2x mt--5' style='float: right;'
                                                data-toggle="tooltip" data-placement="top" title="Regresar"></i></span>
                                    </h5>
                                </div>
                                <div class="ibox-content table-content">
                                    <div class="table-responsive" id="DivTbDtailP">
                                        <table id="tablaDocumentosFaltantesTrabajadores"
                                            class="tableCustomize2 table-bordered table-hover cell-border">

                                            <thead id="CabeceraTabla">
                                            </thead>

                                            <tbody id="tbody-detalle-documentos">
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <!-- End TablaPivote -->

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

    <script src="js/plugins/dataTables/datatables.min.js"></script>
    <script src="js/plugins/dataTables/dataTables.bootstrap4.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="js/inspinia.js"></script>
    <script src="js/plugins/pace/pace.min.js"></script>
    <script src="js/tableEmploye.js"></script>
    <script src="js/functiones.js"></script>

    <!-- Data picker -->
    <script src="js/plugins/datapicker/bootstrap-datepicker.js"></script>

    <!-- Date range picker -->
    <script src="js/plugins/daterangepicker/daterangepicker.js"></script>

    <!-- Select2 -->
    <script src="js/plugins/select2/select2.full.min.js"></script>

    <script>
    $("#div-atras2").click(function() {
        $("#ProveedorPage").css('display', 'none');
        $("#ProveedorPrincipal").css('display', 'block');
    });
    $("#div-atras3").click(function() {
        $("#Proveedor").css('display', 'none');
        $("#ProveedorPrincipal").css('display', 'block');
    });
    $("#div-atras4").click(function() {
        $("#Cargar").css('display', 'none');
        $("#ProveedorPrincipal").css('display', 'block');
    });
    $("#div-atras5").click(function() {
        $("#CargarProveedores").css('display', 'none');
        $("#DivTbDtailP").css('display', 'block');
        $("#ProveedorPrincipal").css('display', 'block');
    });
    $(document).ready(function() {

        $('#data_4 .input-group.date').datepicker({
            minViewMode: 1,
            keyboardNavigation: false,
            forceParse: false,
            forceParse: false,
            autoclose: true,
            todayHighlight: true
        });

        ContadorDocumentosFaltantesClientes();
        ContadorFacturasClientes();
        datosEstadisticas2();

        ContadorDocumentosFaltantesAdmin();
        ContadorFacturasAdmin();
        datosEstadisticas2();
        DatosFaltantesProvedor();
        // DatosFaltantesProvedorCliente();                  

        setTimeout(() => {
            $('[data-toggle="tooltip"]').tooltip();
            // $('[data-toggle="tooltip"]').tooltip(); 
        }, 500);
    });
    </script>

</body>

</html>