const gini_variacao = document.getElementById("gini-variacao");

// GINI - Variação
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/gini/gini.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {

      temp = {
        x: element.ano_referencia,
        y: element.valor,
      };
      dataset.push(temp);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Ano", field: "ano_referencia" },
      { headerName: "Valor", field: "valor" }
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

    var eGridDiv = document.querySelector('#gini-grid');

    new agGrid.Grid(eGridDiv, gridOptions);


    new Chart(gini_variacao, {
      type: "bar",
      data: {
        backgroundColor: "#BA6338",
        datasets: [
          {
            label: "index",
            data: dataset,
            borderWidth: 1,
            borderColor: "#BA6338",
            backgroundColor: "#BA6338",
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
            },
            // Melhorar o entendimento do coeficiente de GINI
            min: 0,
            max: 1,
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Evolução do Coeficiente de Gini",
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
          },
          plugins: {
            customCanvasBackgroundColor: {
                color: "#ffffff",
            }
          }
        },
      },
      // plugins: [ bg_plugin ],
    });

    // Fonte do gini
    $("div.fonte-gini").text(raw.fonte);
    $("div.atualizacao-gini").text(raw.data_atualizacao);
  }
);
