const pobreza_variacao = document.getElementById("pobreza-variacao");
const pobreza_evolucao = document.getElementById("pobreza-evolucao");
// GINI - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/sociais/indices_pobreza_consolidado_anual.json",
  function (data, textStatus, jqXHR) {
    const dataset_pobreza = [];
    const dataset_extrema = [];
    const dataset_total = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      temp = {
        x: element.referencia,
        y: element.pobreza,
      };
      dataset_pobreza.push(temp);
    });

    raw.data.forEach((element) => {
      temp = {
        x: element.referencia,
        y: element.extrema_pobreza,
      };
      dataset_extrema.push(temp);
    });

    raw.data.forEach((element) => {
      temp = {
        x: element.referencia,
        y: element.total,
      };
      dataset_total.push(temp);
    });

    new Chart(pobreza_variacao, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Situacão de Pobreza",
            data: dataset_pobreza,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "Situacão de Extrema Pobreza",
            data: dataset_extrema,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
          },
          {
            label: "Situacão de Vulnerabilidade",
            data: dataset_total,
            borderWidth: 1,
            borderColor: "#537bc4",
            backgroundColor: "#537bc4",
          },
          {
            label: "Situacão de Vulnerabilidade",
            data: dataset_total,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            type: 'line',
          },
        ],
      },
      options: {
        responsive: true,
        hover: {
          mode: "index",
          intersec: false,
        },
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
            text: "Quantidade de Brasileiro em Situação de Pobreza / Vulnerabilidade",
            color: "#FFFFFF",
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
    $("div.fonte-social").text(raw.fonte);
    $("div.atualizacao-social").text(raw.data_atualizacao);
  }
);

// GINI - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/sociais/indices_pobreza_consolidado.json",
  function (data, textStatus, jqXHR) {
    const dataset_pobreza = [];
    const dataset_extrema = [];
    const dataset_total = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
        temp = {
          x: element.referencia,
          y: element.pobreza,
        };
        dataset_pobreza.push(temp);
      });
  
      raw.data.forEach((element) => {
        temp = {
          x: element.referencia,
          y: element.extrema_pobreza,
        };
        dataset_extrema.push(temp);
      });
  
      raw.data.forEach((element) => {
        temp = {
          x: element.referencia,
          y: element.total,
        };
        dataset_total.push(temp);
      });

    // Data Grid
    var columnDefs = [
      { headerName: "Referência", field: "referencia" },
      { headerName: "Pobreza", field: "pobreza" },
      { headerName: "Extrema Pobreza", field: "extrema_pobreza" },
      { headerName: "Situação de Vulnerabilidade", field: "total" },
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

    var eGridDiv = document.querySelector("#pobreza-grid");
    new agGrid.Grid(eGridDiv, gridOptions);


    new Chart(pobreza_evolucao, {
        type: "line",
        data: {
          backgroundColor: "#FFFFFF",
          datasets: [
            {
              label: "Situacão de Pobreza",
              data: dataset_pobreza,
              borderColor: "#114247",
              backgroundColor: "#5D6D2F",
              fill: true
            },
            {
              label: "Situacão de Extrema Pobreza",
              data: dataset_extrema,
              borderColor: "#5D6D2F",
              backgroundColor: "#114247",
              fill: true
            },
            // {
            //   label: "Situacão de Vulnerabilidade",
            //   data: dataset_total,
            //   borderColor: "#185a71",
            //   backgroundColor: "#185a71",
            //   fill: true
            // },
          ],
        },
        options: {
          responsive: true,
          hover: {
            mode: "index",
            intersec: false,
          },
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
              stacked: true,
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
              text: "Quantidade de Brasileiro em Situação de Pobreza / Vulnerabilidade - Mensal",
              color: "#FFFFFF",
            },
            subtitle: {
              display: true,
              color: "#FFFFFF",
              text: raw.unidade_medida,
            },
          },
          interaction: {
            mode: 'nearest',
            axis: 'y',
            intersect: false
          },
        },
      });

    // Fonte do gini
    $("div.fonte-social").text(raw.fonte);
    $("div.atualizacao-social").text(raw.data_atualizacao);
  }
);
