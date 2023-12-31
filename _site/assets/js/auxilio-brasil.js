const auxilio_brasil_variacao = document.getElementById(
  "auxilio-brasil-variacao"
);
const auxilio_brasil_cobertura = document.getElementById(
  "auxilio-brasil-cobertura"
);
const auxilio_brasil_valor = document.getElementById("auxilio-brasil-valor");
const auxilio_brasil_valor_total = document.getElementById(
  "auxilio-brasil-valor-total"
);

$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/sociais/auxilio_brasil_consolido.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_familias = [];
    const dataset_cobertura = [];
    const dataset_valor = [];
    const dataset_valor_total = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      temp = {
        x: element.referencia,
        y: element.familias_cobertura,
      };

      temp_familias_vulneraveis = {
        x: element.referencia,
        y: element.familias_vulneraveis,
      };

      temp_cobertura = {
        x: element.referencia,
        y: element.cobertura_auxilio * 100,
      };

      temp_valor = {
        x: element.referencia,
        y: element.valor_beneficio,
      };

      temp_valor_total = {
        x: element.referencia,
        y: element.valor_total_repassado,
      };

      dataset.push(temp);
      dataset_familias.push(temp_familias_vulneraveis);
      dataset_cobertura.push(temp_cobertura);
      dataset_valor.push(temp_valor);
      dataset_valor_total.push(temp_valor_total);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Periodo", field: "referencia" },
      { headerName: "Familias Beneficiarias", field: "familias_cobertura" },
      { headerName: "Familias Cadastradas", field: "familias_vulneraveis" },
      { headerName: "Cobertura do Auxilio %", field: "cobertura_auxilio" },
      { headerName: "Valor total repassado", field: "valor_total_repassado" },
      { headerName: "Valor do beneficio", field: "valor_beneficio" },
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

    var eGridDiv = document.querySelector("#auxilio-brasil-grid");

    new agGrid.Grid(eGridDiv, gridOptions);

    new Chart(auxilio_brasil_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Familias que recebem o auxilio",
            data: dataset,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
            type: "bar",
          },
          {
            label: "Numero de familias vulneraveis cadastradas",
            data: dataset_familias,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
            type: "bar",
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
            text: "Cobertura do Auxilio Brasil",
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

    new Chart(auxilio_brasil_cobertura, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Porcentagem de Cobertura do Auxilio Brasil %",
            data: dataset_cobertura,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            type: "line",
            fill: true,
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
            text: "Cobertura do Auxilio Brasil",
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
  }
);


$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/sociais/auxilio_brasil.json",
  function (data, textStatus, jqXHR) {

    const dataset_valor = [];
    const dataset_valor_total = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {

      temp_valor = {
        x: element.referencia,
        y: element.valor_beneficio,
      };

      temp_valor_total = {
        x: element.referencia,
        y: element.valor_total_repassado,
      };

      dataset_valor.push(temp_valor);
      dataset_valor_total.push(temp_valor_total);
    });


    new Chart(auxilio_brasil_valor, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Valor médio do auxilio R$",
            data: dataset_valor,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            type: "line",
            fill: true,
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
            text: "Valor do Auxilio brasil",
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

    new Chart(auxilio_brasil_valor_total, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Valor total repassado ao programa R$",
            data: dataset_valor_total,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            type: "line",
            fill: true,
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
            text: "Total repassado ao Auxilio Brasil",
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
  }
);