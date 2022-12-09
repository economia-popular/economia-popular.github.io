const gini_variacao = document.getElementById("gini-variacao");

// GINI - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/gini/gini.json",
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
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "index",
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
            // padding: {
            //   top: 10,
            //   bottom: 30,
            // },
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: raw.unidade_medida,
          },
        },
      },
    });

    // Fonte do gini
    $("div.fonte-gini").text(raw.fonte);
    $("div.atualizacao-gini").text(raw.data_atualizacao);
  }
);
