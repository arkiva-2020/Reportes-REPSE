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
                                    <i class="fa fa-sitemap"></i>
                                    <a style="color:white;" href="DatosFaltantesProveedor.php"> TOTAL PROVEEDORES </a>
                                </h4>
                            </div>
                        <div class="ml-md-auto py-2 py-md-0 mb-4">
                            <!-- <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"> -->

                            <select style="background:white;" name="estados" class="btn btn-round" id="example-getting-started" multiple="multiple" aria-required="true" aria-invalid="false">
                                <?php
                                    $sql2="SELECT * FROM MFEmpresaInterna WHERE Proveedor!=''";
                                    $ejecutar2=sqlsrv_query($con, $sql2);
                                    while ($row = sqlsrv_fetch_array($ejecutar2, SQLSRV_FETCH_ASSOC)){	
                                ?>
                                    <option value="<?php echo $row['ObjID']; ?>"><?php echo utf8_encode($row['Name_Or_Title']); ?></option>
                                <?php } ?>
                                
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wrapper wrapper-content animated fadeInRight">

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

                <div class="container-fluid">
                    <div class="row mt-5">
                        <!-- Start Total Proyectos -->
                        <div class="col-md-12">
                            <div class="ibox ">
                                <div class="ibox-title header">
                                    <h5>Proveedores</h5>
                                    <div class="float-right" style="margin-right: -80px;">
                                        <div class="">
                                            <form action="detallesProveedores.php" method="POST">
                                                <button id="issue-1" name="id" value="" type="submit"
                                                    class="btn btn-xs text-white"
                                                    style="padding: 3px 20px; border-radius: 10px; background:#ed1c24;">Rojo
                                                </button>                                                
                                                <button id="issue-3" name="id" value="" type="submit"
                                                    class="btn btn-xs text-white"
                                                    style="padding: 3px 20px; border-radius: 10px; background:#ff7f27;">Naranja
                                                </button>
                                                <button id="issue-2" name="id" value="" type="submit"
                                                    class="btn btn-xs text-dark"
                                                    style="padding: 3px 20px; border-radius: 10px; background:#fff200;">Amarillo
                                                </button>
                                                <button id="issue-4" name="id" value="" type="submit"
                                                    class="btn btn-xs text-white"
                                                    style="padding: 3px 20px; border-radius: 10px; background:#3f48cc;">Azul
                                                </button>
                                                <button id="issue-5" name="id" value="" type="submit"
                                                    class="btn btn-xs text-white"
                                                    style="padding: 3px 20px; border-radius: 10px; background:#808080;">All
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="ibox-content body-content">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <table id="issue" class="table table-hover no-margins">
                                                <thead>
                                                    <tr>
                                                        <th width="20%">RFC</th>
                                                        <th width="20%">Razón Social</th>
                                                        <th width="20%">Empresa Interna</th>                                                        
                                                        <th width="30%">Descripcioón ISSUE</th>                                                        
                                                        <!-- <th>Estatus</th> -->
                                                    </tr>
                                                </thead>
                                                <tbody>

                                            <?php 
                                                if ($_POST['id'] == '' ) {
                                                $sqlAll="EXECUTE ConsultaIssuesAll";
                                                $ejecutarAll=sqlsrv_query($con, $sqlAll);
                                                    while ($issueAll = sqlsrv_fetch_array($ejecutarAll, SQLSRV_FETCH_NUMERIC)) {   
                                            ?>
                                                    <tr>
                                                        <td><?php echo $issueAll[0]; ?></td>
                                                        <td><?php echo $issueAll[1]; ?></td>
                                                        <td><?php echo $issueAll[2]; ?></td>
                                                        <td><?php echo $issueAll[3]; ?></td>
                                                    </tr>
                                            <?php
                                                    }
                                                } else {
                                            
                                                    $id=$_POST['id'];
                                                    @$p="',' ";
                                                    @$sql = "{call ConsultaIssues(?,?)}";  
                                            
                                                    $params = array(  
                                                        array($id),
                                                        array($p)
                                                    );   
                                                    $ejecutar=sqlsrv_query($con, $sql, $params);
                                                    while ($issue = sqlsrv_fetch_array($ejecutar, SQLSRV_FETCH_NUMERIC)) {   
    
                                            ?>
                                                    <tr>
                                                        <td><?php echo $issue[0]; ?></td>
                                                        <td><?php echo $issue[1]; ?></td>
                                                        <td><?php echo $issue[2]; ?></td>
                                                        <td><?php echo $issue[3]; ?></td>
                                                    </tr>

                                            <?php } 
                                            } 
                                            ?>
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
    <!-- <script src="js/new-table.js"></script> -->
    <script src="js/detallesProveedores.js"></script>
    <!-- <script src="js/functiones.js"></script> -->

    <script src="js/plugins/dataTables/datatables.min.js"></script>
    <script src="js/plugins/dataTables/dataTables.bootstrap4.min.js"></script>

    <!-- Tinycon -->
    <script src="js/plugins/tinycon/tinycon.min.js"></script>

    <script src="js/Chart.min.js"></script>
    
    <script src="js/bootstrap-multiselect.min.js"></script>

    <?php
    if ($_POST['id'] == '') {
    ?>
    <script>
        $(document).ready(function() {
            TotalRojo();
            TotalNaranja();
            TotalAmarillo();
            TotalAzul();
            TotalIssues();
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
                
            });
            $('#issue').DataTable();
        });
    </script>
    <?php
    } else {
    ?>
        <script>
        $(document).ready(function() {
            
                $('#issue').DataTable();

                // console.log("<?php echo $_POST['id']; ?>");

                SelectTotalRojo(<?php echo $_POST['id']; ?>);
                SelectTotalNaranja(<?php echo $_POST['id']; ?>);
                SelectTotalAmarillo(<?php echo $_POST['id']; ?>);
                SelectTotalAzul(<?php echo $_POST['id']; ?>);
                SelectTotalIssues(<?php echo $_POST['id']; ?>);
                
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
                    
                });
         
        });
        </script>
    <?php
    }
    ?>

</body>

</html>