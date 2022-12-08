const ipca_variacao = document.getElementById("ipca-variacao");

const ipca_acumulado = document.getElementById("ipca-acumulado");

// IPCA - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/ipca/ipca.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_acumulado = []

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.mes_ano,
        y: element.variacao_mes,
      };
      dataset.push(temp);
    });

    raw.data.forEach((element) => {
      
      temp = {
        x: element.mes_ano,
        y: element.acumulado_ano,
      };
      dataset_acumulado.push(temp);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Periodo", field: "mes_ano" },
      { headerName: "Variação", field: "variacao_mes" },
      { headerName: "Acumulado Ano", field: "acumulado_ano" }
    ];

    var gridOptions = {
      defaultColDef: {
        flex: 1,
        sortable: true,
        filter: true,
      },
      columnDefs: columnDefs,
      rowData: raw.data.reverse(),
      animateRows: true,
      accentedSort: true
    };

    var eGridDiv = document.querySelector('#ipca-grid');

    new agGrid.Grid(eGridDiv, gridOptions);

    new Chart(ipca_variacao, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% em relação ao mês anterior",
            data: dataset,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            type: "line"
          },
          {
            label: "% acumulo anual",
            data: dataset_acumulado,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
            type: "bar"
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
            grid: {
              color: "#FFFFFF",
            },
            ticks: {
              color: "#FFFFFF",
              callback: function (val, index) {
                return index % 2 === 0 ? this.getLabelForValue(val) : "";
              },
              major: {
                enabled: true,
              },
            },
          },
          y: {
            display: true,
            color: "#FFFFFF",
            grid: {
              color: "#FFFFFF",
            },
            ticks: {
              color: "#FFFFFF",
            },
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Variação do IPCA %",
            color: "#FFFFFF",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: raw.unidade_medida,
          },
        },
      },
    });

    // Fonte do IPCA
    $("div.fonte-ipca").text(raw.fonte);
    $("div.atualizacao-ipca").text(raw.data_atualizacao);
  }
);

// IPCA - Acumulado
// $.get(
//   "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/ipca/ipca.json",
//   function (data, textStatus, jqXHR) {
//     const dataset = [];

//     var raw = JSON.parse(data);

//     raw.data.forEach((element) => {
      
//       temp = {
//         x: element.mes_ano,
//         y: element.acumulado_ano,
//       };
//       dataset.push(temp);
//     });

//     new Chart(ipca_acumulado, {
//       type: "bar",
//       data: {
//         backgroundColor: "#FFFFFF",
//         datasets: [
//           {
//             label: "IPCA Acumulado no ano %",
//             data: dataset,
//             borderWidth: 1,
//             borderColor: "#FFFFFF",
//             backgroundColor: "#FFFFFF",
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         scales: {},
//         layouts: {},
//         plugins: {
//           title: {
//             display: true,
//             text: "Acumulo Anual do IPCA",
//             color: "#FFFFFF",
//             padding: {
//               top: 10,
//               bottom: 30,
//             },
//           },
//           subtitle: {
//             display: true,
//             color: "#FFFFFF",
//             text: raw.unidade_medida,
//           },
//         },
//       },
//     });
//   }
// );
