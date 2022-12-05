const idh_variacao = document.getElementById("idh-variacao");
const idh_sexo = document.getElementById("idh-sexo");
const idh_ev = document.getElementById("idh-ev");
const idh_ev_sexo = document.getElementById("idh-ev-sexo");


// IDH
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/idh/idh.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp = {
        x: element.ano_referencia,
        y: element.idh,
      };
      dataset.push(temp);
    });

    new Chart(idh_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "IDH",
            data: dataset,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
          },
        ],
      },
      options: {
        responsive: true,
        hover: {
          mode: "idh",
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
            },
            // min: 0,
            max: 1,
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: false,
            text: "Indice de Desenvolvimento Humano",
            color: "#FFFFFF",
            // padding: {
            //   top: 10,
            //   bottom: 30,
            // },
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: raw.unidade_medida,
          },
        },
      },
    });

    // Sexo
    const dataset_m = [];
    const dataset_f = [];

    raw.data.forEach((element) => {
      

      if (element.idh_masculino > 0) {
        // Masculino
        temp_m = {
          x: element.ano_referencia,
          y: element.idh_masculino,
        };
        dataset_m.push(temp_m);

        // Feminino
        temp_f = {
          x: element.ano_referencia,
          y: element.idh_feminino,
        };

        dataset_f.push(temp_f);
      }
    });

    new Chart(idh_sexo, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "IDH Masculino",
            data: dataset_m,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
          },

          {
            label: "IDH Feminino",
            data: dataset_f,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
        ],
      },
      options: {
        responsive: true,
        hover: {
          mode: "idh",
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
            },
            min: 0,
            max: 1,
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: false,
            text: "Indice de Desenvolvimento Humano",
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

    // Expectativa de Vida - Geral

    const dataset_ev = []

    raw.data.forEach((element) => {
        
        temp = {
          x: element.ano_referencia,
          y: element.expectativa_de_vida,
        };
        dataset_ev.push(temp);
    })

    new Chart(idh_ev, {
        type: "bar",
        data: {
          backgroundColor: "#FFFFFF",
          datasets: [
            {
              label: "Expectativa de Vida",
              data: dataset_ev,
              borderWidth: 1,
              borderColor: "#FFFFFF",
              backgroundColor: "#FFFFFF",
            },
          ],
        },
        options: {
          responsive: true,
          hover: {
            mode: "idh",
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
              },
            },
          },
          layouts: {},
          plugins: {
            title: {
              display: false,
              text: "Expectativa de Vida",
              color: "#FFFFFF",
            },
            subtitle: {
              display: true,
              color: "#FFFFFF",
              text: "Em anos",
            },
          },
        },
      });

    // Expectativa de Vida - Sexo

    const dataset_ev_m = [];
    const dataset_ev_f = [];

    raw.data.forEach((element) => {

      if (element.expectativa_de_vida_feminina > 0 && element.ano_referencia >= 2002) {
        // Masculino
        temp_m = {
          x: element.ano_referencia,
          y: element.expectativa_de_vida_masculina,
        };
        dataset_ev_m.push(temp_m);

        // Feminino
        temp_f = {
            x: element.ano_referencia,
            y: element.expectativa_de_vida_feminina,
        };

        dataset_ev_f.push(temp_f);
      }
    });

    new Chart(idh_ev_sexo, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "Expectativa Masculino",
            data: dataset_ev_m,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
          },

          {
            label: "Expectativa Feminino",
            data: dataset_ev_f,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
        ],
      },
      options: {
        responsive: true,
        hover: {
          mode: "idh",
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
            },
          },
        },
        layouts: {},
        plugins: {
          title: {
            display: false,
            text: "Indice de Desenvolvimento Humano",
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
    $("div.fonte-idh").text(raw.fonte);
    $("div.atualizacao-idh").text(raw.data_atualizacao);
  }
);
