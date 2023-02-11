$(function () {
  $('[data-tooltip="tooltip"]').tooltip();
  $('[data-toggle="tooltip"]').toggle();
});

function DatosFaltantesProvedor() {
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
              "<span class='badge badge-success' style='cursor: pointer;'>USD</span>";
            return "<center>" + btnMoneda + "</center>";
          },
        },
        { data: "Total01" },
        {
          data: null,
          render: function (data) {
            // var btnDucumentosFaltantesEmpleados=" <button id ='"+data.ID+"' type='button' data-toggle='modal' data-target='#Trabajador' class='btn btn-success btn-circle btn-outline btn-sm d-inline docEmpleados tooltip_detalles' data-info='Documentos Faltantes Empleados'><i class='fa fa-user' style=''></i></button>";
            // var btnDucumentosFaltantesProveedor=" <button id ='"+data.ID+"' type='button' data-toggle='modal' data-target='#Proveedor' class='btn btn-info btn-circle btn-outline btn-sm d-inline docProveedor tooltip_detalles' data-info='Documentos Faltantes Proveedor'><i class='fa fa-home' style=''></i></button>";
            var btnDucumentosFaltantesProveedorPivote =
              " <button id ='" +
              data.ID +
              "' type='button' class='btn btn-success btn-circle btn-outline btn-sm d-inline docProveedorPivote tooltip_detalles' data-info='Reporte Faltantes Proveedor'><i class='fa fa-bar-chart-o' style=''></i></button>";
            // var btnDucumentosFaltantesProveedorPivote=" <button id ='"+data.ID+"' type='button' data-toggle='modal' data-target='#Proveedor' class='btn btn-primary btn-circle btn-outline btn-sm d-inline docProveedorPivote tooltip_detalles' data-info='Reporte Faltantes Proveedor'><i class='fa fa-home' style=''></i></button>";
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

    obtenerDatosFaltantesProvedor(
      "#tablaDocumentosFaltantesProveedor tbody",
      table
    );
  });
}

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
        '<input type="file" multiple id="File' +
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

  //////////////////////////////////////// EMPLEADOS /////////////////////////////

  //////////////////////////////////////// EMPLEADOSPIVOTE /////////////////////////////
  $(tbody).on("click", "button.docProveedorPivote", function () {
    $("#ProveedorPrincipal").css("display", "none");
    $("#ProveedorPage").css("display", "block");

    var data = table.row($(this).parents("tr")).data();
    console.log("Data: ", data);
    //                data.detallesEmpleados.length;
    var cadena = "";
    var cadena2 = "";
    var cadena3 = "";
    var aniosInvolucrados = [];
    var mesesInvolucrados = [];
    var rowspan = 0;
    var rowspan2 = 0;

    cadena2 = "";
    var arrayData = data.detallesEmpleados;
    //console.log(arrayData);
    /////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////Carga de periodos////////////////////////////////////////
    for (var jPer = 0; jPer < arrayData.length; jPer++) {
      var documentosArrayPer = arrayData[jPer].DocumentosEmpleados;
      for (var kPer = 0; kPer < documentosArrayPer.length; kPer++) {
        var fPer = new Date(documentosArrayPer[kPer].Fecha);
        var yearEmpleadoPer = fPer.getFullYear();
        var monthEmpleadosPer = fPer.getMonth() + 1;
        aniosInvolucrados.push(yearEmpleadoPer);
        var arrayMes = {
          mes: monthEmpleadosPer,
          anio: yearEmpleadoPer,
        };
        mesesInvolucrados.push(arrayMes);
      }
    }
    ////////////////////////////////////////////////////////////////////
    var arrayDataPer2 = data.detallesProveedores;
    for (var aPer = 0; aPer < arrayDataPer2.length; aPer++) {
      var fPer = new Date(arrayDataPer2[aPer].PeriodoFecha);
      var yearEmpresaPer = fPer.getFullYear();
      var monthEmpresaPer = fPer.getMonth() + 1;
      aniosInvolucrados.push(yearEmpresaPer);
      var arrayMes = {
        mes: monthEmpresaPer,
        anio: yearEmpresaPer,
      };
      mesesInvolucrados.push(arrayMes);
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

    let unicos = [...mesesMapArr.values()]; // Conversión a un array

    mesesInvolucrados = unicos;
    console.log("Fechas involucradas", aniosInvolucrados);
    console.log("Meses involucradas", mesesInvolucrados);
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
    //                    cabecera=cabecera+'<td class="text-center" style="background-color: transparent!important; height: 40px;">Opciones</td>';

    $("#CabeceraTabla").html(cabecera);
    ////////////////////////////////Carga de periodos////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////Limpiar array////////////////////////////////////////////////////////////

    const arrayDataOriginal1 = data.detallesEmpleados2;
    console.log("Antes de limpieza", arrayDataOriginal1);
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
              '<span class="btn btn-success editar btn-circle btn-outline tooltip_detalles" data-info="Subir Documento" style="padding: 3px 8px;">1' +
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
            cadenaIntegrada =
              cadenaIntegrada +
              '<td class="text-center celda' +
              data.detallesEmpleados[j].Empleado_ID +
              " A" +
              mesesInvolucrados[cab].anio +
              " CeldaMes" +
              data.ID +
              '" style="display:none"></td>';
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
          //                                '<td class="celda'+data.detallesEmpleados[j].Empleado_ID+'" style="display:none; text-align:center;">'+yearEmpleado+'</td>'+
          //                                '<td class="celda'+data.detallesEmpleados[j].Empleado_ID+'" style="display:none; text-align:center;">'+monthEmpleados+'</td>'+
          //                                '<td class="text-center celda'+data.detallesEmpleados[j].Empleado_ID+'" style="display:none">'+botonInput+'</td>'+
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

    console.log(arrayData2);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////Limpiar array////////////////////////////////////////////////////////////
    var arrayDataOriginal2 = arrayData2;

    const unicosP = [];

    for (var indice = 0; indice < arrayData2.length; indice++) {
      const registro = arrayData2[indice];
      let esDuplicado = false;
      for (var i = 0; i < unicosP.length; i++) {
        if (
          unicosP[i].DocumentosID === registro.DocumentosID &&
          unicosP[i].ProveedorID === registro.ProveedorID
        ) {
          esDuplicado = true;
          break;
        }
      }
      if (!esDuplicado) {
        unicosP.push(registro);
      }
    }
    arrayData2 = unicosP;
    rowspan2 = arrayData2.length;
    ////////////////////////////////////////////Limpiar array////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    console.log("Proveedor array doc: ", arrayDataOriginal2);
    $("#CabeceraTabla").data("ProveedorDatos", arrayDataOriginal2);
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

      // console.log(year);
      // console.log(month);
      var cadenaIntegrada = "";
      for (var cab = 0; cab < mesesInvolucrados.length; cab++) {
        var retorno = busquedaArrayRetorno(
          arrayData2[a].DocumentosID,
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
            '<span class="btn btn-success editar btn-circle btn-outline tooltip_detalles" data-info="Subir Documento" style="padding: 3px 8px;">1' +
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
          cadenaIntegrada =
            cadenaIntegrada +
            '<td class=" text-center celdaC' +
            data.ID +
            " A" +
            mesesInvolucrados[cab].anio +
            '" style="display:none"></td>';
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
      //                            '<td class="celdaC'+data.ID+'" style="display:none; text-align:center;">'+yearEmpresa+'</td>'+
      //                            '<td class="celdaC'+data.ID+'" style="display:none; text-align:center;">'+monthEmpresa+'</td>'+
      //                            '<td class="text-center celdaC'+data.ID+'" style="display:none">'+botonInput+'</td></tr>';
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

  //////////////////////////////////////// EMPLEADOS /////////////////////////////
}

function busquedaArrayRetorno(id, anio, mes) {
  var idRetorno = 0;
  var arrayData2 = $("#CabeceraTabla").data("ProveedorDatos");
  for (var a = 0; a < arrayData2.length; a++) {
    var f = new Date(arrayData2[a].PeriodoFecha);
    var yearEmpresa = f.getFullYear();
    var monthEmpresa = f.getMonth() + 1;
    if (
      id == arrayData2[a].DocumentosID &&
      anio == yearEmpresa &&
      mes == monthEmpresa
    ) {
      idRetorno = arrayData2[a].ID;
    }
  }
  return idRetorno;
}

function busquedaArrayRetorno2(empleado, Documento, anio, mes) {
  var idRetorno = 0;
  var arrayData = $("#CabeceraTabla").data("EmpleadosDatos");
  for (var j = 0; j < arrayData.length; j++) {
    cadena3 = "";
    var documentosArray = arrayData[j].DocumentosEmpleados;
    for (var k = 0; k < documentosArray.length; k++) {
      var f = new Date(documentosArray[k].Fecha);
      var yearEmpleado = f.getFullYear();
      var monthEmpleados = f.getMonth() + 1;
      if (
        empleado == arrayData[j].Empleado_ID &&
        Documento == documentosArray[k].Documentos &&
        anio == yearEmpleado &&
        mes == monthEmpleados
      ) {
        idRetorno = documentosArray[k].ID;
      }
    }
  }
  return idRetorno;
}

function CargarProveedores(idDoc) {
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
      '<span class="btn btn-success btn-circle btn-outline tooltip_detalles mt-1 mb-1" data-info="Documento Subido" style="padding: 3px 5px; width:25px; height:25px;"><i class="fa fa-check-circle"></i></span>';
    $("#MiDiv" + idDoc).html(cadena);
    $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
  });
}

function CargarEmpleadoEmpresa(idDoc) {
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
      '<span class="btn btn-success btn-circle btn-outline tooltip_detalles mt-1 mb-1" data-info="Documento Subido" style="padding: 3px 5px; width:25px; height:25px;"><i class="fa fa-check-circle"></i></span>';
    $("#MiDivE" + idDoc).html(cadena);
    $("#tablaDocumentosFaltantesProveedor").DataTable().ajax.reload();
  });
  // $("#ProveedorPrincipal").css('display','none');
  // $("#Trabajador").css('display','none');
  //    $("#DivTbDtailP").css('display','none');
  //    $("#CargarProveedores").css('display','block');
}

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

function TotalOrdenes() {
  $(document).ready(function () {
    $("#tablaTotalOrdenes").DataTable({
      pageLength: 10,
      responsive: true,
      order: [[0, "desc"]],
      bPaginate: false,
      bFilter: false,
      bInfo: false,
      ajax: {
        url: "./apirest/DatosFaltantesProvedor.php",
        type: "GET",
        // 'dataSrc':''
      },
      columns: [
        { data: "Name_Or_Tilte" },
        // {"data": "Rfc_Empresa"},
        { data: "Número_De_La_Orden_De_Compra" },
        // {"data": 'ok'},
        // {"data": "Número_De_La_Factura"},
        { data: "Total01" },
        { data: "TotalEmpleados" },
        // {'data': 'Estatus_Proveedor_Servicios_Especializados'},
      ],
      language: idioma,
    });
  });
}

function top5() {
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
        url: "./apirest/DatosFaltantesProvedor.php",
        type: "GET",
        // 'dataSrc':''
      },
      columns: [
        { data: "Name_Or_Tilte" },
        { data: "TotalEmpleados" },
        // {"data": "Proyectos"},
        { data: "Total01" },
        // {"data": "Rfc_Empresa"}
      ],
      language: idioma,
    });
  });
}

function listasNegrasP() {
  $("#listasNegras").DataTable({
    responsive: true,
    order: [[0, "desc"]],
    bPaginate: false,
    bFilter: false,
    bInfo: false,
    // pageLength: 10,
    // dom: '<"html5buttons"B>lTfgitp',
    ajax: {
      url: "./apirest/listasNegras.php",
      type: "GET",
      // 'dataSrc':''
    },
    columns: [
      {
        data: null,
        render: function (data) {
          var btnListasNegras =
            "<p class='tooltip_detalles' data-info='69 - 69b'>" +
            data.Listas_Art_69 +
            "<br>" +
            data.Listas_Art_69b +
            "</p>";
          return "<center>" + btnListasNegras + "</center>";

          //                 var btnListasNegras='';
          // if (data.Listas_Art_69 == 'SENTENCIAS' || data.Listas_Art_69 == 'CANCELADOS' || data.Listas_Art_69 == 'CONDONADOS'
          //     || data.Listas_Art_69 == 'RETORNO INVERSIONES' || data.Listas_Art_69 == 'EXIGIBLES' || data.Listas_Art_69 == 'CANCELADOS POR INSOLVENSIA'
          //     || data.Listas_Art_69 == 'FIRMES' || data.Listas_Art_69 == 'NO LOCALIZADOS' || data.Listas_Art_69 == 'ELIMINADOS DE NO LOCALIZADOS') {

          //     if (data.Listas_Art_69b == 'DEFINITIVO' || data.Listas_Art_69b == 'DESVIRTUADO' || data.Listas_Art_69b == 'PRESUNTO' ||
          //         data.Listas_Art_69b == 'SENTENCIA') {}

          //     var btnListasNegras="<p class='tooltip_detalles' data-info='69 - 69b'>69</p>";
          // }
        },
      },
      // {"data": "Listas_Art_69"},
      // {"data": "Listas_Art_69b"},
      { data: "Name_Or_Tilte" },

      {
        data: null,
        render: function (data) {
          var barraProgreso =
            "<td class='project-completion'><small>Completion: 48%</small><div class='progress progress-mini'><div style='width: 48%;' class='progress-bar'></div></td>";
          return "<center>" + barraProgreso + "</center>";
        },
      },
    ],
    language: idioma,
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
