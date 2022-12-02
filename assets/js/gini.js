const gini_variacao = document.getElementById("gini-variacao");

// GINI - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/gini/gini.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      console.log(element);
      temp = {
        x: element.ano_referencia,
        y: element.valor,
      };
      dataset.push(temp);
    });

    new Chart(gini_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "index",
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
              },
              y: {
                display: true,
                color: "#FFFFFF"
              }
        },
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Evolução do Coeficiente de Gini",
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

    // Fonte do gini
    $("div.fonte-gini").text(raw.fonte);
    $("div.atualizacao-gini").text(raw.data_atualizacao);
  }
);
