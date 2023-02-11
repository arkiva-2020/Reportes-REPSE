$(document).ready(function() {
        TotalRojo();
        TotalNaranja();
        TotalAmarillo();
        TotalAzul();
        TotalIssues();
        top5();
        Contratos();
        TotalContratos();
        // TotalMonto();
        // TotalTrabajadores();
        ConsultaGrafica();        
    $('#example-getting-started').multiselect({
        enableFiltering: true,
        includeSelectAllOption: true,
        dropUp: true
    });


    $('#FiltroRojo').click(function(){
      FiltroRojo();            
    });   

    $('#FiltroNaranja').click(function(){
      FiltroNaranja();            
    });

    $('#FiltroAmarillo').click(function(){
      FiltroAmarillo();            
    });

    $('#FiltroAzul').click(function(){
      FiltroAzul();            
    });

    $('#FiltroAll').click(function(){
      FiltroAll();            
    });

    $("#example-getting-started").on('change', function() {
        var val = $(this).val();                

        $('#issue-1').val(val);
        $('#issue-2').val(val);
        $('#issue-3').val(val);
        $('#issue-4').val(val);
        $('#issue-5').val(val);

        

        // CargarProveedores(val);
        SelectTotalRojo(val);
        SelectTotalNaranja(val);
        SelectTotalAmarillo(val);
        SelectTotalAzul(val);
        SelectTotalIssues(val);

        // SelectConsultaGrafica(val);
        SelectConsultaGrafica();
        SelectConsultaTop5(val);
        SelectTotalContratos(val);
        // SelectTotalMonto(val);
        SelectTotalTrabajadores(val)

        // Contratos
        SelectConsultaContratos(val);
        $('#Contratos').DataTable().destroy();
        
        $('#top5').DataTable().destroy();

        $('#barChart').remove();
        $('#ContainerchartBar').append('<canvas id="barChart"></canvas>');
        
        
        $('#TotalRojo').html("");
        $('#TotalNaranja').html("");
        $('#TotalAmarillo').html("");
        $('#TotalAzul').html("");
        $('#TotalIssues').html("");

        $('#TotalContratos').html("");
        $('#TotalMonto').html("");
        $('#TotalTrabajadores').html("");
        
    });
})

$(function () {
  $('[data-tooltip="tooltip"]').tooltip();
  $('[data-toggle="tooltip"]').toggle();
});

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

function top5() {
  $(document).ready(function () {
    $("#top5").DataTable({
      // responsive: true,
      order: [[0, "desc"]],
      bPaginate: false,
      bFilter: false,
      bInfo: false,
      // pageLength: 10,
      // dom: '<"html5buttons"B>lTfgitp',
      ajax: {
        url: "./apirest/ConsultaTop5.php",
        type: "GET",
        // 'dataSrc':''
      },
      columns: [
        { data: "NombreEmpresa" },
        { data: "NombreProveedor" },
        { data: "TotalTrabajadores" },
        { data: "Monto" },
      ],
      language: idioma,
    });
  });
}
function SelectConsultaTop5(val) {
  var data = val;
  // console.log(data);
   $(document).ready(function () {
     $("#top5").DataTable({
       responsive: true,
       order: [[0, "desc"]],
       bPaginate: false,
       bFilter: false,
       bInfo: false,
       // pageLength: 10,
       // dom: '<"html5buttons"B>lTfgitp',
       ajax: {
         url: "./apirest/SeleccionConsultaTop5.php?estados=" + data,
         type: "GET",
         // 'dataSrc':''
       },
       columns: [
         { data: "NombreEmpresa" },
         { data: "NombreProveedor" },
         { data: "TotalTrabajadores" },
         { data: "Monto" },
       ],
       language: idioma,
     });
   });
}

function Contratos() {
  $(document).ready(function () {
    $("#Contratos").DataTable({
      responsive: true,
      order: [[0, "desc"]],
      bPaginate: false,
      bFilter: false,
      bInfo: false,
      // pageLength: 10,
      // dom: '<"html5buttons"B>lTfgitp',
      ajax: {
        url: "./apirest/ConsultaTop5.php",
        type: "GET",
        // 'dataSrc':''
      },
      columns: [
        { data: "NombreEmpresa" },
        { data: "NombreProveedor" },
        { data: "TotalTrabajadores" },
        { data: "Monto" },
        {
          data: null,
          render: function (data) {
            var status = "";
            if (data.NombreProveedor == "AT&T Comercialización Móvil, S. de RL de CV") {
              status =
                "<center><div class='btn btn-xs text-white' style='padding: 3px 20px; border-radius: 10px; background:#ed1c24;'>Rojo</div>";
            } else if (data.NombreProveedor == "AOC México, S.A. de C.V.") {
              status =
                "<center><span class='btn btn-xs text-white' style='padding: 3px 20px; border-radius: 10px; background:#3f48cc;'>Azul</span></center>";
            } else if (data.NombreProveedor == "JUNIOR FOODS SA DE CV"){
              status =
                "<center><span class='btn btn-xs text-white' style='padding: 3px 20px; border-radius: 10px; background:#fff200;'>Amarillo</span></center>";
            }
            return status;
          },
        },
      ],
      language: idioma,
    });
  });
}
function SelectConsultaContratos(val) {
  var data = val;
  // console.log(data);
   $(document).ready(function () {
     $("#Contratos").DataTable({
       responsive: true,
       order: [[0, "desc"]],
       bPaginate: false,
       bFilter: false,
       bInfo: false,
       // pageLength: 10,
       // dom: '<"html5buttons"B>lTfgitp',
       ajax: {
         url: "./apirest/SeleccionConsultaTop5.php?estados=" + data,
         type: "GET",
         // 'dataSrc':''
       },
       columns: [
         { data: "NombreEmpresa" },
         { data: "NombreProveedor" },
         { data: "TotalTrabajadores" },
         { data: "Monto" },
         {
          data: null,
          render: function (data) {
            var status = "";
            if (data.NombreProveedor == "AT&T Comercialización Móvil, S. de RL de CV") {
              status =
                "<center><div class='btn btn-xs text-white' style='padding: 3px 20px; border-radius: 10px; background:#ed1c24;'>Rojo</div>";
            } else if (data.NombreProveedor == "AOC México, S.A. de C.V.") {
              status =
                "<center><span class='btn btn-xs text-white' style='padding: 3px 20px; border-radius: 10px; background:#3f48cc;'>Azul</span></center>";
            } else if (data.NombreProveedor == "JUNIOR FOODS SA DE CV"){
              status =
                "<center><span class='btn btn-xs text-white' style='padding: 3px 20px; border-radius: 10px; background:#fff200;'>Amarillo</span></center>";
            }
            return status;
          },
        },
       ],
       language: idioma,
     });
   });
}



var idioma = {
  sProcessing: "Procesando...",
  sLengthMenu: "Mostrar _MENU_ registros",
  sZeroRecords: "No se encontraron resultados",
  sEmptyTable: "Ningún dato disponible en esta tabla",
  sInfo:
    "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
  sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
  sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
  sInfoPostFix: "",
  sSearch: "Buscar:",
  searchPlaceholder: "Search..",
  sUrl: "",
  sInfoThousands: ",",
  sLoadingRecords: "Cargando...",
  oPaginate: {
    sFirst: "Primero",
    sLast: "Último",
    sNext: "Siguiente",
    sPrevious: "Anterior",
  },
  oAria: {
    sSortAscending: ": Activar para ordenar la columna de manera ascendente",
    sSortDescending: ": Activar para ordenar la columna de manera descendente",
  },
  buttons: {
    create: "Nuevo",
    edit: "Cambiar",
    remove: "Borrar",
    copy: "Copiar",
    csv: "Fichero CSV",
    excel: "Tabla Excel",
    pdf: "Documento PDF",
    print: "Imprimir",
    colvis: "Visibilidad columnas",
    collection: "Colección",
    upload: "Seleccione fichero....",
  },
};
