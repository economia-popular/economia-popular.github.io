const inpc_variacao = document.getElementById("inpc-variacao");
const inpc_acumulado = document.getElementById("inpc-acumulado");


// INPC - Variação
function INPC(data) {
  const dataset = [];
  const dataset_acumulado = [];
  const dataset_12_meses = [];

  var raw = JSON.parse(data);

  raw.data.forEach((element) => {

    temp = {
      x: element.referencia,
      y: element.inpc_variacao,
    };

    temp_ano = {
      x: element.referencia,
      y: element.inpc_acumulado_ano,
    };

    temp_12_meses = {
      x: element.referencia,
      y: element.inpc_acumulado_doze_meses,
    };

    dataset.push(temp);
    dataset_acumulado.push(temp_ano);
    dataset_12_meses.push(temp_12_meses);
  });


  // Data Grid
  var columnDefs = [
    { headerName: "Periodo", field: "referencia" },
    { headerName: "Variação %", field: "inpc_variacao" },
    { headerName: "Acumulado Ano %", field: "inpc_acumulado_ano" },
    { headerName: "Acumulado 12 Meses %", field: "inpc_acumulado_doze_meses" }
  ];

  var gridOptions = {
    theme: "ag-theme-balham",
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

  var eGridDiv = document.querySelector('#inpc-grid');

  new agGrid.createGrid(eGridDiv, gridOptions);

  new Chart(inpc_variacao, {
    type: "line",
    data: {
      backgroundColor: "#FFFFFF",
      datasets: [
        {
          label: "% em relação ao mês anterior",
          data: dataset.slice(-120), // Ultimos 10 anos
          borderWidth: 1,
          borderColor: "#FFFFFF",
          backgroundColor: "#FFFFFF",
          type: "line"
        }
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
          text: "Variação do INPC %",
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
        legend: {
          labels: {
            color: "#FFFFFF",
          }
        }
      },
    },
  });

  new Chart(inpc_acumulado, {
    type: "line",
    data: {
      backgroundColor: "#FFFFFF",
      datasets: [
        {
          type: "bar",
          label: "% acumulo anual",
          data: dataset_acumulado.slice(-120), // Ultimos 10 anos
          borderWidth: 1,
          borderColor: "#5D6D2F",
          backgroundColor: "#5D6D2F",
        },
        {
          label: "% acumulado 12 meses",
          data: dataset_12_meses.slice(-120), // Ultimos 10 anos
          borderWidth: 1,
          borderColor: "#FFFFFF",
          backgroundColor: "#FFFFFF",
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
          text: "INPC Acumulado %",
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

  // Fonte do inpc
  $("div.fonte-inpc").text(raw.fonte);
  $("div.atualizacao-inpc").text(raw.data_atualizacao);
}

$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/inflacao.json",
  function (data, textStatus, jqXHR) {
      INPC(data);
  }
)