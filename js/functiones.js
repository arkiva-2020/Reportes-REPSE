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



////////////////////// START TOTAL CONTRATOS /////////////////// 
function TotalContratos() {
  $("#contenidoFiltros").css("display", "none");  
  $("#cargando2").css("display", "block");  
  $.ajax({
    url: "apirest/ConsultaTotalContratos.php",
    type: "post",
    dataType: "json",
    //   data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    $("#cargando2").css("display", "none");
    $("#contenidoFiltros").css("display", "block");  
    // console.log(res)
    $("#TotalContratos").html(res.data[0].TotalContratos);    
    $("#TotalMonto").html(res.data[0].TotalMonto);
    $("#TotalTrabajadores").html(res.data[1].TotalTrabajadores);
  });
}
function SelectTotalContratos(val) {
  $("#contenidoFiltros").css("display", "none");  
  $("#cargando2").css("display", "block");  
  var data = val;
  // console.log(data);
  $.ajax({
    url: "apirest/SeleccionConsultaTotalContratos.php?estados=" + data,
    type: "post",
    dataType: "json",
    //   data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    $("#cargando2").css("display", "none");
    $("#contenidoFiltros").css("display", "block");  
    // console.log(res)
    $("#TotalContratos").html(res.data[0].TotalContratos);
    $("#TotalMonto").html(res.data[0].TotalMonto);
    $("#TotalTrabajadores").html(res.data[1].TotalTrabajadores);
  });
}
////////////////////// END TOTAL CONTRATOS ///////////////////




////////////////////// START TOTAL MONTO /////////////////// 
// function TotalMonto() {
//   $.ajax({
//     url: "apirest/ConsultaTotalMonto.php",
//     type: "post",
//     dataType: "json",
//     //   data: formData,
//     cache: false,
//     contentType: false,
//     processData: false,
//   }).done(function (res) {
//     // console.log(res)
//     $("#TotalMonto").html(res.data[0].TotalMonto);
//   });
// }
// function SelectTotalMonto(val) {
//   var data = val;
//   // console.log(data);
//   $.ajax({
//     url: "apirest/SeleccionConsultaTotalMonto.php?estados=" + data,
//     type: "post",
//     dataType: "json",
//     //   data: formData,
//     cache: false,
//     contentType: false,
//     processData: false,
//   }).done(function (res) {
//     // console.log(res)
//     $("#TotalMonto").html(res.data[0].TotalMonto);
//   });
// }
////////////////////// END TOTAL MONTO ///////////////////



////////////////////// START TOTAL TRABAJADORES /////////////////// 
// function TotalTrabajadores() {
//   $("#contenidoFiltros").css("display", "none");  
//   $("#cargando2").css("display", "block");  
//   $.ajax({
//     url: "apirest/ConsultaTotalTrabajadores.php",
//     type: "post",
//     dataType: "json",
//     //   data: formData,
//     cache: false,
//     contentType: false,
//     processData: false,
//   }).done(function (res) {
//     $("#cargando2").css("display", "none");
//     $("#contenidoFiltros").css("display", "block");  
//     // console.log(res)
//     $("#TotalTrabajadores").html(res.data[0].TotalTrabajadores);
//   });
// }
function SelectTotalTrabajadores(val) {
  $("#contenidoFiltros").css("display", "none");  
  $("#cargando2").css("display", "block");  
  var data = val;
  // console.log(data);
  $.ajax({
    url: "apirest/SeleccionConsultaTotalTrabajadores.php?estados=" + data,
    type: "post",
    dataType: "json",
    //   data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    $("#cargando2").css("display", "none");
    $("#contenidoFiltros").css("display", "block");  
    // console.log(res)
    $("#TotalTrabajadores").html(res.data[0].TotalTrabajadores);
  });
}
////////////////////// END TOTAL TRABAJADORES ///////////////////


////////////////////// START TOTAL GRAFICA /////////////////// 
function ConsultaGrafica() {
  $("#cargando").css("display", "block");
  $("#barChart").css("display", "none");
  $.ajax({
    url: "apirest/ConsultaEstadistica.php",
    type: "post",
    dataType: "json",    
    cache: false,
    contentType: false,
    processData: false,
  })
  .done(function (res) {        

    var data = res.data;        
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];          
        
    var total = [];
    // console.log(data);
    var verifica=0;
    for (var i = 0; i < 12; i++) { 
      verifica=0;
      for (var j = 0; j < data.length; j++) {
        if (data[j].Mes == (i+1)) {
          verifica=data[j].TotalMonto;
        }
      }
        total.push(verifica);      
    }        
    

    $("#cargando").css("display", "none");
    $("#barChart").css("display", "block");    
    var ctx = document.getElementById("barChart");    
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: meses,
        datasets: [          
          {
            label: "Monto",
            data: total,
            borderColor: "rgba(0,81,116.09)",
            borderWidth: "0",
            backgroundColor: "rgba(0,81,116.07)",
          }          
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });
}
function SelectConsultaGrafica() {
  // var data = val;
  $("#cargando").css("display", "block");
  $("#barChart").css("display", "none"); 
  var ctx = document.getElementById("barChart").remove();    
  var ctx2 = document.getElementById("ContainerchartBar");  
  ctx2.innerHTML = "<canvas id='barChart'></canvas>";  

  var array = [];
  array = $('#example-getting-started').val();
  var id = JSON.stringify(array);

  var formData = new FormData();  
  formData.append("id", id);


  $.ajax({
    url: "apirest/SeleccionConsultaEstadistica.php",
    type: "post",
    dataType: "json",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  })
  .done(function (res) {
    $("#cargando").css("display", "none");
    $("#barChart").css("display", "block");


    var data = res.data;        
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];          
        
    var total = [];
    // console.log(data);
    var verifica=0;
    for (var i = 0; i < 12; i++) { 
      verifica=0;
      for (var j = 0; j < data.length; j++) {
        if (data[j].Mes == (i+1)) {
          verifica=data[j].TotalMonto;
        }
      }
        total.push(verifica);      
    }        



    var ctx = document.getElementById("barChart");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: meses,
        datasets: [          
          {
            label: "Monto",
            data: total,
            borderColor: "rgba(0,81,116.09)",
            borderWidth: "0",
            backgroundColor: "rgba(0,81,116.07)",
          }          
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });
}
function ShowSelected(){
  $("#cargando").css("display", "block");
  $("#barChart").css("display", "none");
  var ctx = document.getElementById("barChart").remove();    
  var ctx2 = document.getElementById("ContainerchartBar");  
  ctx2.innerHTML = "<canvas id='barChart'></canvas>"; 
  var year = $("#year").val();  
  // alert(year);

  var array = [];
  array = $('#example-getting-started').val();
  var id = JSON.stringify(array);
  console.log(id);

  var formData = new FormData();
  formData.append("year", year);
  formData.append("id", id);

  $.ajax({
    url: "apirest/ConsultaEstadisticaSelect.php",
    type: "post",
    dataType: "json",
    // data: {'array': JSON.stringify(array)}    
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  })
  .done(function (res) {        

    var data = res.data;        
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];          
        
    var total = [];
    // console.log(data);
    var verifica=0;
    for (var i = 0; i < 12; i++) { 
      verifica=0;
      for (var j = 0; j < data.length; j++) {
        if (data[j].Mes == (i+1)) {
          verifica=data[j].TotalMonto;
        }
      }
        total.push(verifica);      
    }        
    

    $("#cargando").css("display", "none");
    $("#barChart").css("display", "block");    
    var ctx = document.getElementById("barChart");    
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: meses,
        datasets: [          
          {
            label: "Monto",
            data: total,
            borderColor: "rgba(0,81,116.09)",
            borderWidth: "0",
            backgroundColor: "rgba(0,81,116.07)",
          }          
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });
}
////////////////////// END TOTAL GRAFICA ///////////////////


function openProveedores(){
  var array = [];
  array = $('#example-getting-started').val();
  var id = JSON.stringify(array);
  // console.log(id);

  localStorage.setItem("Id", id);

}



////////////////////// FILTRO TOTAL CONTRATOS MONTO Y TRABAJADORES /////////////////// 

function FiltroRojo() {  
  $("#contenidoFiltros").css("display", "none");  
  $("#cargando2").css("display", "block");  
  var array = []
  array = $('#example-getting-started').val();
  // console.log(array);
      
  $.ajax({
    url: "apirest/FiltroRojo.php",
    dataType: "json",
    type: "post",    
    data: {'array': JSON.stringify(array)}    
  }).done(function (res) {
    $("#cargando2").css("display", "none");
    $("#contenidoFiltros").css("display", "block");  


    console.log(res);
    $('#TotalContratos').html("");
    $('#TotalMonto').html("");
    $('#TotalTrabajadores').html("");

    $("#TotalContratos").html(res.data[0].TotalContratos);
    $("#TotalMonto").html(res.data[0].TotalMonto);
    $("#TotalTrabajadores").html(res.data[1].TotalTrabajadores);
  });
}

function FiltroNaranja() {  
  $("#contenidoFiltros").css("display", "none");  
  $("#cargando2").css("display", "block");  
  var array = []
  array = $('#example-getting-started').val();
  // console.log(array);
      
  $.ajax({
    url: "apirest/FiltroNaranja.php",
    dataType: "json",
    type: "post",    
    data: {'array': JSON.stringify(array)}    
  }).done(function (res) {
    $("#cargando2").css("display", "none");
    $("#contenidoFiltros").css("display", "block");  

    console.log(res);
    $('#TotalContratos').html("");
    $('#TotalMonto').html("");
    $('#TotalTrabajadores').html("");

    $("#TotalContratos").html(res.data[0].TotalContratos);
    $("#TotalMonto").html(res.data[0].TotalMonto);
    $("#TotalTrabajadores").html(res.data[1].TotalTrabajadores);
  });
}

function FiltroAmarillo() {  
  $("#contenidoFiltros").css("display", "none");  
  $("#cargando2").css("display", "block");  
  
  var array = []
  array = $('#example-getting-started').val();
  // console.log(array);
      
  $.ajax({
    url: "apirest/FiltroAmarillo.php",
    dataType: "json",
    type: "post",    
    data: {'array': JSON.stringify(array)}    
  }).done(function (res) {
    $("#cargando2").css("display", "none");
    $("#contenidoFiltros").css("display", "block");  

    console.log(res);
    $('#TotalContratos').html("");
    $('#TotalMonto').html("");
    $('#TotalTrabajadores').html("");

    $("#TotalContratos").html(res.data[0].TotalContratos);
    $("#TotalMonto").html(res.data[0].TotalMonto);
    $("#TotalTrabajadores").html(res.data[1].TotalTrabajadores);
  });
}

function FiltroAzul() {  
  $("#contenidoFiltros").css("display", "none");  
  $("#cargando2").css("display", "block");  
  
  var array = []
  array = $('#example-getting-started').val();
  // console.log(array);
      
  $.ajax({
    url: "apirest/FiltroAzul.php",
    dataType: "json",
    type: "post",    
    data: {'array': JSON.stringify(array)}    
  }).done(function (res) {
    $("#cargando2").css("display", "none");
    $("#contenidoFiltros").css("display", "block");  

    console.log(res);
    $('#TotalContratos').html("");
    $('#TotalMonto').html("");
    $('#TotalTrabajadores').html("");

    $("#TotalContratos").html(res.data[0].TotalContratos);
    $("#TotalMonto").html(res.data[0].TotalMonto);
    $("#TotalTrabajadores").html(res.data[1].TotalTrabajadores);
  });
}

function FiltroAll() {  
  $("#contenidoFiltros").css("display", "none");  
  $("#cargando2").css("display", "block");   
      
  $.ajax({
    url: "apirest/FiltroAll.php",
    dataType: "json",
    type: "post",    
    // data: {'array': JSON.stringify(array)}  
    cache: false,
    contentType: false,
    processData: false,  
  }).done(function (res) {
    $("#cargando2").css("display", "none");
    $("#contenidoFiltros").css("display", "block");  

    console.log(res);
    $('#TotalContratos').html("");
    $('#TotalMonto').html("");
    $('#TotalTrabajadores').html("");

    $("#TotalContratos").html(res.data[0].TotalContratos);
    $("#TotalMonto").html(res.data[0].TotalMonto);
    $("#TotalTrabajadores").html(res.data[1].TotalTrabajadores);
  });
}
////////////////////// END FILTRO TOTAL CONTRATOS MONTO Y TRABAJADORES ///////////////////


function clickCelda(celda, tipo) {
  if (tipo == 0) {
    $(".celda" + celda).css("display", "table-column");
    $("#botonV" + celda).css("display", "table-cell");
    $("#botonM" + celda).css("display", "none");
    console.log("cerrando");
  } else {
    $(".celda" + celda).css("display", "table-cell");
    $("#botonV" + celda).css("display", "none");
    $("#botonM" + celda).css("display", "table-cell");
    console.log("abriendo");
  }
}

function clickCelda2(celda, tipo) {
  if (tipo == 0) {
    // $(".Opciones").css("display", "none");
    $(".celdaC" + celda).css("display", "table-column");
    $(".text-center celdaC" + celda).css("display", "table-column");
    $("#botonVC" + celda).css("display", "table-cell");
    $("#botonMC" + celda).css("display", "none");
    console.log("cerrando");
  } else {
    // $(".Opciones").css("display", "block");
    $(".celdaC" + celda).css("display", "table-cell");

    $("#botonVC" + celda).css("display", "none");
    $("#botonMC" + celda).css("display", "table-cell");
    console.log("abriendo");
  }
}

function clickCelda3(celda, tipo) {
  if (tipo == 0) {
    $(".celdaE" + celda).css("display", "table-column");
    $(".CeldaMes" + celda).css("display", "table-column");
    $("#botonVE" + celda).css("display", "table-cell");
    $("#botonME" + celda).css("display", "none");
    console.log("cerrando");
  } else {
    $(".celdaE" + celda).css("display", "table-cell");
    $("#botonVE" + celda).css("display", "none");
    $("#botonME" + celda).css("display", "table-cell");
    console.log("abriendo");
  }
}
function clickCeldaAnio(celda, tipo) {
  console.log(celda);
  if (tipo == 0) {
    $(".A" + celda).each(function () {
      var clases = $(this)[0].classList;
      if ($(this)[0].classList[1] != "A" + celda) {
        var visibilidad = $("." + $(this)[0].classList[1]).is(":visible");
        if (visibilidad == true) {
          $(this).css("display", "table-column");
        }
      }
    });

    $("#botonVANIOS" + celda).css("display", "table-cell");
    $("#botonOCULTANIOS" + celda).css("display", "none");

    // Opciones
    $("#botonAcuse1" + celda).css("display", "table-cell");
    $("#botonOCULTANIOSAcuse" + celda).css("display", "none");

    /*    $(".celdaAniosM"+celda).css("display", "none");
    $("#botonVANIOS"+celda).css("display", "table-cell");
    $("#botonOCULTANIOS"+celda).css("display", "none");
    console.log("cerrando");*/
  } else {
    // $(".celdaAniosM"+celda).css("display", "table-cell");
    $(".A" + celda).each(function () {
      var clases = $(this)[0].classList;
      if ($(this)[0].classList[1] != "A" + celda) {
        var visibilidad = $("." + $(this)[0].classList[1]).is(":visible");
        if (visibilidad == true) {
          $(this).css("display", "table-cell");
        }
      }
    });

    $("#botonVANIOS" + celda).css("display", "none");
    $("#botonOCULTANIOS" + celda).css("display", "table-cell");

    // Ociones
    $("#botonAcuse1" + celda).css("display", "none");
    $("#botonOCULTANIOSAcuse" + celda).css("display", "table-cell");

    // console.log("abriendo");
  }
}
