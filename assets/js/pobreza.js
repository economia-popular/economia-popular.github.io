const populacao_estimativa = document.getElementById("populacao-estimativa");
const pobreza_variacao = document.getElementById("pobreza-variacao");
const pobreza_evolucao = document.getElementById("pobreza-evolucao");
const pobreza_porcentagem = document.getElementById("pobreza-porcentagem");

// GINI - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/sociais/indices_pobreza_consolidado_anual.json",
  function (data, textStatus, jqXHR) {
    const dataset_pobreza = [];
    const dataset_extrema = [];
    const dataset_total = [];
    const dataset_populacao = [];

    const dataset_pobreza_percent = [];
    const dataset_extrema_percent = [];
    const dataset_total_percent = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      temp_pobreza = {
        x: element.referencia,
        y: element.porcentagem_pobreza * 100,
      };
      temp_extrema = {
        x: element.referencia,
        y: element.porcentagem_extrema_pobreza * 100,
      };
      temp_vulnerabilidade = {
        x: element.referencia,
        y: element.porcentagem_vulnerabilidade * 100,
      };
      dataset_pobreza_percent.push(temp_pobreza);
      dataset_extrema_percent.push(temp_extrema);
      dataset_total_percent.push(temp_vulnerabilidade);
    });

    raw.data.forEach((element) => {
      temp = {
        x: element.referencia,
        y: element.populacao_estimada,
      };
      dataset_populacao.push(temp);
    });

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

    new Chart(populacao_estimativa, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Estimativa Populacional",
            data: dataset_populacao,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            fill: true,
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
            text: "Quantidade de Brasileiro em Situação de Vulnerabilidade",
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
            label: "Evolução",
            data: dataset_total,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            type: "line",
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

    new Chart(pobreza_porcentagem, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "População em Situação de Pobreza %",
            data: dataset_pobreza_percent,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
            fill: true
          },
          {
            label: "População em Situação de Extrema Pobreza %",
            data: dataset_extrema_percent,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
            fill: true
          },
          {
            label: "População em Situação de Vulnerabilidade %",
            data: dataset_total_percent,
            borderWidth: 1,
            borderColor: "#537bc4",
            backgroundColor: "#537bc4",
            fill: true
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
            text: "Porcentagem de Brasileiro em Situação Vulnerabilidade",
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


    // Fonte Social
    $("div.fonte-social").text(raw.fonte);
    $("div.atualizacao-social").text(raw.data_atualizacao);
  }
);

// Pobreza
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/sociais/indices_pobreza_consolidado.json",
  function (data, textStatus, jqXHR) {
    const dataset_pobreza = [];
    const dataset_extrema = [];
    const dataset_total = [];

    var raw = JSON.parse(data);

    raw.data.forEach((d, i) => {
      raw.data[i].porcentagem_pobreza = raw.data[i].porcentagem_pobreza * 100;
      raw.data[i].porcentagem_extrema_pobreza =
        raw.data[i].porcentagem_extrema_pobreza * 100;
      raw.data[i].porcentagem_vulnerabilidade =
        raw.data[i].porcentagem_vulnerabilidade * 100;
    });

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
      { headerName: "Vulnerabilidade Total", field: "total" },
      { headerName: "Porcentagem Pobreza", field: "porcentagem_pobreza" },
      {
        headerName: "Porcentagem Extrema Pobreza",
        field: "porcentagem_extrema_pobreza",
      },
      {
        headerName: "Porcentagem Vulnerabilidade",
        field: "porcentagem_vulnerabilidade",
      },
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
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
            fill: true,
          },
          {
            label: "Situacão de Extrema Pobreza",
            data: dataset_extrema,
            borderColor: "#114247",
            backgroundColor: "#114247",
            fill: true,
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
            },
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
          mode: "nearest",
          axis: "y",
          intersect: false,
        },
      },
    });

    // Fonte do gini
    $("div.fonte-social").text(raw.fonte);
    $("div.atualizacao-social").text(raw.data_atualizacao);
  }
);
