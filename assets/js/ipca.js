const ipca_variacao = document.getElementById("ipca-variacao");

const ipca_acumulado = document.getElementById("ipca-acumulado");

// IPCA - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/ipca/ipca.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      console.log(element);
      temp = {
        x: element.mes_ano,
        y: element.variacao_mes,
      };
      dataset.push(temp);
    });

    new Chart(ipca_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
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
            },
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Variação do IPCA %",
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

    // Fonte do IPCA
    $("div.fonte-ipca").text(raw.fonte);
    $("div.atualizacao-ipca").text(raw.data_atualizacao);
  }
);

// IPCA - Acumulado
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/ipca/ipca.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      console.log(element);
      temp = {
        x: element.mes_ano,
        y: element.acumulado_ano,
      };
      dataset.push(temp);
    });

    new Chart(ipca_acumulado, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "IPCA Acumulado no ano %",
            data: dataset,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
          },
        ],
      },
      options: {
        responsive: true,
        scales: {},
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Acumulo Anual do IPCA",
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
  }
);
