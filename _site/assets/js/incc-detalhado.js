const incc_variacao = document.getElementById("incc-variacao");
const incc_acumulado = document.getElementById("incc-acumulado");

const incc_m_variacao = document.getElementById("incc-m-variacao");
const incc_m_acumulado = document.getElementById("incc-m-acumulado");

// INCC - Variação
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/inflacao.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_acumulado = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.referencia,
        y: element.incc_variacao,
      };
      temp_acumulado = {
        x: element.referencia,
        y: element.incc_acumulado_ano,
      };
      dataset.push(temp);
      dataset_acumulado.push(temp_acumulado);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Referencia", field: "referencia" },
      { headerName: "Variação Mensal", field: "incc_variacao" },
      { headerName: "Acumulado Ano", field: "incc_acumulado_ano" },
    ];

    var gridOptions = {
      theme: "ag-theme-balham",
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

    var eGridDiv = document.querySelector('#incc-grid');

    new agGrid.createGrid(eGridDiv, gridOptions);

    new Chart(incc_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Variação Mensal",
            data: dataset,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
          },
        ],
      },
      options: {
        responsive: true,
        hover: {
            mode: 'index',
            intersec: false
        },
        scales: {
          x: {
            display: true,
            title: {
                display: true
            },
            grid: {
              color: "#FFFFFF",
            },
            ticks: {
              color: "#FFFFFF",
              major : {
                enabled: true
              }
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
            }
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Evolução Mensal do INCC",
            color: "#FFFFFF",
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: raw.unidade_medida,
          },
          legend: {
            labels :{
              color:  "#FFFFFF",
            }
          }
        },
      },
    });

    new Chart(incc_acumulado, {
        type: "bar",
        data: {
          backgroundColor: "#FFFFFF",
          datasets: [
            {
              label: "Acumulo Anual",
              data: dataset_acumulado,
              borderWidth: 1,
              borderColor: "#FFFFFF",
              backgroundColor: "#FFFFFF",
            },
          ],
        },
        options: {
          responsive: true,
          hover: {
              mode: 'index',
              intersec: false
          },
          scales: {
            x: {
              display: true,
              title: {
                  display: true
              },
              grid: {
                color: "#FFFFFF",
              },
              ticks: {
                color: "#FFFFFF",
                major : {
                  enabled: true
                }
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
              }
            },
          },
          layouts: {},
          plugins: {
            title: {
              display: true,
              text: "Evolução do Acumulo Anual do INCC",
              color: "#FFFFFF",
            },
            subtitle: {
              display: true,
              color: "#FFFFFF",
              text: raw.unidade_medida,
            },
            legend: {
              labels :{
                color:  "#FFFFFF",
              }
            }
          },
        },
      });

    // Fonte do gini
    $("div.fonte-incc").text("debit.com.br");
    $("div.atualizacao-incc").text(raw.data_atualizacao);
  }
);


// INCC - M Variação
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/incc-m.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_acumulado = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {

      temp = {
        x: element.referencia,
        y: element.variacao,
      };
      temp_acumulado = {
        x: element.referencia,
        y: element.acumulado_ano,
      };
      dataset.push(temp);
      dataset_acumulado.push(temp_acumulado);
    });

    new Chart(incc_m_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Variação Mensal - INCC-M",
            data: dataset,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
          },
        ],
      },
      options: {
        responsive: true,
        hover: {
          mode: 'index',
          intersec: false
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            },
            grid: {
              color: "#FFFFFF",
            },
            ticks: {
              color: "#FFFFFF",
              major: {
                enabled: true
              }
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
            }
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Evolução Mensal do INCC-M",
            color: "#FFFFFF",
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

    new Chart(incc_m_acumulado, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Acumulo Anual - INCC-M",
            data: dataset_acumulado,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
          },
        ],
      },
      options: {
        responsive: true,
        hover: {
          mode: 'index',
          intersec: false
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            },
            grid: {
              color: "#FFFFFF",
            },
            ticks: {
              color: "#FFFFFF",
              major: {
                enabled: true
              }
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
            }
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Evolução do Acumulo Anual do INCC-M",
            color: "#FFFFFF",
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

    // Data Grid
    var columnDefs = [
      { headerName: "Referencia", field: "referencia" },
      { headerName: "Variação Mensal", field: "variacao" },
      { headerName: "Acumulado Ano", field: "acumulado_ano" },
    ];

    var gridOptions = {
      theme: "ag-theme-balham",
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

    var eGridDiv = document.querySelector('#incc-m-grid');

    new agGrid.createGrid(eGridDiv, gridOptions);

    // Fonte do gini
    $("div.fonte-incc").text("debit.com.br");
    $("div.atualizacao-incc").text(raw.data_atualizacao);
  }
);
