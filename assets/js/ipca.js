const ipca_variacao = document.getElementById("ipca-variacao");
const ipca_acumulado = document.getElementById("ipca-acumulado");

const ipca15_variacao = document.getElementById("ipca15-variacao");
const ipca15_acumulado = document.getElementById("ipca15-acumulado");

// IPCA - Variação
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/inflacao.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_acumulado = []
    const dataset_12_meses = []

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.referencia,
        y: element.ipca_variacao,
      };

      temp_ano = {
        x: element.referencia,
        y: element.ipca_acumulado_ano,
      };

      temp_12_meses = {
        x: element.referencia,
        y: element.ipca_acumulado_doze_meses,
      };

      dataset.push(temp);
      dataset_acumulado.push(temp_ano);
      dataset_12_meses.push(temp_12_meses);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Periodo", field: "referencia" },
      { headerName: "Variação %", field: "ipca_variacao" },
      { headerName: "Acumulado Ano %", field: "ipca_acumulado_ano" },
      { headerName: "Acumulado 12 Meses %", field: "ipca_acumulado_doze_meses" }
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


    new Chart(ipca_acumulado, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% acumulo anual",
            data: dataset_acumulado.slice(-120), // Ultimos 10 anos
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "% acumulado 12 meses",
            type: "line",
            data: dataset_12_meses.slice(-120), // Ultimos 10 anos
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
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
            text: "Acumulado IPCA %",
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

// IPCA15

$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/inflacao.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_acumulado = []
    const dataset_12_meses = []

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.referencia,
        y: element.ipca15_variacao,
      };

      temp_ano = {
        x: element.referencia,
        y: element.ipca15_acumulado_ano,
      };

      temp_12_meses = {
        x: element.referencia,
        y: element.ipca15_acumulado_doze_meses,
      };

      dataset.push(temp);
      dataset_acumulado.push(temp_ano);
      dataset_12_meses.push(temp_12_meses);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Periodo", field: "referencia" },
      { headerName: "Variação %", field: "ipca_variacao" },
      { headerName: "Acumulado Ano %", field: "ipca_acumulado_ano" },
      { headerName: "Acumulado 12 Meses %", field: "ipca_acumulado_doze_meses" }
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

    // new agGrid.Grid(eGridDiv, gridOptions);

    new Chart(ipca15_variacao, {
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
            text: "Variação do IPCA15 %",
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


    new Chart(ipca15_acumulado, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% acumulo anual",
            data: dataset_acumulado.slice(-120), // Ultimos 10 anos
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "% acumulado 12 meses",
            data: dataset_12_meses.slice(-120), // Ultimos 10 anos
            type: "line",
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
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
            text: "Acumulado IPCA15 %",
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
  }
);