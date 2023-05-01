const selic_variacao = document.getElementById("selic-variacao");
const selic_acumulado = document.getElementById("selic-acumulado");
const selic_meta = document.getElementById("selic-meta");
const juros_reais = document.getElementById("juros-reais");

// Meta Selic
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/app/data/selic/selic-meta.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      temp = {
        x: element.mes_ano,
        y: element.valor,
      };
      dataset.push(temp);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Periodo", field: "periodo" },
      { headerName: "Data Reunião", field: "data_reuniao" },
      { headerName: "Inicio da Vigência", field: "inicio_vigencia" },
      { headerName: "Valor %", field: "valor" },
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
      accentedSort: true,
    };

    var eGridDiv = document.querySelector("#selic-meta-grid");

    new agGrid.Grid(eGridDiv, gridOptions);

    new Chart(selic_meta, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Taxa Selic %",
            data: dataset.slice(-120), // Ultimos 10 anos,
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
            text: "Meta Selic %",
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

    // Fonte do selic
    $("div.fonte-selic").text(raw.fonte);
    $("div.atualizacao-selic").text(raw.data_atualizacao);
  }
);

// SELIC - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/app/data/selic/selic-variacao-mes.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      temp = {
        x: element.mes_ano,
        y: element.valor,
      };
      dataset.push(temp);
    });

    new Chart(selic_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% em relação ao mês anterior",
            data: dataset.slice(-120), // Ultimos 10 anos,
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
            text: "Variação do selic %",
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

    // Fonte do selic
    $("div.fonte-selic").text(raw.fonte);
    $("div.atualizacao-selic").text(raw.data_atualizacao);
  }
);

// SELIC - Percentual / Ano
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/app/data/selic/selic-percentual-ano.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      temp = {
        x: element.mes_ano,
        y: element.valor,
      };
      dataset.push(temp);
    });

    new Chart(selic_acumulado, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Taxa Percentual/Ano",
            data: dataset.slice(-120), // Ultimos 10 anos,
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
            text: "Acumulo da Selic %",
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

    // Fonte do selic
    $("div.fonte-selic").text(raw.fonte);
    $("div.atualizacao-selic").text(raw.data_atualizacao);
  }
);


// Juros Reais
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/app/data/inflacao/inflacao.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      temp = {
        x: element.referencia,
        y: element.juros_reais,
      };
      dataset.push(temp);
    });

    new Chart(juros_reais, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Juros Reais - SELIC vs IPCA",
            data: dataset.slice(-120), // Ultimos 10 anos,
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
            text: "Juros Reais",
            color: "#FFFFFF",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "Variação do Juros Reais pelo IPCA",
          },
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Periodo", field: "referencia" },
      { headerName: "IPCA", field: "ipca_acumulado_doze_meses" },
      { headerName: "Selic Ano", field: "selic_ano" },
      { headerName: "Juros Reais", field: "juros_reais" },
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
      accentedSort: true,
    };

    var eGridDiv = document.querySelector("#juros-reais-grid");

    new agGrid.Grid(eGridDiv, gridOptions);


  }
);