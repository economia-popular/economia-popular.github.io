const selic_variacao = document.getElementById("selic-variacao");
const selic_acumulado = document.getElementById("selic-acumulado");

// SELIC - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/selic/selic-variacao-mes.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      console.log(element);
      temp = {
        x: element.mes_ano,
        y: element.valor,
      };
      dataset.push(temp);
    });

    new Chart(selic_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% em relação ao mês anterior",
            data: dataset,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF"
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
            text: "Variação do selic %",
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

    // Fonte do selic
    $("div.fonte-selic").text(raw.fonte);
    $("div.atualizacao-selic").text(raw.data_atualizacao);
  }
);


// SELIC - Percentual / Ano
$.get("https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/selic/selic-percentual-ano.json",
    function (data, textStatus, jqXHR) {
      const dataset = [];
  
      var raw = JSON.parse(data);
  
      raw.data.forEach((element) => {
        console.log(element);
        temp = {
          x: element.mes_ano,
          y: element.valor,
        };
        dataset.push(temp);
      });
  
      new Chart(selic_acumulado, {
        type: "line",
        data: {
          backgroundColor: "#FFFFFF",
          datasets: [
            {
              label: "Taxa Percentual/Ano",
              data: dataset,
              borderWidth: 1,
              borderColor: "#FFFFFF",
              backgroundColor: "#FFFFFF"
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
              text: "Acumulo da Selic %",
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
  
      // Fonte do selic
      $("div.fonte-selic").text(raw.fonte);
      $("div.atualizacao-selic").text(raw.data_atualizacao);
    }
  );
  