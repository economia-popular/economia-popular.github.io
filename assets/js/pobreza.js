const populacao_estimativa = document.getElementById("populacao-estimativa");
const salario_minimo = document.getElementById("salario-minimo");
const pobreza_variacao = document.getElementById("pobreza-variacao");
const pobreza_evolucao = document.getElementById("pobreza-evolucao");
const pobreza_porcentagem = document.getElementById("pobreza-porcentagem");
const pobreza_familia = document.getElementById("pobreza-familia");
const pobreza_indigena = document.getElementById("pobreza-indigena");
const pobreza_quilombolas = document.getElementById("pobreza-quilombolas");
const pobreza_ciganos = document.getElementById("pobreza-ciganos");

// Pobreza - Variação
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/sociais/indices_pobreza_consolidado_anual.json",
  function (data, textStatus, jqXHR) {
    const dataset_populacao = [];
    const dataset_salario_minimo = [];

    const dataset_pobreza = [];
    const dataset_extrema = [];
    const dataset_total = [];

    const dataset_pobreza_percent = [];
    const dataset_extrema_percent = [];
    const dataset_total_percent = [];

    const dataset_familias_pobreza = [];
    const dataset_familias_extrema = [];
    const dataset_familias_total = [];


    const dataset_indigenas_pobreza = [];
    const dataset_indigenas_extrema = [];
    const dataset_indigenas_total = [];

    const dataset_quilombolas_pobreza = [];
    const dataset_quilombolas_extrema = [];
    const dataset_quilombolas_total = [];

    const dataset_ciganos_pobreza = [];
    const dataset_ciganos_extrema = [];
    const dataset_ciganos_total = [];

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
      temp_familias_pobreza = {
        x: element.referencia,
        y: element.familias_pobreza
      }
      temp_familias_extrema = {
        x: element.referencia,
        y: element.familias_extrema_pobreza
      }
      temp_familias_vunerabilidade = {
        x: element.referencia,
        y: element.familias_vulnerabilidade
      }
      temp_indigenas_pobreza = {
        x: element.referencia,
        y: element.indigenas_pobreza
      }
      temp_indigenas_extrema = {
        x: element.referencia,
        y: element.indigenas_extrema_pobreza
      }
      temp_indigenas_vulnerabilidade = {
        x: element.referencia,
        y: element.indigenas_vulnerabilidade
      }
      temp_quilombolas_pobreza = {
        x: element.referencia,
        y: element.quilombolas_pobreza
      }
      temp_quilombolas_extrema = {
        x: element.referencia,
        y: element.quilombolas_extrema_pobreza
      }
      temp_quilombolas_vulnerabilidade = {
        x: element.referencia,
        y: element.quilombolas_vulnerabilidade
      }
      temp_ciganos_pobreza = {
        x: element.referencia,
        y: element.ciganos_pobreza
      }
      temp_ciganos_extrema = {
        x: element.referencia,
        y: element.ciganos_extrema_pobreza
      }
      temp_ciganos_vulnerabilidade = {
        x: element.referencia,
        y: element.ciganos_vulnerabilidade
      }
      dataset_pobreza_percent.push(temp_pobreza);
      dataset_extrema_percent.push(temp_extrema);
      dataset_total_percent.push(temp_vulnerabilidade);
      dataset_familias_pobreza.push(temp_familias_pobreza);
      dataset_familias_extrema.push(temp_familias_extrema);
      dataset_familias_total.push(temp_familias_vunerabilidade)

      dataset_indigenas_pobreza.push(temp_indigenas_pobreza);
      dataset_indigenas_extrema.push(temp_indigenas_extrema);
      dataset_indigenas_total.push(temp_indigenas_vulnerabilidade)

      dataset_quilombolas_pobreza.push(temp_quilombolas_pobreza);
      dataset_quilombolas_extrema.push(temp_quilombolas_extrema);
      dataset_quilombolas_total.push(temp_quilombolas_vulnerabilidade)

      dataset_ciganos_pobreza.push(temp_ciganos_pobreza);
      dataset_ciganos_extrema.push(temp_ciganos_extrema);
      dataset_ciganos_total.push(temp_ciganos_vulnerabilidade)
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
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
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
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
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
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });

    new Chart(pobreza_familia, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Familias - Situacão de Pobreza",
            data: dataset_familias_pobreza,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "Familias - Situacão de Extrema Pobreza",
            data: dataset_familias_extrema,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
          },
          {
            label: "Familias - Situacão de Vulnerabilidade",
            data: dataset_familias_total,
            borderWidth: 1,
            borderColor: "#537bc4",
            backgroundColor: "#537bc4",
          },
          {
            label: "Evolução",
            data: dataset_familias_total,
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
            text: "Familias em Situação de Pobreza / Vulnerabilidade",
            color: "#FFFFFF",
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "Numero de Familias",
          },
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });

    new Chart(pobreza_indigena, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Familias Indigenas - Situacão de Pobreza",
            data: dataset_indigenas_pobreza,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "Familias Indigenas - Situacão de Extrema Pobreza",
            data: dataset_indigenas_extrema,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
          },
          {
            label: "Familias Indigenas - Situacão de Vulnerabilidade",
            data: dataset_indigenas_total,
            borderWidth: 1,
            borderColor: "#537bc4",
            backgroundColor: "#537bc4",
          },
          {
            label: "Evolução",
            data: dataset_indigenas_total,
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
            text: "Familias Indigenas em Situação de Pobreza / Vulnerabilidade",
            color: "#FFFFFF",
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "Numero de Familias Indigenas",
          },
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });

    new Chart(pobreza_quilombolas, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Familias Quilombolas - Situacão de Pobreza",
            data: dataset_quilombolas_pobreza,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "Familias Quilombolas - Situacão de Extrema Pobreza",
            data: dataset_quilombolas_extrema,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
          },
          {
            label: "Familias Quilombolas - Situacão de Vulnerabilidade",
            data: dataset_quilombolas_total,
            borderWidth: 1,
            borderColor: "#537bc4",
            backgroundColor: "#537bc4",
          },
          {
            label: "Evolução",
            data: dataset_quilombolas_total,
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
            text: "Familias Quilombolas em Situação de Pobreza / Vulnerabilidade",
            color: "#FFFFFF",
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "Numero de Familias Quilombolas",
          },
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });

    new Chart(pobreza_ciganos, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Familias Ciganas - Situacão de Pobreza",
            data: dataset_ciganos_pobreza,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "Familias Ciganas - Situacão de Extrema Pobreza",
            data: dataset_ciganos_extrema,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
          },
          {
            label: "Familias Ciganas - Situacão de Vulnerabilidade",
            data: dataset_ciganos_total,
            borderWidth: 1,
            borderColor: "#537bc4",
            backgroundColor: "#537bc4",
          },
          {
            label: "Evolução",
            data: dataset_ciganos_total,
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
            text: "Familias Ciganas em Situação de Pobreza / Vulnerabilidade",
            color: "#FFFFFF",
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "Numero de Familias Ciganas",
          },
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });
  }
);

// Pobreza
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/sociais/indices_pobreza_consolidado.json",
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
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
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


$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/sociais/salario_minimo.json",
  function (data, textStatus, jqXHR) {
    const dataset_salario_minimo = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {

      if (element.mes == "01") {
        temp = {
          x: element.ano,
          y: element.valor,
        };
        dataset_salario_minimo.push(temp);
      }

    });



    new Chart(salario_minimo, {
      type: "bar",
      data: {
        backgroundColor: "#587F49",
        datasets: [
          {
            label: "R$",
            data: dataset_salario_minimo.slice(-24),
            borderWidth: 1,
            borderColor: "#587F49",
            backgroundColor: "#587F49",
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
            text: "Valor do Salário Minimo Brasileiro",
            color: "#FFFFFF",
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "R$",
          },
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });
  }
);