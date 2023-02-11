$(document).ready(function() {

        TotalRojo();
        TotalNaranja();
        TotalAmarillo();
        TotalAzul();
        TotalIssues();
        ConsultaContratos();     
    
    $('#example-getting-started').multiselect({
        enableFiltering: true,
        includeSelectAllOption: true,
        dropUp: true
    });
    $("#example-getting-started").on('change', function() {
        var val = $(this).val();
        // console.log(val);  
        
        ConsultaContratosSelect(val);        

        // CargarProveedores(val);
        SelectTotalRojo(val);
        SelectTotalNaranja(val);
        SelectTotalAmarillo(val);
        SelectTotalAzul(val);
        SelectTotalIssues(val);

        $('#issue').DataTable().destroy();
        
        $('#TotalRojo').html("");
        $('#TotalNaranja').html("");
        $('#TotalAmarillo').html("");
        $('#TotalAzul').html("");
        $('#TotalIssues').html("");

        
    });
})

////////////////////// START TOTAL ROJO /////////////////// 
function TotalRojo() {
    $.ajax({
      url: "apirest/CardRojo.php",
      type: "post",
      dataType: "json",
      //   data: formData,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (res) {
      // console.log(res)
      $("#TotalRojo").html(res.data[0].TotalRojo);
    });
  }
  function SelectTotalRojo(val) {
    var data = val;
    var p = "\','\ ";
    $.ajax({
      url: "apirest/SelectCardRojo.php?estados=" + data + "&split=" + p,
      type: "post",
      dataType: "json",
      //   data: formData,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (res) {
      // console.log(res)
      $("#TotalRojo").html(res.data[0].TotalRojo);
    });
  }
  ////////////////////// END TOTAL ROJO ///////////////////
  
  
  ////////////////////// START TOTAL NARANJA /////////////////// 
  function TotalNaranja() {
    $.ajax({
      url: "apirest/CardNaranja.php",
      type: "post",
      dataType: "json",
      //   data: formData,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (res) {
      // console.log(res)
      $("#TotalNaranja").html(res.data[0].TotalNaranja);
    });
  }
  function SelectTotalNaranja(val) {
    var data = val;
    var p = "\','\ ";
    $.ajax({
      url: "apirest/SelectCardNaranja.php?estados=" + data + "&split=" + p,
      type: "post",
      dataType: "json",
      //   data: formData,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (res) {
      // console.log(res)
      $("#TotalNaranja").html(res.data[0].TotalNaranja);
    });
  }
  ////////////////////// END TOTAL NARANJA ///////////////////
  
  
  
  ////////////////////// START TOTAL AMARILLO /////////////////// 
  function TotalAmarillo() {
    $.ajax({
      url: "apirest/CardAmarillo.php",
      type: "post",
      dataType: "json",
      //   data: formData,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (res) {
      // console.log(res)
      $("#TotalAmarillo").html(res.data[0].TotalAmarillo);
    });
  }
  function SelectTotalAmarillo(val) {
    var data = val;
    var p = "\','\ ";
    $.ajax({
      url: "apirest/SelectCardAmarillo.php?estados=" + data + "&split=" + p,
      type: "post",
      dataType: "json",
      //   data: formData,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (res) {
      // console.log(res)
      $("#TotalAmarillo").html(res.data[0].TotalAmarillo);
    });
  }
  ////////////////////// END TOTAL AMARILLO ///////////////////
  
  
  
  ////////////////////// START TOTAL ISSUES /////////////////// 
  function TotalIssues() {
    $.ajax({
      url: "apirest/CardIssues.php",
      type: "post",
      dataType: "json",
      //   data: formData,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (res) {
      // console.log(res)
      $("#TotalIssues").html(res.data[0].TotalIssues);
    });
  }
  function SelectTotalIssues(val) {
    var data = val;
    var p = "\','\ ";
    $.ajax({
      url: "apirest/SelectCardIssues.php?estados=" + data + "&split=" + p,
      type: "post",
      dataType: "json",
      //   data: formData,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (res) {
      // console.log(res)
      $("#TotalIssues").html(res.data[0].TotalIssues);
    });
  }
  ////////////////////// END TOTAL ISSUES ///////////////////

  function SelectTableIssues(val) {
    var data = val;
    // var p = "\','\ ";
    
    $(document).ready(function () {
        $("#issue").DataTable({
          responsive: true,
          order: [[0, "desc"]],
          bPaginate: false,
          bFilter: false,
          bInfo: false,
          // pageLength: 10,
          // dom: '<"html5buttons"B>lTfgitp',
          ajax: {
            url: "./apirest/SelectTableIssues.php?id=" + data,
            type: "post",
            // 'dataSrc':''
          },
          columns: [
            { data: "Rfc_Empresa" },
            { data: "Nombreproveedor" },
            { data: "Nombreempresa" },
            { data: "Descripcion" },
          ],
          language: idioma,
        });
      });

  }

  ////////////////////// START TOTAL AMARILLO /////////////////// 
function TotalAzul() {
  $.ajax({
    url: "apirest/CardAzul.php",
    type: "post",
    dataType: "json",
    //   data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    // console.log(res)
    $("#TotalAzul").html(res.data[0].TotalAzul);
  });
}
function SelectTotalAzul(val) {
  var data = val;
  var p = "\','\ ";
  $.ajax({
    url: "apirest/SelectCardAzul.php?estados=" + data + "&split=" + p,
    type: "post",
    dataType: "json",
    //   data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    // console.log(res)
    $("#TotalAzul").html(res.data[0].TotalAzul);
  });
}
////////////////////// END TOTAL AMARILLO ///////////////////



function ConsultaContratos() {
  $(document).ready(function () {
    $("#ConsultaContratos").DataTable({      
      order: [[0, "desc"]],      
      destroy: true,
      pageLength: 10,      
      responsive: true,      
      dom: '<"html5buttons"B>lTfgitp',      
      ajax: {
        url: "./apirest/ConsultaContratos.php",
        type: "post",
        // 'dataSrc':''
      },
      columns: [
        { data: "Contratos" },
        { data: "NombreProveedor" },
        { data: "NombreEmpresa" },
        { data: "Proyecto" },        
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

function ConsultaContratosSelect(val) {

  var data = val;

  $(document).ready(function () {
    $("#ConsultaContratos").DataTable({      
      order: [[0, "desc"]],
      destroy: true,      
      pageLength: 10,      
      responsive: true,      
      dom: '<"html5buttons"B>lTfgitp',      
      ajax: {
        url: "./apirest/ConsultaContratosSelect.php?id=" + data,
        type: "GET",                       
      },
      columns: [
        { data: "Contratos" },
        { data: "NombreProveedor" },
        { data: "NombreEmpresa" },
        { data: "Proyecto" },        
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