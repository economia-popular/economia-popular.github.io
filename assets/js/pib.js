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

  }
);



// const raw = {"data_atualizacao":"2022-12-01T16:59:02.140477-03:00","unidade_medida":"Variação Trimestral","fonte":"https://servicodados.ibge.gov.br/api/v3/agregados/5932/periodos/-48/variaveis/6561?classificacao=11255[90707]\u0026localidades=N1","data":[{"ano_trimestre":"4º 2010","valor":5.7},{"ano_trimestre":"1º 2011","valor":5.2},{"ano_trimestre":"2º 2011","valor":4.7},{"ano_trimestre":"3º 2011","valor":3.5},{"ano_trimestre":"4º 2011","valor":2.6},{"ano_trimestre":"1º 2012","valor":1.7},{"ano_trimestre":"2º 2012","valor":1},{"ano_trimestre":"3º 2012","valor":2.5},{"ano_trimestre":"4º 2012","valor":2.5},{"ano_trimestre":"1º 2013","valor":2.7},{"ano_trimestre":"2º 2013","valor":4},{"ano_trimestre":"3º 2013","valor":2.8},{"ano_trimestre":"4º 2013","valor":2.5},{"ano_trimestre":"1º 2014","valor":3.5},{"ano_trimestre":"2º 2014","valor":-0.4},{"ano_trimestre":"3º 2014","valor":-0.6},{"ano_trimestre":"4º 2014","valor":-0.2},{"ano_trimestre":"1º 2015","valor":-1.6},{"ano_trimestre":"2º 2015","valor":-2.7},{"ano_trimestre":"3º 2015","valor":-4.3},{"ano_trimestre":"4º 2015","valor":-5.5},{"ano_trimestre":"1º 2016","valor":-5.1},{"ano_trimestre":"2º 2016","valor":-3.2},{"ano_trimestre":"3º 2016","valor":-2.5},{"ano_trimestre":"4º 2016","valor":-2.3},{"ano_trimestre":"1º 2017","valor":0.3},{"ano_trimestre":"2º 2017","valor":0.8},{"ano_trimestre":"3º 2017","valor":1.6},{"ano_trimestre":"4º 2017","valor":2.6},{"ano_trimestre":"1º 2018","valor":1.9},{"ano_trimestre":"2º 2018","valor":1.6},{"ano_trimestre":"3º 2018","valor":2.1},{"ano_trimestre":"4º 2018","valor":1.6},{"ano_trimestre":"1º 2019","valor":0.9},{"ano_trimestre":"2º 2019","valor":1.2},{"ano_trimestre":"3º 2019","valor":1.1},{"ano_trimestre":"4º 2019","valor":1.7},{"ano_trimestre":"1º 2020","valor":0.4},{"ano_trimestre":"2º 2020","valor":-10.1},{"ano_trimestre":"3º 2020","valor":-3},{"ano_trimestre":"4º 2020","valor":-0.4},{"ano_trimestre":"1º 2021","valor":1.7},{"ano_trimestre":"2º 2021","valor":12.4},{"ano_trimestre":"3º 2021","valor":4.4},{"ano_trimestre":"4º 2021","valor":2.1},{"ano_trimestre":"1º 2022","valor":2.4},{"ano_trimestre":"2º 2022","valor":3.7},{"ano_trimestre":"3º 2022","valor":3.6}]}
// const dataset = []

// raw.data.forEach(element => {
//     console.log(element)
//     temp = {
//         x : element.ano_trimestre,
//         y : element.valor
//     }
//     dataset.push(temp)
// });

// const raw_per_capta = {"data_atualizacao":"2022-12-01T16:39:16.386794-03:00","unidade_medida":"PIB Per Capta","fonte":"https://servicodados.ibge.gov.br/api/v3/agregados/6784/periodos/-48/variaveis/9812?classificacao=\u0026localidades=N1","data":[{"ano":"1996","valor":5219.36},{"ano":"1997","valor":5729.02},{"ano":"1998","valor":5944.92},{"ano":"1999","valor":6359.8},{"ano":"2000","valor":6900.62},{"ano":"2001","valor":7467.03},{"ano":"2002","valor":8340.58},{"ano":"2003","valor":9506.76},{"ano":"2004","valor":10705.99},{"ano":"2005","valor":11733.45},{"ano":"2006","valor":12880.52},{"ano":"2007","valor":14390.01},{"ano":"2008","valor":16280.82},{"ano":"2009","valor":17271.34},{"ano":"2010","valor":19938.6},{"ano":"2011","valor":22259.91},{"ano":"2012","valor":24278.35},{"ano":"2013","valor":26657.54},{"ano":"2014","valor":28648.74},{"ano":"2015","valor":29466.85},{"ano":"2016","valor":30558.75},{"ano":"2017","valor":31843.95},{"ano":"2018","valor":33593.82},{"ano":"2019","valor":35161.7},{"ano":"2020","valor":35935.69}]}
// const dataset_per_capta = []

// raw_per_capta.data.forEach(element => {
//     console.log(element)
//     temp = {
//         x : element.ano,
//         y : element.valor
//     }
//     dataset_per_capta.push(temp)
// });

// new Chart(pib_variacao, {
//   type: 'line',
//   data: {
//     backgroundColor: '#FFFFFF',
//     datasets: [{
//       label: '% ao trimestre do ano anterior',
//       data: dataset,
//       borderWidth: 1
//     }]
//   },
//   options: {
//     responsive: true,
//     scales: {
//     },
//     layouts: {
//     },
//     plugins: {
//         title: {
//             display: true,
//             text: 'Variação do PIB',
//             color: "#FFFFFF",
//             padding: {
//                 top: 10,
//                 bottom: 30
//             }
//         },
//         subtitle: {
//             display: true,
//             color: "#FFFFFF",
//             text: raw.unidade_medida
//         }
//     }
//   }
// });

// new Chart(pib_per_capta, {
//     type: 'bar',
//     data: {
//       backgroundColor: '#FFFFFF',
//       datasets: [{
//         label: 'R$',
//         data: dataset_per_capta,
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       },
//       plugins: {
//           title: {
//               display: true,
//               text: '',
//               color: "#FFFFFF",
//               padding: {
//                   top: 10,
//                   bottom: 30
//               }
//           },
//           subtitle: {
//               display: true,
//               color: "#FFFFFF",
//               text: raw_per_capta.unidade_medida
//           }
//       }
//     }
//   });
