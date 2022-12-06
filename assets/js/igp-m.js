const igpm_variacao = document.getElementById("igpm-variacao");

// IGP-M - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/igpm/igpm.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.mes_ano,
        y: element.variacao_mes,
      };
      dataset.push(temp);
    });

        // Data Grid
        var columnDefs = [
          { headerName: "Período", field: "mes_ano" },
          { headerName: "Variação", field: "variacao_mes" }
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
    
        var eGridDiv = document.querySelector('#igpm-grid');
    
        new agGrid.Grid(eGridDiv, gridOptions);

    new Chart(igpm_variacao, {
      type: "line",
      data: {
        datasets: [
          {
            label: "% em relação ao mês anterior",
            data: dataset,
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
            }
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Variação do IGP-M %",
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

    // Fonte do igpm
    $("div.fonte-igpm").text(raw.fonte);
    $("div.atualizacao-igpm").text(raw.data_atualizacao);
  }
);
