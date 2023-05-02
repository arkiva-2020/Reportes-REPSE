function ConsultaTablaMono(idEmpresa, idProveedor) {            
    var Empresa = idEmpresa;    
    var Proveedor = idProveedor;    

    $(document).ready(function () {
        $("#mono").DataTable({
        order: [[0, "desc"]],           
        destroy: true,
        pageLength: 10,
        responsive: true,                   
        scrollY: '200px',
        scrollCollapse: true,                
        dom: '<"html5buttons"B>lTfgitp',
        ajax: {
            url: "./apirest/ConsultaTablaMono.php?idEmpresa=" + Empresa+"&idProveedor=" + Proveedor,
            type: "GET",            
        },
        columns: [
            { data: "Contrato" },
            { data: "nombreEmpresa" },                    
            { data: "proyecto" },
            {data: null,
                render: function (data) {
                    var orden = "";
                    if (data.Ordenes_De_Compras_Emitidas) {
                    orden =
                        "<center><div class='' style=''>"+data.Ordenes_De_Compras_Emitidas+"</div>";
                    } else {
                    orden =
                        "<center>"+
                            "<form id='OrderDeCompraForm'>"+
                                "<input type='file' id='OrderCompra' style='display:none' onChange='subirOrderCompra("+data.ID+")'> "+
                                "<span class='btn btn-danger btn-circle btn-outline' onclick='fun1()'>"+
                                    "<i class='fa fa-cloud-upload'></i>"+
                                "</span>"+                            
                            "</form>"+
                        "</center>";
                    }
                    return orden;
                },
            },
            {data: null,
                render: function (data) {
                    var entregables = "";
                    if (data.entregables_recibidos) {
                    entregables =
                        "<center><div class='' style=''>"+data.entregables_recibidos+"</div>";
                    } else {
                    entregables =
                        "<center>"+
                            "<form id='EntregablesForm'>"+
                                "<input type='file' id='entregables' style='display:none' onChange='subirEntregables("+data.ID+")'> "+
                                    "<span class='btn btn-danger btn-circle btn-outline' onclick='fun2()'>"+
                                        "<i class='fa fa-cloud-upload'></i>"+
                                    "</span>"+     
                            "</form>"+                       
                        "</center>";
                    }
                    return entregables;
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
    });
}

function fun1(){    
    $("#OrderCompra").click();
}

function subirOrderCompra(id){ 
    $(".loading").show();
    var formData = new FormData(document.getElementById("OrderDeCompraForm"));  
    var base = document.getElementById("OrderCompra");       
    var pdf = base.files[0];    

    formData.append("id", id);
    formData.append("pdf", pdf);        
    $.ajax({
        url: "apirest/InsertarOrdenCompra.php",
        type: "POST",  
        dataType:"json",      
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    }).done(function (res) {
        $(".loading").hide();
        if (res==1) {            
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: "slideDown",
                    timeOut: 8000,
                };
                toastr.success("Documento Subido Correctamente.", "Éxito!");                
                $("#mono").DataTable().ajax.reload();
        } else {
            toastr.options = {
                closeButton: true,
                progressBar: true,
                showMethod: "slideDown",
                timeOut: 8000,
              };
              toastr.error("Ocurrio un error ineperado.", "Error!");      
        }       
                
    });

    
}



function fun2(){    
    $("#entregables").click();
}

function subirEntregables(id){ 
    $(".loading").show();
    var formData = new FormData(document.getElementById("EntregablesForm"));  
    var base = document.getElementById("entregables");       
    var pdf = base.files[0];    

    formData.append("id", id);
    formData.append("pdf", pdf);     
    $.ajax({
        url: "apirest/InsertarEntregables.php",
        type: "POST",  
        dataType:"html",      
        data: formData,        
        cache: false,
        contentType: false,
        processData: false
    }).done(function (res) {
        $(".loading").hide();
        if (res==1) {            
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: "slideDown",
                    timeOut: 8000,
                };
                toastr.success("Documento Subido Correctamente.", "Éxito!");                
                $("#mono").DataTable().ajax.reload();
        } else {
            toastr.options = {
                closeButton: true,
                progressBar: true,
                showMethod: "slideDown",
                timeOut: 8000,
              };
              toastr.error("Ocurrio un error ineperado.", "Error!");      
        }    
                
    });

    
}
