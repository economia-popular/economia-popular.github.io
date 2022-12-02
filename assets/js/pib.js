const pib_variacao = document.getElementById("pib-variacao");
const pib_per_capta = document.getElementById("pib-per-capta");

// PIB - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/pib/pib-variacao.json",
  function (data, textStatus, jqXHR) {

    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      console.log(element);
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
              backgroundColor: "#FFFFFF"
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
          },
        },
      });

  }
);


// PIB - Per Capta
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/pib/pib-per-capta.json",
  function (data, textStatus, jqXHR) {

    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      console.log(element);
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
              backgroundColor: "#FFFFFF"
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
          },
        },
      });

    // Fonte do PIB
    $('div.fonte-pib').text(raw.fonte);
    $('div.atualizacao-pib').text(raw.data_atualizacao);

  }
);
