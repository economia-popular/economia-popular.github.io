const pib_variacao = document.getElementById("pib-variacao");
const pib_per_capta = document.getElementById("pib-per-capta");
const pib_acumulado = document.getElementById("pib-acumulado");
const pib_mensal = document.getElementById("pib-mensal");
const pib_acumulado_anual = document.getElementById("pib-acumulado-anual");

// PIB - Anual
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/pib/pib-acumulado-ano.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    var raw = JSON.parse(data);

    raw.data.sort((a, b) => a.ano - b.ano);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.ano,
        y: element.valor,
      };
      dataset.push(temp);
    });

    new Chart(pib_acumulado_anual, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "R$ ",
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
            text: "PIB - Acumulado de Valor (Anual)",
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
            labels :{
              color:  "#FFFFFF",
            }
          }
        },
      },
    });
  }
);

// PIB - Acumulado
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/pib/pib-acumulado.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.periodo,
        y: element.valor,
      };
      dataset.push(temp);
    });

    new Chart(pib_acumulado, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "R$ ",
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
            text: "PIB - Acumulado de Valor (Trimestral)",
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
            labels :{
              color:  "#FFFFFF",
            }
          }
        },
      },
    });
  }
);

// PIB - Valor Mensal
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/pib_valor.json",
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

    new Chart(pib_mensal, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "R$ ",
            data: dataset.slice(-160),
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
            text: "PIB - Valor Mensal Produzido",
            color: "#FFFFFF",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "Milhões de Reais",
          },
          legend: {
            labels :{
              color:  "#FFFFFF",
            }
          }
        },
      },
    });
  }
);


// PIB - Variação
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/pib/pib-variacao.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.ano_trimestre,
        y: element.valor,
      };
      dataset.push(temp);
    });

    new Chart(pib_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% ao trimestre do ano anterior",
            data: dataset,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
          },
        ],
      },
      options: {
        // responsive: true,
        // aspectRatio: 1.5,
        // maintainAspectRatio: true,
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
            text: "Variação do PIB",
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
            labels :{
              color:  "#FFFFFF",
            }
          }
        },
      },
    });
  }
);

// PIB - Per Capta
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/pib/pib-per-capta.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.ano,
        y: element.valor,
      };
      dataset.push(temp);
    });

    new Chart(pib_per_capta, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "R$",
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
            text: "",
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
            labels :{
              color:  "#FFFFFF",
            }
          }
        },
      },
    });

    // Fonte do PIB
    $("div.fonte-pib").text(raw.fonte);
    $("div.atualizacao-pib").text(raw.data_atualizacao);
  }
);
