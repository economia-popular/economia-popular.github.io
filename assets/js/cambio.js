const dolar_variacao = document.getElementById("dolar-variacao");

// Dolar - Mensal
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/cambio/cambio_dolar.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {

      temp = {
        x: element.referencia,
        y: element.valor,
      };
      dataset.push(temp);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Período", field: "referencia" },
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

    var eGridDiv = document.querySelector('#dolar-grid');

    new agGrid.Grid(eGridDiv, gridOptions);


    new Chart(dolar_variacao, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "R$",
            data: dataset.slice(-120),
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
            },
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Fechamento Mensal da Taxa de Câmbio do Dolar",
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

    // Fonte do dolar
    $("div.fonte-cambio").text(raw.fonte);
    $("div.atualizacao-dolar").text(raw.data_atualizacao);
  }
);
