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

    <link href="css/plugins/datapicker/datepicker3.css" rel="stylesheet">
    <link href="css/plugins/daterangepicker/daterangepicker-bs3.css" rel="stylesheet">
    <link href="css/plugins/select2/select2.min.css" rel="stylesheet">
    <link href="css/plugins/toastr/toastr.min.css" rel="stylesheet">

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
                                    <i class="fa fa-sitemap"></i>
                                    <a style="color:white;" href="detallesContratos.php"> TOTAL PROVEEDORES </a>
                                </h4>                                
                            </div>
                        <div class="ml-md-auto py-2 py-md-0 mb-4">
                            <select style="background:white;" name="estados" class="btn btn-round" id="example-getting-started" multiple="multiple" aria-required="true" aria-invalid="false">
                                <?php
                                    $sql2="SELECT * FROM MFEmpresaInterna WHERE Proveedor!=''";
                                    $ejecutar2=sqlsrv_query($con, $sql2);
                                    while ($row = sqlsrv_fetch_array($ejecutar2, SQLSRV_FETCH_ASSOC)){  
                                ?>
                                    <option value="<?php echo $row['ObjID']; ?>"><?php echo $row['Name_Or_Title']; ?></option>
                                <?php } ?>
                                
                            </select>
                        </div>
                    </div>
                </div>
            </div>


            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="container-fluid">

                    <div class="row row-cols-5" style="margin-top: -13rem;">
                        <div class="col">
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
                        <div class="col">
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
                        <div class="col">
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
                        <div class="col">
                            <div class="widget style1 white-bg">
                                <div class="row">
                                    <div class="col-8 text-left">
                                        <p class="titulo-card"> <b>AZUL</b></p>
                                        <h2 class="font-bold" id="TotalAzul">0</h2>
                                    </div>
                                    <div class="col-4 text-right">
                                        <i id="icon" class="dripicons dripicons-document fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                        <div class="col">
                            <div class="widget style1 white-bg">
                                <div class="row">
                                    <div class="col-8 text-left">
                                        <p class="titulo-card"> <b>TOTAL PROVEEDORES</b></p>
                                        <h2 class="font-bold" id="TotalIssues">0</h2>
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


                    
                    <button 
                        id="botonBack"                         
                        class="btn btn-default btn-circle" 
                        type="button" 
                        style="
                        display: none;
                        margin-top: 10px;
                        margin-bottom: -30px;
                        background: #2f82eb;
                        color: white;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        font-size: 15px;
                        "
                    >
                        <i class="dripicons dripicons-arrow-left"></i>
                    </button>
                    


                    <div class="row gutters mt-5" id="ProveedorPrincipal">


                        <!-- <div style="display: none;">
                            <div class="col-lg-9 col-md-9 col-sm-12">
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12">
                                <div class="form-group" id="data_4">
                                    <label class="font-normal">Seleccionar mes</label>
                                    <div class="input-group date"
                                        style="box-shadow: 0 3px 10px rgb(0 0 0 / 20%);border:none;">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                                        <input autocomplete="off" type="text" class="form-control" id="FiltroMes"
                                            onchange="FiltroMes()" value="">
                                    </div>
                                </div>
                            </div>
                        </div>-->


                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="card empleadosCard">
                                <div class="card-header"
                                    style="height: 40px; border-bottom:none!important; border-radius: 20px 20px 0px 0px;">
                                    <h5 style="margin-top: -3px;">
                                        <i style="font-size: 17px;" class="fa fa-sitemap"></i> Proveedores
                                    </h5>
                                    <div class="float-right" style="margin-top:-27px;">                                        
                                    </div>
                                </div>
                                <div class="ibox-content table-content">
                                    <div class="table-responsive" id="tableProvedores">
                                        <table id="tablaDocumentosFaltantesProveedor"
                                            class="tableCustomize2 table table-hover ">

                                            <thead>
                                                <tr class="tr">
                                                    <th>Proveedor</th>
                                                    <th>RFC</th>
                                                    <th>N° Orden</th>
                                                    <!-- <th>N° Factura</th> -->
                                                    <th>Proyecto</th>
                                                    <th>Status</th>
                                                    <th>Moneda</th>
                                                    <th>Total</th>
                                                    <th>Severidad</th>
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
                                        
                                    

                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
                            <div class="card empleadosCard">
                                <div class="card-header"
                                    style="height: 40px; border-bottom:none!important; border-radius: 20px 20px 0px 0px;">
                                    <h5 style="margin-top: -3px;">
                                        <i style="font-size: 17px;" class="fa fa-sitemap"></i> Mono 
                                        <!-- <span style="cursor: pointer;" id="div-atras6">
                                            <i  class='fa fa-arrow-circle-left fa-2x mt--5' style='float: right;'
                                                data-toggle="tooltip" data-placement="top" title="Regresar">
                                            </i>
                                        </span>                                        -->
                                    </h5>
                                    <div class="float-right" style="margin-top:-27px;">                                        
                                    </div>
                                </div>
                                <div class="ibox-content table-content">
                                    <div class="table-responsive">
                                        <table id="mono" class="tableCustomize2 table table-hover ">
                                            <thead>
                                                <tr class="tr">
                                                    <th>Contratos</th>
                                                    <th>Empresa Interna</th>
                                                    <th>Proyectos</th>
                                                    <th>Orden de Compra Emitida</th>
                                                    <th>Entregables Recibido</th>                                                    
                                                </tr>
                                            </thead>

                                            <tbody >
                                             
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="card empleadosCard">
                                <div class="card-header"
                                    style="height: 40px; border-bottom:none!important; border-radius: 20px 20px 0px 0px;">
                                    <h5 style="margin-top: -5px;">
                                        <i style="font-size: 17px;" class="fa fa-user-o"></i>
                                        Poli
                                        <!-- <span style="cursor: pointer;" id="div-atras2">
                                            <i id="" class='fa fa-arrow-circle-left fa-2x mt--5' style='float: right;'
                                                data-toggle="tooltip" data-placement="top" title="Regresar">
                                            </i>
                                        </span> -->
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

    <!-- Custom and plugin javascript -->
    <script src="js/inspinia.js"></script>
    <script src="js/plugins/pace/pace.min.js"></script>

    <script src="js/table.js"></script>
    <script src="js/datosFaltantesProveedor.js"></script>
    <script src="js/functiones.js"></script>    

    <script src="js/plugins/dataTables/datatables.min.js"></script>
    <script src="js/plugins/dataTables/dataTables.bootstrap4.min.js"></script>

    <!-- Data picker -->
    <script src="js/plugins/datapicker/bootstrap-datepicker.js"></script>

    <!-- Date range picker -->
    <script src="js/plugins/daterangepicker/daterangepicker.js"></script>

    <!-- Select2 -->
    <script src="js/plugins/select2/select2.full.min.js"></script>
    <script src="js/plugins/toastr/toastr.min.js"></script>

    <script src="js/bootstrap-multiselect.min.js"></script>

    <script>        

        $("#botonBack").click(function() {            
            $("#ProveedorPrincipal").css('display', 'block');                        
            $("#ProveedorPage").css('display', 'none');

            $("#botonBack").css("display", "none");    
        });

        // $("#div-atras6").click(function() {
        //     $("#ProveedorPage").css('display', 'none');
        //     $("#ProveedorPrincipal").css('display', 'block');
        // });

        // $("#div-atras4").click(function() {
        //     $("#Cargar").css('display', 'none');
        //     $("#ProveedorPrincipal").css('display', 'block');
        // });
        // $("#div-atras5").click(function() {
        //     $("#CargarProveedores").css('display', 'none');
        //     $("#DivTbDtailP").css('display', 'block');
        //     $("#ProveedorPrincipal").css('display', 'block');
        // });

        function openProveedores2(){

            $("#ProveedorPage").css('display', 'none');
            $("#ProveedorPrincipal").css('display', 'block');

            $("#botonBack").css("display", "none");    

            var array = [];
            array = $('#example-getting-started').val();
            var id = JSON.stringify(array);
            // console.log(id);

            localStorage.setItem("Id", id);

        }

        function DatosFaltantesProvedor() {                         
          var data = JSON.parse(localStorage.getItem("Id"));          
          var id = "";
          if (localStorage.getItem("Id") === null) {
            id = "";
          } else {
            id = JSON.parse(localStorage.getItem("Id"));
          }

          console.log("Storage", id);

          $(document).ready(function () {
            var table = $("#tablaDocumentosFaltantesProveedor").DataTable({
              pageLength: 10,
              destroy: true,
              responsive: true,
              order: [[0, "desc"]],
              dom: '<"html5buttons"B>lTfgitp',
              ajax: {
                url: "./apirest/DatosFaltantesProvedor.php?id=" + id,
                type: "GET",
                // 'dataSrc':''
              },
              columns: [
                { data: "Name_Or_Tilte" },
                { data: "Rfc_Empresa" },
                { data: "Número_De_La_Orden_De_Compra" },
                // { data: "Número_De_La_Factura" },
                {
                  data: null,
                  render: function (data) {
                    var btnProjetTitle =
                      "<span class='badge tooltip_detalles' style='cursor: pointer;' data-info='" +
                      data.Project_Title +
                      "'>" +
                      data.Proyectos +
                      "</span>";
                    return "<center>" + btnProjetTitle + "</center>";
                  },
                },
                { data: "Estatus_Proveedor_Servicios_Especializados" },
                {
                  data: null,
                  render: function (data) {
                    var btnMoneda =
                      "<span class='badge badge-success' style='cursor: pointer;'>" + data.Moneda + "</span>";
                    return "<center>" + btnMoneda + "</center>";
                  },
                },
                { data: "Total01" },
                { data: "Severidad" },
                {
                  data: null,
                  render: function (data) {
                    var btnDucumentosFaltantesProveedorPivote =
                      "<button id ='" +
                      data.ID +
                      "' type='button' class='btn btn-success btn-circle btn-outline btn-sm d-inline docProveedorPivote tooltip_detalles' data-info='Mono y Poli del Proveedor'><i class='fa fa-bar-chart-o' style=''></i></button>";
                    return (
                      "<center>" + btnDucumentosFaltantesProveedorPivote + "</center>"
                    );
                  },
                },
              ],
              buttons: [
                {
                  extend: "copy",
                  copySuccess: {
                    1: "Copied one row to clipboard",
                    _: "Copied %d rows to clipboard",
                  },
                  copyTitle: "Copy to clipboard",
                  text: '<button style="color:white;" class="btn btn-xs btn-w-m btn-link" style="margin-right:0px!important" type="button"><i style="font-size:14px;" class="fa fa-files-o"></i> Copiar</button>',
                },
                {
                  extend: "excel",
                  title: "ExampleFile",
                  text: '<button style="color:white;" class="btn btn-xs btn-w-m btn-link" style="margin-right:0px!important" type="button"><i style="font-size:14px;" class="fa fa-file-excel-o"></i> Tabla Excel</button>',
                },
                {
                  extend: "pdf",
                  title: "ExampleFile",
                  text: '<button style="color:white;" class="btn btn-xs btn-w-m btn-link" style="margin-right:0px!important" type="button"><i style="font-size:14px;" class="fa fa-file-pdf-o"></i> Documento PDF</button>',
                },
              ],
              language: idioma,
            });

            obtenerDatosFaltantesProvedor(
              "#tablaDocumentosFaltantesProveedor tbody",
              table
            );
          });
        }                
    
        $(document).ready(function() {

            // setTimeout(() => {
            //     $('[data-toggle="tooltip"]').tooltip();
            // }, 500);

            $('#data_4 .input-group.date').datepicker({
                minViewMode: 1,
                keyboardNavigation: false,
                forceParse: false,
                forceParse: false,
                autoclose: true,
                todayHighlight: true
            });        
        
            TotalRojo();
            TotalNaranja();
            TotalAmarillo();
            TotalAzul();
            TotalIssues();

            DatosFaltantesProvedor();

            $('#example-getting-started').multiselect({
                enableFiltering: true,
                includeSelectAllOption: true,
                dropUp: true
            });
            $("#example-getting-started").on('change', function() {
                var val = $(this).val();
                // console.log(val);  

                $('#issue-1').val(val);
                $('#issue-2').val(val);
                $('#issue-3').val(val);
                $('#issue-4').val(val);
                $('#issue-5').val(val);
                        
                SelectTotalRojo(val);
                SelectTotalNaranja(val);
                SelectTotalAmarillo(val);
                SelectTotalAzul(val);
                SelectTotalIssues(val);
                openProveedores2();
                DatosFaltantesProvedor();
                
                $('#TotalRojo').html("");
                $('#TotalNaranja').html("");
                $('#TotalAmarillo').html("");
                $('#TotalAzul').html("");
                $('#TotalIssues').html("");

            });
        })
        
    </script>

</body>

</html>