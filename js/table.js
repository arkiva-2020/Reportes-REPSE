$(function () {
  $('[data-tooltip="tooltip"]').tooltip();
  $('[data-toggle="tooltip"]').toggle();
});

// function DatosFaltantesProvedor() {
//   var meses = $("#FiltroMes").val();
//   $(document).ready(function () {
//     var table = $("#tablaDocumentosFaltantesProveedor").DataTable({
//       pageLength: 10,
//       responsive: true,
//       order: [[0, "desc"]],
//       dom: '<"html5buttons"B>lTfgitp',
//       ajax: {
//         url: "./apirest/DatosFaltantesProvedor.php?meses=" + meses,
//         type: "GET",
//         // 'dataSrc':''
//       },
//       columns: [
//         { data: "Name_Or_Tilte" },
//         { data: "Rfc_Empresa" },
//         { data: "Número_De_La_Orden_De_Compra" },
//         // { data: "Número_De_La_Factura" },
//         {
//           data: null,
//           render: function (data) {
//             var btnProjetTitle =
//               "<span class='badge tooltip_detalles' style='cursor: pointer;' data-info='" +
//               data.Project_Title +
//               "'>" +
//               data.Proyectos +
//               "</span>";
//             return "<center>" + btnProjetTitle + "</center>";
//           },
//         },
//         { data: "Estatus_Proveedor_Servicios_Especializados" },
//         {
//           data: null,
//           render: function (data) {
//             var btnMoneda =
//               "<span class='badge badge-success' style='cursor: pointer;'>USD</span>";
//             return "<center>" + btnMoneda + "</center>";
//           },
//         },
//         { data: "Total01" },
//         {
//           data: null,
//           render: function (data) {
//             var btnDucumentosFaltantesProveedorPivote =
//               "<button id ='" +
//               data.ID +
//               "' type='button' class='btn btn-success btn-circle btn-outline btn-sm d-inline docProveedorPivote tooltip_detalles' data-info='Reporte Faltantes Proveedor'><i class='fa fa-bar-chart-o' style=''></i></button>";
//             return (
//               "<center>" + btnDucumentosFaltantesProveedorPivote + "</center>"
//             );
//           },
//         },
//       ],
//       buttons: [
//         {
//           extend: "copy",
//           copySuccess: {
//             1: "Copied one row to clipboard",
//             _: "Copied %d rows to clipboard",
//           },
//           copyTitle: "Copy to clipboard",
//           text: '<button style="color:white;" class="btn btn-xs btn-w-m btn-link" style="margin-right:0px!important" type="button"><i style="font-size:14px;" class="fa fa-files-o"></i> Copiar</button>',
//         },
//         {
//           extend: "excel",
//           title: "ExampleFile",
//           text: '<button style="color:white;" class="btn btn-xs btn-w-m btn-link" style="margin-right:0px!important" type="button"><i style="font-size:14px;" class="fa fa-file-excel-o"></i> Tabla Excel</button>',
//         },
//         {
//           extend: "pdf",
//           title: "ExampleFile",
//           text: '<button style="color:white;" class="btn btn-xs btn-w-m btn-link" style="margin-right:0px!important" type="button"><i style="font-size:14px;" class="fa fa-file-pdf-o"></i> Documento PDF</button>',
//         },
//       ],
//       language: idioma,
//     });

//     obtenerDatosFaltantesProvedor(
//       "#tablaDocumentosFaltantesProveedor tbody",
//       table
//     );
//   });
// }

function FiltroMes() {
  var mes = $("#FiltroMes").val();
  console.log(mes);
  const myArray = mes.split("/");
  // let word = myArray[0];

  console.log(myArray[0]);
  $("#tableProvedores").html("");

  var cadena =
    "" +
    '<table id="tablaDocumentosFaltantesProveedor" class="tableCustomize table table-bordered table-hover ">' +
    "<thead>" +
    '<tr class="tr">' +
    '<th width="20%">Proveedor</th>' +
    "<th>RFC</th>" +
    "<th>Factura</th>" +
    "<th>Proyecto</th>" +
    "<th>Status</th>" +
    "<th>Total</th>" +
    "<th>Opciones</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    "</tbody>" +
    "</table>";
  $("#tableProvedores").html(cadena);

  // var meses = $('#FiltroMes').val();

  var table = $("#tablaDocumentosFaltantesProveedor").DataTable({
    pageLength: 10,
    responsive: true,
    order: [[0, "desc"]],
    dom: '<"html5buttons"B>lTfgitp',
    ajax: {
      url: "./apirest/filtroMes.php?mes=" + myArray[0],
      type: "GET",
      // 'dataSrc':''
    },
    columns: [
      { data: "Name_Or_Tilte" },
      // {'data': 'TotalFacturasProveedores'},
      { data: "Rfc_Empresa" },
      // {'data': 'Número_De_La_Orden_De_Compra'},
      { data: "Número_De_La_Factura" },
      { data: "Proyectos" },
      { data: "Estatus_Proveedor_Servicios_Especializados" },
      { data: "Total01" },
      {
        data: null,
        render: function (data) {
          var btnDucumentosFaltantesEmpleados =
            " <button id ='" +
            data.ID +
            "' type='button' data-toggle='modal' data-target='#Trabajador' class='btn btn-success btn-circle btn-outline btn-sm  docEmpleados tooltip_detalles' data-info='Documentos Faltantes Empleados'><i class='fa fa-user' style=''></i></button>";
          var btnDucumentosFaltantesProveedor =
            " <button id ='" +
            data.ID +
            "' type='button' data-toggle='modal' data-target='#Proveedor' class='btn btn-info btn-circle btn-outline btn-sm docProveedor tooltip_detalles' data-info='Documentos Faltantes Proveedor'><i class='fa fa-home' style=''></i></button>";
          return (
            "<center>" +
            btnDucumentosFaltantesProveedor +
            btnDucumentosFaltantesEmpleados +
            "</center>"
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
        // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">Copiar</button>'
        // text: '<button class="btn btn-danger">Exportar a PDF <i class="far fa-file-pdf"></i></button>'
      },
      // {extend: 'csv',
      // // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">CSV</button>'
      // },
      {
        extend: "excel",
        title: "ExampleFile",
        // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">Excel</button>'
      },
      {
        extend: "pdf",
        title: "ExampleFile",
        // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">PDF</button>'
      },
    ],
    language: idioma,
  });

  obtenerDatosFaltantesProvedor(
    "#tablaDocumentosFaltantesProveedor tbody",
    table
  );
}

function obtenerDatosFaltantesProvedor(tbody, table) {
  $('[data-tooltip="tooltip"]').tooltip();
  $('[data-toggle="tooltip"]').toggle();

  //////////////////////////////////////// EMPLEADOS /////////////////////////////
  $(tbody).on("click", "button.docEmpleados", function () {
    var data = table.row($(this).parents("tr")).data();
    console.log(data);
    data.detallesEmpleados.length;

    $("#DivTbDtailE").html("");
    var cadena =
      "" +
      '<table id="tablaDocumentosFaltantesEmpleados" class="tableCustomize table table-hover ">' +
      "<thead>" +
      '<tr class="tr">' +
      '<th width="10%">Empleado</th>' +
      '<th width="7%">CFDI</th>' +
      '<th width="7%">Contrato</th>' +
      '<th width="13%">Inscripcion IMSS</th>' +
      '<th width="10%">Periodo</th>' +
      "</tr>" +
      "</thead>" +
      '<tbody id="tbody-detalle-documentos-empleados">' +
      "</tbody>" +
      "</table>";
    $("#DivTbDtailE").html(cadena);

    for (let a = 0; a < data.detallesEmpleados.length; a++) {
      console.log(data.detallesEmpleados[a]);
      //  console.log(data.detallesEmpleados[a]);
      var botonInput =
        '<div id="MiDivE' +
        data.detallesEmpleados[a].ID +
        '"><form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivoE' +
        data.detallesEmpleados[a].ID +
        '"> <label for="File' +
        data.detallesEmpleados[a].ID +
        '">' +
        '<span class="btn btn-warning editar btn-circle btn-outline tooltip_detalles" data-info="Subir Documento" style="padding-left: 8px;padding-right: 8px; border-radius: 20px;"><i style="" class="fa fa-warning"></i></span>' +
        '<input type="file" multiple id="File' +
        data.detallesEmpleados[a].ID +
        '" style="display:none" onChange="CargarEmpleadoE(' +
        data.detallesEmpleados[a].ID +
        ')">' +
        "</label></form></div>";
      var botonVer =
        '<button style="margin-right: 3px;" class="btn btn-success btn-circle btn-outline tooltip_detalles" data-info="Revisar" type="button"><i class="fa fa-sticky-note-o"></i></button>';
      var botonEliminar =
        '<button class="btn btn-danger btn-circle btn-outline tooltip_detalles" data-info="Eliminar" type="button"><i class="fa fa-trash-o"></i></button>';
      $("#tbody-detalle-documentos-empleados").append(
        "<tr> <td>" +
          data.detallesEmpleados[a].Empleado +
          "</td><td>" +
          data.detallesEmpleados[a].Vigencia +
          "</td><td align='center'>0</td><td align='center'>0</td><td align='center' style='display: flex;'>" +
          botonVer +
          botonInput +
          botonEliminar +
          "</td></tr>"
      );
    }

    setTimeout(() => {
      var table = $("#tablaDocumentosFaltantesEmpleados").DataTable({
        pageLength: 10,
        responsive: true,
        order: [[0, "desc"]],
        dom: '<"html5buttons"B>lTfgitp',
        // scrollY: "300px",
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
        destroy: true,
      });
    }, 300);
  });

  ////////////// EMPLEADOS ///////////////////////
  ////////////// START TABLA PIVOTE //////////////
  $(tbody).on("click", "button.docProveedorPivote", function () {
    $("#ProveedorPrincipal").css("display", "none");
    // $("#tablaMono").css("display", "block");
    $("#ProveedorPage").css("display", "block");
    $("#botonBack").css("display", "block");    

    var data = table.row($(this).parents("tr")).data();
    var idEmpresa = data.IdEmpresa;
    var idProveedor = data.ID;
    ConsultaTablaMono(idEmpresa, idProveedor);    
    // console.log(idEmpresa, idProveedor);

    //data.detallesEmpleados.length;
    var cadena = "";
    var cadena2 = "";
    var cadena3 = "";
    var aniosInvolucrados = [];
    var mesesInvolucrados = [];
    var rowspan = 0;
    var rowspan2 = 0;

    cadena2 = "";
    var arrayData = data.detallesEmpleados;

    // console.log("Empleados yan", arrayData);
    /////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////Carga de periodos////////////////////////////////////////
    for (var jPer = 0; jPer < arrayData.length; jPer++) {
      var documentosArrayPer = arrayData[jPer].DocumentosEmpleados;
      for (var kPer = 0; kPer < documentosArrayPer.length; kPer++) {
        
        if (documentosArrayPer[kPer].PeriodoFecha == null) {          
          documentosArrayPer[kPer].PeriodoFecha = "2022-05-01";              
        }                        

        var f = documentosArrayPer[kPer].PeriodoFecha;        
        // console.log(f);

        var arrayFechon = f.split("-");
        var yearEmpleadoPer = parseInt(arrayFechon[0]);
        var monthEmpleadosPer = parseInt(arrayFechon[1]);
        aniosInvolucrados.push(yearEmpleadoPer);
        var arrayMes = {
          mes: monthEmpleadosPer,
          anio: yearEmpleadoPer,
        };
        
        mesesInvolucrados.push(arrayMes);
        mesesInvolucrados.sort((a, b) => a.mes - b.mes);
      }
    }
    ////////////////////////////////////////////////////////////////////

    var arrayDataPer2 = data.detallesProveedores;
    // console.log("Proveedores yan", arrayDataPer2);

    var arrayFechaPrueba = [];    
    for (var aPer = 0; aPer < arrayDataPer2.length; aPer++) {                  

      arrayFechaPrueba.push(arrayDataPer2[aPer]);
      // console.log(arrayFechaPrueba.sort((a, b) => new Date(a.PeriodoFecha).getTime() - new Date(b.PeriodoFecha).getTime()));
      var filtro = arrayFechaPrueba.sort((a, b) => new Date(a.PeriodoFecha).getTime() - new Date(b.PeriodoFecha).getTime());
      
      // if (f.PeriodoFecha == null) {          
      //   f.PeriodoFecha = "2022-05-01";              
      // }                        
      // if (arrayDataPer2[aPer].PeriodoFecha == null) {          
      //   arrayDataPer2[aPer].PeriodoFecha = "2022-05-01";              
      // }                        

      var f = filtro[aPer].PeriodoFecha;
      // console.log(f);

      var arrayFechon = f.split("-");
      var yearEmpresaPer = parseInt(arrayFechon[0]);
      var monthEmpresaPer = parseInt(arrayFechon[1]);
      aniosInvolucrados.push(yearEmpresaPer);
      var arrayMes = {
        mes: monthEmpresaPer,
        anio: yearEmpresaPer,
      };
      mesesInvolucrados.push(arrayMes);
      mesesInvolucrados.sort((a, b) => a.mes - b.mes);
    }
    ////////////////////////////////////////////////////////////////////
    const result = aniosInvolucrados.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);
    aniosInvolucrados = result;

    let resultMeses = mesesInvolucrados.map((meses) => {
      return [JSON.stringify(meses), meses];
    });    
    let mesesMapArr = new Map(resultMeses); // Pares de clave y valor
    // console.log(resultMeses);

    let unicos = [...mesesMapArr.values()]; // Conversión a un array

    mesesInvolucrados = unicos;
    // console.log("Fechas involucradas", aniosInvolucrados);
    // console.log("Meses involucradas", mesesInvolucrados);
    var cabecera = "";
    var cabecera2 = "<tr>";

    cabecera =
      '<tr class="tr"><td colspan="4" rowspan="2" style="background-color: transparent!important; height: 40px;">Documentos Pendientes</td>';

    for (var cab = 0; cab < aniosInvolucrados.length; cab++) {
      var colspanHeader = 0;
      var botonHEAD1 =
        '<button style="display:none;font-size: 16px" class="btn btn-outline btn-link" type="button" id="botonVANIOS' +
        aniosInvolucrados[cab] +
        '" onclick="clickCeldaAnio(' +
        aniosInvolucrados[cab] +
        ', 1)"><i class="fa fa-plus-square-o"></i></button>';
      var botonHEAD2 =
        '<button class="btn btn-outline btn-link" type="button" id="botonOCULTANIOS' +
        aniosInvolucrados[cab] +
        '" onclick="clickCeldaAnio(' +
        aniosInvolucrados[cab] +
        ', 0)" style="font-size: 16px;"><i class="fa fa-minus-square-o"></i></button>';

      for (var cab2 = 0; cab2 < mesesInvolucrados.length; cab2++) {
        if (mesesInvolucrados[cab2].anio == aniosInvolucrados[cab]) {
          colspanHeader++;
          cabecera2 =
            cabecera2 +
            '<td class="text-center A' +
            aniosInvolucrados[cab] +
            '" style="background-color: transparent!important; height: 40px;">' +
            mesesInvolucrados[cab2].mes +
            "</td>";
        }
      }

      cabecera =
        cabecera +
        '<td colspan="' +
        colspanHeader +
        '" class="text-center" style="background-color: transparent!important; height: 40px;">' +
        aniosInvolucrados[cab] +
        botonHEAD1 +
        botonHEAD2 +
        "</td>";
    }
    cabecera = cabecera + "</tr>" + cabecera2 + "</tr>";

    $("#CabeceraTabla").html(cabecera);
    ////////////////////////////////Carga de periodos////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////Limpiar array////////////////////////////////////////////

    const arrayDataOriginal1 = data.detallesEmpleados2;
    // console.log("Antes de limpieza", arrayDataOriginal1);
    $("#CabeceraTabla").data("EmpleadosDatos", arrayDataOriginal1);
    for (var ind = 0; ind < arrayData.length; ind++) {
      const unicosE = [];
      for (
        var indice = 0;
        indice < arrayData[ind].DocumentosEmpleados.length;
        indice++
      ) {
        const registro = arrayData[ind].DocumentosEmpleados[indice];
        let esDuplicado = false;

        for (var i = 0; i < unicosE.length; i++) {
          if (unicosE[i].Documentos === registro.Documentos) {            
            esDuplicado = true;
            break;
          }
        }
        if (!esDuplicado) {
          unicosE.push(registro);
        }
      }
      arrayData[ind].DocumentosEmpleados = unicosE;
    }

    ////////////////////////////////////////////Limpiar array////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    for (var j = 0; j < arrayData.length; j++) {
      cadena3 = "";
      var documentosArray = arrayData[j].DocumentosEmpleados;
      rowspan = rowspan + documentosArray.length;
      for (var k = 0; k < documentosArray.length; k++) {
        var f = new Date(documentosArray[k].Fecha);
        var yearEmpleado = f.getFullYear();
        var monthEmpleados = f.getMonth() + 1;

        var cadenaIntegrada = "";
        for (var cab = 0; cab < mesesInvolucrados.length; cab++) {
          var retorno = busquedaArrayRetorno2(
            arrayData[j].Empleado_ID,
            documentosArray[k].Documentos,
            mesesInvolucrados[cab].anio,
            mesesInvolucrados[cab].mes
          );                              
          if (retorno != 0) {
            
            var botonInput =
              '<div id="MiDivE' +
              retorno +
              '" style="display: inline-flex; margin-left: 7px;">' +
              '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivoE' +
              retorno +
              '">' +
              '<label for="File' +
              retorno +
              '">' +
              '<span class="btn btn-danger editar btn-circle btn-outline tooltip_detalles" data-info="Subir Documento" style="padding: 3.5px 6px;"><i class="fa fa-cloud-upload"></i>' +
              '<input type="file" multiple id="File' +
              retorno +
              '" style="display:none" onChange="CargarEmpleadoEmpresa(' +
              retorno +
              ')">' +
              "</span>" +
              "</label>" +
              "</form>" +
              "</div>";
            cadenaIntegrada =
              cadenaIntegrada +
              '<td class="text-center celda' +
              data.detallesEmpleados[j].Empleado_ID +
              " A" +
              mesesInvolucrados[cab].anio +
              " CeldaMes" +
              data.ID +
              '" style="display:none;">' +
              botonInput + 
              "</td>";
          } else {
            var retornop1 = busquedaArrayRetornoEmp1(
              arrayData[j].Empleado_ID,
              documentosArray[k].Documentos,
              mesesInvolucrados[cab].anio,
              mesesInvolucrados[cab].mes
            );                                    
            if (retornop1 != 0) {
              ////////////////AQUI VA EL BOTON PARA SUBIR COMPROBANTE EN DOC. EMPRESA
              var botonWarning =
                '<div id="MiDiv' +
                retornop1 +
                '" style="display: inline-flex; margin-left: 5px;">' +
                '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
                retornop1 +
                '">' +
                '<label for="File' +
                retornop1 +
                '">' +
                '<span class="btn btn-warning editar btn-circle btn-outline tooltip_detalles" data-info="Subir Comprobante de Pago" style="padding: 3px 6px"><i class="fa fa-warning"></i>' +
                '<input type="file" multiple id="File' +
                retornop1 +
                '" style="display:none" onChange="CargarComprobanteProveedor(' +
                retornop1 +
                ')">' +
                "</span>" +
                "</label>" +
                "</form>" +
                "</div>";
              cadenaIntegrada =
                cadenaIntegrada +
                '<td class="text-center celda' +
                data.detallesEmpleados[j].Empleado_ID +
                " A" +
                mesesInvolucrados[cab].anio +
                " CeldaMes" +
                data.ID +
                '" style="display:none">' +
                botonWarning +
                "</td>";
            } else {
              ////////////////AQUI VA EL ESTADO PENDIENTE
              var retornop2 = busquedaArrayRetornoEmp2(
                arrayData[j].Empleado_ID,
                documentosArray[k].Documentos,
                mesesInvolucrados[cab].anio,
                mesesInvolucrados[cab].mes
              );              
              if (retornop2 != 0) {
                var botonInfo =
                  '<div id="MiDiv' +
                  retornop2 +
                  '" style="display: inline-flex; margin-left: 5px;">' +
                  '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
                  retornop2 +
                  '">' +
                  '<label for="File' +
                  retornop2 +
                  '">' +
                  '<span class="btn btn-info editar btn-circle btn-outline tooltip_detalles" data-info="Pendiente" style="padding: 3px 9.7px"><i class="fa fa-info"></i>' +
                  '<input type="file" multiple id="File' +
                  retornop2 +
                  '" style="display:none" onChange="CheckProveedores(' +
                  retornop2 +
                  ')">' +
                  "</span>" +
                  "</label>" +
                  "</form>" +
                  "</div>";
                cadenaIntegrada =
                  cadenaIntegrada +
                  '<td class="text-center celda' +
                  data.detallesEmpleados[j].Empleado_ID +
                  " A" +
                  mesesInvolucrados[cab].anio +
                  " CeldaMes" +
                  data.ID +
                  '" style="display:none">' +
                  botonInfo +
                  "</td>";
                // cadenaIntegrada=cadenaIntegrada+'<td class=" text-center celdaC'+data.ID+' A'+mesesInvolucrados[cab].anio+'" style="display:none">'+botonInfo+'</td>';
              } else {
                ////////////////AQUI VA EL ESTADO LISTO             
                var botonCheck =
                  '<div id="MiDiv' +
                  retorno +
                  '" style="display: inline-flex; margin-left: 6px;">' +
                  '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
                  retorno +
                  '">' +
                  '<label for="File' +
                  retorno +
                  '">' +
                  '<span class="btn btn-secondary editar btn-circle btn-outline tooltip_detalles" data-info="Válido" style="padding: 3px 6px; color: #27AE60!important;"><i class="fa fa-check"></i>' +                  
                  "</span>" +
                  "</label>" +
                  "</form>" +
                  "</div>";
                cadenaIntegrada =
                  cadenaIntegrada +
                  '<td class="text-center celda' +
                  data.detallesEmpleados[j].Empleado_ID +
                  " A" +
                  mesesInvolucrados[cab].anio +
                  " CeldaMes" +
                  data.ID +
                  '" style="display:none">' +
                  botonCheck +
                  "</td>";
                // cadenaIntegrada=cadenaIntegrada+'<td class=" text-center celdaC'+data.ID+' A'+mesesInvolucrados[cab].anio+'" style="display:none">'+botonCheck+'</td>';
              }
            }
          }
        }

        cadena3 =
          cadena3 +
          '<td class="celda' +
          data.detallesEmpleados[j].Empleado_ID +
          " CeldaMes" +
          data.ID +
          '" style="display:none">' +
          documentosArray[k].Documentos +
          "</td>" +
          cadenaIntegrada +
          "</tr>";
      }
      var boton1 =
        '<button style="font-size: 16px" class="btn btn-outline btn-link" type="button" id="botonV' +
        data.detallesEmpleados[j].Empleado_ID +
        '" onclick="clickCelda(' +
        data.detallesEmpleados[j].Empleado_ID +
        ', 1)"><i  class="fa fa-plus-square-o"></i></button>';
      var boton2 =
        '<button class="btn btn-outline btn-link" type="button" id="botonM' +
        data.detallesEmpleados[j].Empleado_ID +
        '" onclick="clickCelda(' +
        data.detallesEmpleados[j].Empleado_ID +
        ', 0)" style="display:none; font-size: 16px;"><i class="fa fa-minus-square-o"></i></button>';
      cadena2 =
        cadena2 +
        '<td rowspan="' +
        documentosArray.length +
        '" class="celdaE' +
        data.ID +
        '" style="display:none">' +
        data.detallesEmpleados[j].Empleado +
        " " +
        boton1 +
        boton2 +
        "</td>" +
        cadena3;
    }
    var botonE1 =
      '<button style="font-size: 16px" class="btn btn-outline btn-link" type="button" id="botonVE' +
      data.ID +
      '" onclick="clickCelda3(' +
      data.ID +
      ', 1)"><i class="fa fa-plus-square-o"></i></button>';
    var botonE2 =
      '<button class="btn btn-outline btn-link" type="button" id="botonME' +
      data.ID +
      '" onclick="clickCelda3(' +
      data.ID +
      ', 0)" style="display:none; font-size:16px;"><i class="fa fa-minus-square-o"></i></button>';
    var semicadena2 =
      '<td rowspan="' +
      rowspan +
      '">Doc empleados ' +
      botonE1 +
      botonE2 +
      "</td>" +
      cadena2;
    cadena2 = semicadena2;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    var cadena4 = "";
    var cadena5 = "";

    var arrayData2 = data.detallesProveedores;
    // console.log("hola yan: ", arrayData2);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////Limpiar array////////////////////////////////////////////////////////////
    var arrayDataOriginal2 = arrayData2;

    const unicosP = [];

    for (var indice = 0; indice < arrayData2.length; indice++) {
      const registro = arrayData2[indice];
      let esDuplicado = false;
      for (var i = 0; i < unicosP.length; i++) {
        if (
          unicosP[i].NombreDocumento === registro.NombreDocumento &&
          unicosP[i].ProveedorID === registro.ProveedorID
        ) {
          esDuplicado = true;
          break;
        }
      }
      if (!esDuplicado) {
        unicosP.push(registro);
        //console.log("Mis unicos", unicosP);
      }
    }
    arrayData2 = unicosP;
    rowspan2 = arrayData2.length;
    ////////////////////////////////////////////Limpiar array////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // console.log("Proveedor array doc: ", arrayDataOriginal2);
    $("#CabeceraTabla").data("ProveedorDatos", arrayDataOriginal2);
    // console.log($("#CabeceraTabla").data("ProveedorDatos", arrayDataOriginal2));
    var botonC1 =
      '<button style="font-size: 16px" class="btn btn-outline btn-link" type="button" id="botonVC' +
      data.ID +
      '" onclick="clickCelda2(' +
      data.ID +
      ', 1)"><i class="fa fa-plus-square-o"></i></button>';
    var botonC2 =
      '<button class="btn btn-outline btn-link" type="button" id="botonMC' +
      data.ID +
      '" onclick="clickCelda2(' +
      data.ID +
      ', 0)" style="display:none; font-size: 16px;"><i class="fa fa-minus-square-o"></i></button>';

    for (var a = 0; a < arrayData2.length; a++) {
      var f = new Date(arrayData2[a].PeriodoFecha);
      var yearEmpresa = f.getFullYear();
      var monthEmpresa = f.getMonth() + 1;

      var cadenaIntegrada = "";
      for (var cab = 0; cab < mesesInvolucrados.length; cab++) {
        var retorno = busquedaArrayRetorno(
          arrayData2[a].NombreDocumento,
          mesesInvolucrados[cab].anio,
          mesesInvolucrados[cab].mes
        );
        if (retorno != 0) {
          var botonInput =
            '<div id="MiDiv' +
            retorno +
            '" style="display: inline-flex; margin-left: 7px;">' +
            '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
            retorno +
            '">' +
            '<label for="File' +
            retorno +
            '">' +
            '<span class="btn btn-danger editar btn-circle btn-outline tooltip_detalles" data-info="Subir Documento" style="padding: 3.5px 6px;"><i class="fa fa-cloud-upload"></i>' +
            '<input type="file" multiple id="File' +
            retorno +
            '" style="display:none" onChange="CargarProveedores(' +
            retorno +
            ')">' +
            "</span>" +
            "</label>" +
            "</form>" +
            "</div>";
          cadenaIntegrada =
            cadenaIntegrada +
            '<td class="text-center celdaC' +
            data.ID +
            " A" +
            mesesInvolucrados[cab].anio +
            '" style="display:none">' +
            botonInput +
            "</td>";
        } else {
          var retornop1 = busquedaArrayRetornoProv(
            arrayData2[a].NombreDocumento,
            mesesInvolucrados[cab].anio,
            mesesInvolucrados[cab].mes
          );          
          if (retornop1 != 0) {
            ////////////////AQUI VA EL BOTON PARA SUBIR COMPROBANTE EN DOC. EMPRESA
            var botonWarning =
              '<div id="MiDiv' +
              retornop1 +
              '" style="display: inline-flex; margin-left: 5px;">' +
              '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
              retornop1 +
              '">' +
              '<label for="File' +
              retornop1 +
              '">' +
              '<span class="btn btn-warning editar btn-circle btn-outline tooltip_detalles" data-info="Subir Comprobante de Pago" style="padding: 3px 6px"><i class="fa fa-warning"></i>' +
              '<input type="file" multiple id="File' +
              retornop1 +
              '" style="display:none" onChange="CargarComprobanteProveedor(' +
              retornop1 +
              ')">' +
              "</span>" +
              "</label>" +
              "</form>" +
              "</div>";
            cadenaIntegrada =
              cadenaIntegrada +
              '<td class=" text-center celdaC' +
              data.ID +
              " A" +
              mesesInvolucrados[cab].anio +
              '" style="display:none">' +
              botonWarning +
              "</td>";
          } else {
            ////////////////AQUI VA EL ESTADO PENDIENTE
            var retornop2 = busquedaArrayRetornoProv2(
              arrayData2[a].NombreDocumento,
              mesesInvolucrados[cab].anio,
              mesesInvolucrados[cab].mes
            );
            if (retornop2 != 0) {
              var botonInfo =
                '<div id="MiDiv' +
                retornop2 +
                '" style="display: inline-flex; margin-left: 5px;">' +
                '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
                retornop2 +
                '">' +
                '<label for="File' +
                retornop2 +
                '">' +
                '<span class="btn btn-info editar btn-circle btn-outline tooltip_detalles" data-info="Pendiente" style="padding: 3px 9.7px"><i class="fa fa-info"></i>' +
                '<input type="file" multiple id="File' +
                retornop2 +
                '" style="display:none" onChange="CheckProveedores(' +
                retornop2 +
                ')">' +
                "</span>" +
                "</label>" +
                "</form>" +
                "</div>";
              cadenaIntegrada =
                cadenaIntegrada +
                '<td class=" text-center celdaC' +
                data.ID +
                " A" +
                mesesInvolucrados[cab].anio +
                '" style="display:none">' +
                botonInfo +
                "</td>";
            } else {
              ////////////////AQUI VA EL ESTADO LISTO
              var botonCheck =
                '<div id="MiDiv' +
                retorno +
                '" style="display: inline-flex; margin-left: 6px;">' +
                '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
                retorno +
                '">' +
                '<label for="File' +
                retorno +
                '">' +
                '<span class="btn btn-secondary editar btn-circle btn-outline tooltip_detalles" data-info="Válido" style="padding: 3px 6px; color: #27AE60!important;"><i class="fa fa-check"></i>' +
                "</span>" +
                "</label>" +
                "</form>" +
                "</div>";
              // var botonInfo='<span class="btn btn-success btn-circle btn-outline tooltip_detalles mt-1 mb-1" data-info="Válido" style="padding: 3px 5px; margin-left: 5px; width:25px; height:25px;"><i class="fa fa-check"></i></span>'
              cadenaIntegrada =
                cadenaIntegrada +
                '<td class=" text-center celdaC' +
                data.ID +
                " A" +
                mesesInvolucrados[cab].anio +
                '" style="display:none">' +
                botonCheck +
                "</td>";
            }
          }
        }
      }

      cadena4 =
        cadena4 +
        '<td class="celdaC' +
        data.ID +
        '" style="display:none" colspan="2">' +
        arrayData2[a].NombreDocumento +
        "</td>" +
        cadenaIntegrada +
        "</tr>";
    }
    cadena5 =
      cadena5 +
      '<td rowspan="' +
      rowspan2 +
      '">Doc empresa' +
      botonC1 +
      botonC2 +
      "</td>" +
      cadena4;
    if (rowspan == 0) {
      rowspan = 1;
    }
    if (rowspan2 == 0) {
      rowspan2 = 1;
    }
    rowspan = rowspan + rowspan2;

    cadena =
      "<tr>" +
      '<td rowspan="' +
      rowspan +
      '">' +
      data.Name_Or_Tilte +
      "</td>" +
      cadena5 +
      cadena2;

    $("#tbody-detalle-documentos").html(cadena);
  });
}

///////////// EMPLEADOS ////////////////////////
///////////// FIN DE LA TABLA PIVOTE  //////////

function busquedaArrayRetorno(id, anio, mes) {
  var idRetorno = 0;
  var arrayData2 = $("#CabeceraTabla").data("ProveedorDatos");  
  for (var a = 0; a < arrayData2.length; a++) {    

    var f = arrayData2[a].PeriodoFecha;
    var arrayFechon = f.split("-");
    var yearEmpresa = parseInt(arrayFechon[0]);
    var monthEmpresa = parseInt(arrayFechon[1]);
    if (
      id == arrayData2[a].NombreDocumento &&
      anio == yearEmpresa &&
      mes == monthEmpresa &&
      arrayData2[a].Status == "0"
    ) {
      idRetorno = arrayData2[a].DocumentosID;
    }
  }
  return idRetorno;
}
function busquedaArrayRetornoProv(id, anio, mes) {
  var idRetorno = 0;
  var arrayData2 = $("#CabeceraTabla").data("ProveedorDatos");
  for (var a = 0; a < arrayData2.length; a++) {
    var f = arrayData2[a].PeriodoFecha;
    var arrayFechon = f.split("-");
    var yearEmpresa = parseInt(arrayFechon[0]);
    var monthEmpresa = parseInt(arrayFechon[1]);
    /*            var f = new Date(arrayData2[a].PeriodoFecha);
            var yearEmpresa = f.getFullYear();
            var monthEmpresa = f.getMonth() + 1;*/
    if (
      id == arrayData2[a].NombreDocumento &&
      anio == yearEmpresa &&
      mes == monthEmpresa &&
      arrayData2[a].Status == "1"
    ) {
      idRetorno = arrayData2[a].DocumentosID;
    }
  }
  return idRetorno;
}
function busquedaArrayRetornoProv2(id, anio, mes) {
  var idRetorno = 0;
  var arrayData2 = $("#CabeceraTabla").data("ProveedorDatos");
  for (var a = 0; a < arrayData2.length; a++) {
    var f = arrayData2[a].PeriodoFecha;
    var arrayFechon = f.split("-");
    var yearEmpresa = parseInt(arrayFechon[0]);
    var monthEmpresa = parseInt(arrayFechon[1]);
    /*            var f = new Date(arrayData2[a].PeriodoFecha);
            var yearEmpresa = f.getFullYear();
            var monthEmpresa = f.getMonth() + 1;*/
    if (
      id == arrayData2[a].NombreDocumento &&
      anio == yearEmpresa &&
      mes == monthEmpresa &&
      arrayData2[a].Status == "2"
    ) {
      idRetorno = arrayData2[a].DocumentosID;
    }
  }
  return idRetorno;
}
function busquedaArrayRetornoProv3(id, anio, mes) {
  var idRetorno = 0;
  var arrayData2 = $("#CabeceraTabla").data("ProveedorDatos");
  for (var a = 0; a < arrayData2.length; a++) {
    /*            var f = new Date(arrayData2[a].PeriodoFecha);
            var yearEmpresa = f.getFullYear();
            var monthEmpresa = f.getMonth() + 1;*/
    var f = arrayData2[a].PeriodoFecha;
    var arrayFechon = f.split("-");
    var yearEmpresa = parseInt(arrayFechon[0]);
    var monthEmpresa = parseInt(arrayFechon[1]);
    if (
      id == arrayData2[a].NombreDocumento &&
      anio == yearEmpresa &&
      mes == monthEmpresa &&
      arrayData2[a].Status == "3"
    ) {
      idRetorno = arrayData2[a].DocumentosID;
    }
  }
  return idRetorno;
}

function busquedaArrayRetorno2(empleado, Documento, anio, mes) {
  var idRetorno = 0;
  var arrayData = $("#CabeceraTabla").data("EmpleadosDatos");  
  // console.log(arrayData);
  for (var j = 0; j < arrayData.length; j++) {
    cadena3 = "";
    var documentosArray = arrayData[j].DocumentosEmpleados;    
    
    for (var k = 0; k < documentosArray.length; k++) {      


      if (documentosArray[k].Fecha == null) {          
        documentosArray[k].Fecha = "2022-05-01";              
      }                        

      var f = documentosArray[k].Fecha;
      var arrayFechon = f.split("-");
      var yearEmpleado = parseInt(arrayFechon[0]);
      var monthEmpleados = parseInt(arrayFechon[1]);      

      if (
        empleado == arrayData[j].Empleado_ID &&
        Documento == documentosArray[k].Documentos &&
        anio == yearEmpleado &&
        mes == monthEmpleados &&
        documentosArray[k].Status == "0"
      ) {
        idRetorno = documentosArray[k].ID;
        // console.log("-",idRetorno);
      }
    }
  }
  return idRetorno;
}
function busquedaArrayRetornoEmp1(empleado, Documento, anio, mes) {
  var idRetorno = 0;
  var arrayData = $("#CabeceraTabla").data("EmpleadosDatos");
  for (var j = 0; j < arrayData.length; j++) {
    cadena3 = "";
    var documentosArray = arrayData[j].DocumentosEmpleados;    
    for (var k = 0; k < documentosArray.length; k++) {      

      if (documentosArray[k].Fecha == null) {          
        documentosArray[k].Fecha = "2022-05-01";              
      }    

      var f = documentosArray[k].Fecha;
      var arrayFechon = f.split("-");
      var yearEmpleado = parseInt(arrayFechon[0]);
      var monthEmpleados = parseInt(arrayFechon[1]);
      
      if (
        empleado == arrayData[j].Empleado_ID &&
        Documento == documentosArray[k].Documentos &&
        anio == yearEmpleado &&
        mes == monthEmpleados &&
        documentosArray[k].Status == "1"
      ) {
        idRetorno = documentosArray[k].ID;
      }
    }
  }
  return idRetorno;
}
function busquedaArrayRetornoEmp2(empleado, Documento, anio, mes) {
  var idRetorno = 0;
  var arrayData = $("#CabeceraTabla").data("EmpleadosDatos");
  // console.log(arrayData);
  for (var j = 0; j < arrayData.length; j++) {   
    
    // console.log(arrayData[j].DocumentosEmpleados);
    
    cadena3 = "";
    var documentosArray = arrayData[j].DocumentosEmpleados;
    for (var k = 0; k < documentosArray.length; k++) {      

      if (documentosArray[k].Fecha == null) {          
        documentosArray[k].Fecha = "2022-05-01";              
      }    

      var f = documentosArray[k].Fecha;
      var arrayFechon = f.split("-");
      var yearEmpleado = parseInt(arrayFechon[0]);
      var monthEmpleados = parseInt(arrayFechon[1]);      

      if (
        empleado == arrayData[j].Empleado_ID &&
        Documento == documentosArray[k].Documentos &&
        anio == yearEmpleado &&
        mes == monthEmpleados &&
        documentosArray[k].Status == "2"
      ) {
        idRetorno = documentosArray[k].ID;
      }
    }
  }
  return idRetorno;
}
function busquedaArrayRetornoEmp3(empleado, Documento, anio, mes) {
  var idRetorno = 0;
  var arrayData = $("#CabeceraTabla").data("EmpleadosDatos");
  for (var j = 0; j < arrayData.length; j++) {
    cadena3 = "";
    var documentosArray = arrayData[j].DocumentosEmpleados;
    for (var k = 0; k < documentosArray.length; k++) {   
      
      if (documentosArray[k].Fecha == null) {          
        documentosArray[k].Fecha = "2022-05-01";              
      }    

      var f = documentosArray[k].Fecha;
      var arrayFechon = f.split("-");
      var yearEmpleado = parseInt(arrayFechon[0]);
      var monthEmpleados = parseInt(arrayFechon[1]);

      if (
        empleado == arrayData[j].Empleado_ID &&
        Documento == documentosArray[k].Documentos &&
        anio == yearEmpleado &&
        mes == monthEmpleados &&
        documentosArray[k].Status == "3"
      ) {
        idRetorno = documentosArray[k].ID;
      }
    }
  }
  return idRetorno;
}

// Start Cambiar Status Proveedor
function CargarProveedores(idDoc) {
  // console.log($("#File" + idDoc).val());
  var formData = new FormData(document.getElementById("SubirArchivo" + idDoc));  
  formData.append("id", idDoc);
  $.ajax({
    url: "apirest/CambiarEstadoDocumento.php",
    type: "post",
    dataType: "json",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    setTimeout(function () {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: "slideDown",
        timeOut: 8000,
      };
      toastr.success("Documento Subido Correctamente.", "Éxito!");
    }, 1300);

    var botonWarning =
      '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
      idDoc +
      '">' +
      '<label for="File' +
      idDoc +
      '">' +
      '<span class="btn btn-warning editar btn-circle btn-outline tooltip_detalles" data-info="Subir Comprobante de Pago" style="padding: 3px 6px"><i class="fa fa-warning"></i>' +
      '<input type="file" multiple id="File' +
      idDoc +
      '" style="display:none" onChange="CargarComprobanteProveedor(' +
      idDoc +
      ')">' +
      "</span>" +
      "</label>" +
      "</form>";
    $("#MiDiv" + idDoc).html(botonWarning);
    $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
  });
}

function CargarComprobanteProveedor(idDoc) {
  console.log($("#File" + idDoc).val());
  var formData = new FormData(document.getElementById("SubirArchivo" + idDoc));
  formData.append("id", idDoc);
  $.ajax({
    url: "apirest/CambiarEstadoDocumentoComprobante.php",
    type: "post",
    dataType: "json",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    setTimeout(function () {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: "slideDown",
        timeOut: 4000,
      };
      toastr.success("Comprobante Subido Correctamente", "Éxito!");
    }, 1300);

    var botonCheck =
      '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
      idDoc +
      '">' +
      '<label for="File' +
      idDoc +
      '">' +
      '<span class="btn btn-info editar btn-circle btn-outline tooltip_detalles" data-info="Pendiente Por Validación"  onClick="CheckProveedores(' +
      idDoc +
      ')" style="padding: 3px 9.9px"><i class="fa fa-info"></i>' +
      // '<input type="button" id="File'+idDoc+'" style="display:none" onChange="CheckProveedores('+idDoc+')">'+
      "</span>" +
      "</label>" +
      "</form>";
    // var cadena='<span class="btn btn-info btn-circle btn-outline tooltip_detalles mt-1 mb-1" data-info="Subir comprobante de pago" style="padding: 3px 5px; width:25px; height:25px;"><i class="fa fa-info"></i></span>'
    $("#MiDiv" + idDoc).html(botonCheck);
    $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
  });
}

function CheckProveedores(idDoc) {
  console.log($("#File" + idDoc).val());
  var formData = new FormData(document.getElementById("SubirArchivo" + idDoc));
  formData.append("id", idDoc);
  $.ajax({
    url: "apirest/CambiarEstadoDocumentoCheck.php",
    type: "post",
    dataType: "json",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    setTimeout(function () {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: "slideDown",
        timeOut: 4000,
      };
      toastr.success("Documento Verificado Correctamente", "Éxito!");
    }, 1300);

    var botonCheck =
      '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
      idDoc +
      '">' +
      '<label for="File' +
      idDoc +
      '">' +
      '<span class="btn btn-secondary editar btn-circle btn-outline tooltip_detalles" data-info="Válido" style="padding: 3px 6px"><i class="fa fa-check"></i>' +
      '<input type="file" multiple id="File' +
      idDoc +
      '" style="display:none" onChange="CargarComprobanteProveedor(' +
      idDoc +
      ')">' +
      "</span>" +
      "</label>" +
      "</form>";
    // var cadena='<span class="btn btn-info btn-circle btn-outline tooltip_detalles mt-1 mb-1" data-info="Subir comprobante de pago" style="padding: 3px 5px; width:25px; height:25px;"><i class="fa fa-info"></i></span>'
    $("#MiDiv" + idDoc).html(botonCheck);
    $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
  });
}



function CargarEmpleadoEmpresa(idDoc) {
  // console.log($("#File" + idDoc).val());
  var formData = new FormData(document.getElementById("SubirArchivoE" + idDoc));
  console.log(idDoc);
  formData.append("id", idDoc);
  $.ajax({
    url: "apirest/CambiarEstadoDocumento.php",
    type: "post",
    dataType: "json",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {    
    setTimeout(function () {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: "slideDown",
        timeOut: 8000,
      };
      toastr.success("Documento Subido Correctamente.", "Éxito!");
    }, 1300);

    var botonWarning =
      '<form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivoE' +
      idDoc +
      '">' +
      '<label for="File' +
      idDoc +
      '">' +
      '<span class="btn btn-warning editar btn-circle btn-outline tooltip_detalles" data-info="Subir Comprobante de Pago" style="padding: 3px 6px"><i class="fa fa-warning"></i>' +
      '<input type="file" multiple id="File' +
      idDoc +
      '" style="display:none" onChange="CargarEmpleadoEmpresa(' +
      idDoc +
      ')">' +
      "</span>" +
      "</label>" +
      "</form>";
    $("#MiDivE" + idDoc).html(botonWarning);
    $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
    // var cadena =
    //   '<span class="btn btn-success btn-circle btn-outline tooltip_detalles mt-1 mb-1" data-info="Documento Subido" style="padding: 3px 5px; width:25px; height:25px;"><i class="fa fa-check-circle"></i></span>';
    // $("#MiDivE" + idDoc).html(cadena);
    // $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
  });  
}
// End Cambiar Status Proveedor

function Cargar(idEmpleado, idDoc) {
  // $("#ProveedorPrincipal").css('display','none');
  // $("#Trabajador").css('display','none');
  $("#Cargar").css("display", "block");
}

function DatosDocumentosFaltantes() {
  $(document).ready(function () {
    $("#tablaReporte").DataTable({
      pageLength: 10,
      responsive: true,
      order: [[0, "desc"]],
      dom: '<"html5buttons"B>lTfgitp',
      ajax: {
        url: "./apirest/documentosFaltantes.php",
        type: "GET",
        // 'dataSrc':''
      },
      columns: [
        { data: "Name_Proveedor" },
        { data: "Nombres" },
        { data: "Apellidos" },
        { data: "NombreDocumentos" },
        { data: "Periodos" },
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
        // {extend: 'csv',
        // // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">CSV</button>'
        // },
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

////////////////////////////////////////////////////////////
function DatosFaltantesProvedorCliente() {
  var meses = $("#FiltroMes").val();
  $(document).ready(function () {
    var table = $("#tablaDocumentosFaltantesProveedor").DataTable({
      pageLength: 10,
      responsive: true,
      order: [[0, "desc"]],
      dom: '<"html5buttons"B>lTfgitp',
      ajax: {
        url: "./apirest/DatosFaltantesProvedorClientes.php?meses=" + meses,
        type: "GET",
        // 'dataSrc':''
      },
      columns: [
        { data: "Name_Or_Tilte" },
        // {'data': 'TotalFacturasProveedores'},
        { data: "Rfc_Empresa" },
        { data: "Número_De_La_Orden_De_Compra" },
        { data: "Número_De_La_Factura" },
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
        // {'data': 'Proyectos'},

        { data: "Estatus_Proveedor_Servicios_Especializados" },
        {
          data: null,
          render: function (data) {
            var btnMoneda =
              "<span class='badge badge-success tooltip_detalles' style='cursor: pointer;' data-info='USD'>USD</span>";
            return "<center>" + btnMoneda + "</center>";
          },
        },
        { data: "Total01" },
        {
          data: null,
          render: function (data) {
            var btnDucumentosFaltantesEmpleados =
              " <button id ='" +
              data.ID +
              "' type='button' data-toggle='modal' data-target='#Trabajador' class='btn btn-success btn-circle btn-outline btn-sm  docEmpleados tooltip_detalles' data-info='Documentos Faltantes Empleados'><i class='fa fa-user' style=''></i></button>";
            var btnDucumentosFaltantesProveedor =
              " <button id ='" +
              data.ID +
              "' type='button' data-toggle='modal' data-target='#Proveedor' class='btn btn-info btn-circle btn-outline btn-sm docProveedor tooltip_detalles' data-info='Documentos Faltantes Proveedor'><i class='fa fa-home' style=''></i></button>";
            return (
              "<center>" +
              btnDucumentosFaltantesProveedor +
              btnDucumentosFaltantesEmpleados +
              "</center>"
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
        // {extend: 'csv',
        // // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">CSV</button>'
        // },
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

    obtenerDatosFaltantesProvedorClientes(
      "#tablaDocumentosFaltantesProveedor tbody",
      table
    );
  });
}

function FiltroMesCliente() {
  var mes = $("#FiltroMes").val();
  console.log(mes);
  const myArray = mes.split("/");
  // let word = myArray[0];

  console.log(myArray[0]);
  $("#tableProvedores").html("");

  var cadena =
    "" +
    '<table id="tablaDocumentosFaltantesProveedor" class="tableCustomize table table-bordered table-hover ">' +
    "<thead>" +
    '<tr class="tr">' +
    '<th width="20%">Proveedor</th>' +
    "<th>RFC</th>" +
    "<th>Factura</th>" +
    "<th>Proyecto</th>" +
    "<th>Status</th>" +
    "<th>Total</th>" +
    "<th>Opciones</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    "</tbody>" +
    "</table>";
  $("#tableProvedores").html(cadena);

  // var meses = $('#FiltroMes').val();

  var table = $("#tablaDocumentosFaltantesProveedor").DataTable({
    pageLength: 10,
    responsive: true,
    order: [[0, "desc"]],
    dom: '<"html5buttons"B>lTfgitp',
    ajax: {
      url: "./apirest/filtroMes.php?mes=" + myArray[0],
      type: "GET",
      // 'dataSrc':''
    },
    columns: [
      { data: "Name_Or_Tilte" },
      // {'data': 'TotalFacturasProveedores'},
      { data: "Rfc_Empresa" },
      // {'data': 'Número_De_La_Orden_De_Compra'},
      { data: "Número_De_La_Factura" },
      { data: "Proyectos" },
      { data: "Estatus_Proveedor_Servicios_Especializados" },
      { data: "Total01" },
      {
        data: null,
        render: function (data) {
          var btnDucumentosFaltantesEmpleados =
            " <button id ='" +
            data.ID +
            "' type='button' data-toggle='modal' data-target='#Trabajador' class='btn btn-success btn-circle btn-outline btn-sm  docEmpleados tooltip_detalles' data-info='Documentos Faltantes Empleados'><i class='fa fa-user' style=''></i></button>";
          var btnDucumentosFaltantesProveedor =
            " <button id ='" +
            data.ID +
            "' type='button' data-toggle='modal' data-target='#Proveedor' class='btn btn-info btn-circle btn-outline btn-sm docProveedor tooltip_detalles' data-info='Documentos Faltantes Proveedor'><i class='fa fa-home' style=''></i></button>";
          return (
            "<center>" +
            btnDucumentosFaltantesProveedor +
            btnDucumentosFaltantesEmpleados +
            "</center>"
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
        // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">Copiar</button>'
        // text: '<button class="btn btn-danger">Exportar a PDF <i class="far fa-file-pdf"></i></button>'
      },
      // {extend: 'csv',
      // // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">CSV</button>'
      // },
      {
        extend: "excel",
        title: "ExampleFile",
        // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">Excel</button>'
      },
      {
        extend: "pdf",
        title: "ExampleFile",
        // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">PDF</button>'
      },
    ],
    language: idioma,
  });

  obtenerDatosFaltantesProvedor(
    "#tablaDocumentosFaltantesProveedor tbody",
    table
  );
}

function obtenerDatosFaltantesProvedorClientes(tbody, table) {
  $('[data-tooltip="tooltip"]').tooltip();
  $('[data-toggle="tooltip"]').toggle();
  $(tbody).on("click", "button.docProveedor", function () {
    var data = table.row($(this).parents("tr")).data();
    console.log(data.detallesProveedores);

    $("#DivTbDtailP").html("");
    var cadena =
      "" +
      '<table id="tablaDocumentosFaltantesTrabajadores" class="tableCustomize table table-bordered table-hover ">' +
      "<thead>" +
      '<tr class="tr">' +
      '<th width="20%">Proveedor</th>' +
      "<th>Nombre Documentos</th>" +
      "<th>Periodo</th>" +
      "<th>Tipo Documento</th>" +
      '<th width="10%">Periodo</th>' +
      "</tr>" +
      "</thead>" +
      '<tbody id="tbody-detalle-documentos">' +
      "</tbody>" +
      "</table>";
    $("#DivTbDtailP").html(cadena);

    for (let a = 0; a < data.detallesProveedores.length; a++) {
      //  console.log(data.detallesProveedores[a]);
      var botonInput =
        '<div id="MiDiv' +
        data.detallesProveedores[a].ID +
        '"><form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivo' +
        data.detallesProveedores[a].ID +
        '"> <label for="File' +
        data.detallesProveedores[a].ID +
        '">' +
        '<span class="btn btn-warning editar btn-circle btn-outline tooltip_detalles" data-info="Subir Documento" style="padding-left: 8px;padding-right: 8px; border-radius: 20px;"><i style="" class="fa fa-warning"></i></span>' +
        '<input type="file" id="File' +
        data.detallesProveedores[a].ID +
        '" style="display:none" onChange="CargarProveedores(' +
        data.detallesProveedores[a].ID +
        ')">' +
        "</label></form></div>";
      var botonVer =
        '<button style="margin-right: 3px;" class="btn btn-success btn-circle btn-outline tooltip_detalles" data-info="Revisar" type="button"><i class="fa fa-sticky-note-o"></i></button>';
      var botonEliminar =
        '<button class="btn btn-danger btn-circle btn-outline tooltip_detalles" data-info="Eliminar" type="button"><i class="fa fa-trash-o"></i></button>';
      $("#tbody-detalle-documentos").append(
        "<tr> <td>" +
          data.detallesProveedores[a].Proveedor +
          "</td><td>" +
          data.detallesProveedores[a].NombreDocumento +
          "</td><td><center>" +
          data.detallesProveedores[a].Periodo +
          "</center></td><td><center>" +
          data.detallesProveedores[a].TipoDocumento +
          "</center></td><td align='center' style='display: flex;'>" +
          botonVer +
          botonInput +
          botonEliminar +
          "</td></tr>"
      );
    }

    setTimeout(() => {
      var table = $("#tablaDocumentosFaltantesTrabajadores").DataTable({
        pageLength: 10,
        responsive: true,
        order: [[0, "desc"]],
        dom: '<"html5buttons"B>lTfgitp',
        // scrollY: "300px",
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
          // {extend: 'csv',
          // // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">CSV</button>'
          // },
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
        destroy: true,
      });
    }, 300);
    // $("#ProveedorPrincipal").css('display','none');
    // $("#Proveedor").css('display','block');
  });

  //////////////////////////////////////// EMPLEADOS /////////////////////////////
  $(tbody).on("click", "button.docEmpleados", function () {
    var data = table.row($(this).parents("tr")).data();
    console.log(data);
    data.detallesEmpleados.length;

    $("#DivTbDtailE").html("");
    var cadena =
      "" +
      '<table id="tablaDocumentosFaltantesEmpleados" class="tableCustomize table table-hover ">' +
      "<thead>" +
      '<tr class="tr">' +
      '<th width="10%">Empleado</th>' +
      '<th width="7%">CFDI</th>' +
      '<th width="7%">Contrato</th>' +
      '<th width="13%">Inscripción IMSS</th>' +
      '<th width="10%">Periodo</th>' +
      "</tr>" +
      "</thead>" +
      '<tbody id="tbody-detalle-documentos-empleados">' +
      "</tbody>" +
      "</table>";
    $("#DivTbDtailE").html(cadena);

    for (let a = 0; a < data.detallesEmpleados.length; a++) {
      console.log(data.detallesEmpleados[a]);
      //  console.log(data.detallesEmpleados[a]);
      var botonInput =
        '<div id="MiDivE' +
        data.detallesEmpleados[a].ID +
        '"><form style="margin-top: 5px; margin-right: 3px;" id="SubirArchivoE' +
        data.detallesEmpleados[a].ID +
        '"> <label for="File' +
        data.detallesEmpleados[a].ID +
        '">' +
        '<span class="btn btn-warning editar btn-circle btn-outline tooltip_detalles" data-info="Subir Documento" style="padding-left: 8px;padding-right: 8px; border-radius: 20px;"><i style="" class="fa fa-warning"></i></span>' +
        '<input type="file" multiple id="File' +
        data.detallesEmpleados[a].ID +
        '" style="display:none" onChange="CargarEmpleadoE(' +
        data.detallesEmpleados[a].ID +
        ')">' +
        "</label></form></div>";
      var botonVer =
        '<button style="margin-right: 3px;" class="btn btn-success btn-circle btn-outline tooltip_detalles" data-info="Revisar" type="button"><i class="fa fa-sticky-note-o"></i></button>';
      var botonEliminar =
        '<button class="btn btn-danger btn-circle btn-outline tooltip_detalles" data-info="Eliminar" type="button"><i class="fa fa-trash-o"></i></button>';
      $("#tbody-detalle-documentos-empleados").append(
        "<tr> <td>" +
          data.detallesEmpleados[a].Empleado +
          "</td><td>" +
          data.detallesEmpleados[a].Vigencia +
          "</td><td align='center'>0</td><td align='center'>0</td><td align='center' style='display: flex;'>" +
          botonVer +
          botonInput +
          botonEliminar +
          "</td></tr>"
      );

      // $("#tbody-detalle-documentos-empleados").append(
      //     "<tr><td>"
      //     +data.detallesEmpleados[a].Empleado
      //     +"</td><td align='center'>"
      //     +data.detallesEmpleados[a].Vigencia
      //     +"<td align='center'>0</td><td align='center'>0</td><td align='center'><button onClick='Cargar("+data.detallesEmpleados[a].EmpleadoID+", "+data.detallesEmpleados[a].DocumentoID+")' data-info='"+data.detallesEmpleados[a].FechaCreacion.date+"' class='btn btn-danger tooltip_detalles editar btn-circle btn-outline'><i style='' class='fa fa-warning'></i></button></td></tr>");
    }

    setTimeout(() => {
      var table = $("#tablaDocumentosFaltantesEmpleados").DataTable({
        pageLength: 10,
        responsive: true,
        order: [[0, "desc"]],
        dom: '<"html5buttons"B>lTfgitp',
        // scrollY: "300px",
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
          // {extend: 'csv',
          // // text: '<button class="btn btn-xs btn-outline btn-info  dim" style="margin-right:0px!important" type="button">CSV</button>'
          // },
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
        destroy: true,
      });
    }, 300);

    // $("#ProveedorPrincipal").css('display','none');
    // $("#Trabajador").css('display','block');
  });

  //////////////////////////////////////// EMPLEADOS /////////////////////////////
}

function CargarProveedoresClientes(idDoc) {
  console.log($("#File" + idDoc).val());
  var formData = new FormData(document.getElementById("SubirArchivo" + idDoc));
  formData.append("id", idDoc);
  $.ajax({
    url: "apirest/CambiarEstadoDocumento.php",
    type: "post",
    dataType: "json",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    var cadena =
      '<span style="padding-left: 9px;padding-right: 9px; border-radius: 20px;" class="btn btn-success btn-circle btn-outline tooltip_detalles" data-info="Documento Subido!"><i style="" class="fa fa-check-circle"></i></span>';
    $("#MiDiv" + idDoc).html(cadena);
    $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
  });
  // $("#ProveedorPrincipal").css('display','none');
  // $("#Trabajador").css('display','none');
  //    $("#DivTbDtailP").css('display','none');
  //    $("#CargarProveedores").css('display','block');
}

function CargarEmpleadoE(idDoc) {
  console.log($("#File" + idDoc).val());
  var formData = new FormData(document.getElementById("SubirArchivoE" + idDoc));
  formData.append("id", idDoc);
  $.ajax({
    url: "apirest/CambiarEstadoDocumento.php",
    type: "post",
    dataType: "json",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  }).done(function (res) {
    var cadena =
      '<span style="padding-left: 9px;padding-right: 9px; border-radius: 20px;" class="btn btn-success btn-circle btn-outline tooltip_detalles" data-info="Documento Subido!"><i style="" class="fa fa-check-circle"></i></span>';
    $("#MiDivE" + idDoc).html(cadena);
    $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
  });
  // $("#ProveedorPrincipal").css('display','none');
  // $("#Trabajador").css('display','none');
  //    $("#DivTbDtailP").css('display','none');
  //    $("#CargarProveedores").css('display','block');
}
///////////////////////////////////////////////////////////

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
