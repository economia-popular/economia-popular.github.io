const ipca_variacao = document.getElementById("ipca-variacao");
const ipca_acumulado = document.getElementById("ipca-acumulado");
const ipca_acumulado_12_meses = document.getElementById("ipca-acumulado-12");

const ipca_variacao_setor = document.getElementById("ipca-variacao-setor")
const ipca_acumulado_setor = document.getElementById("ipca-acumulado-setor")

const ipca15_variacao = document.getElementById("ipca15-variacao");
const ipca15_acumulado = document.getElementById("ipca15-acumulado");
const ipca15_acumulado_12_meses = document.getElementById("ipca15-acumulado-12");
// IPCA - Variação
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/inflacao.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_acumulado = []
    const dataset_12_meses = []

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {

      temp = {
        x: element.referencia,
        y: element.ipca_variacao,
      };

      temp_ano = {
        x: element.referencia,
        y: element.ipca_acumulado_ano,
      };

      temp_12_meses = {
        x: element.referencia,
        y: element.ipca_acumulado_doze_meses,
      };

      dataset.push(temp);
      dataset_acumulado.push(temp_ano);
      dataset_12_meses.push(temp_12_meses);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Periodo", field: "referencia" },
      { headerName: "Variação %", field: "ipca_variacao" },
      { headerName: "Acumulado Ano %", field: "ipca_acumulado_ano" },
      { headerName: "Acumulado 12 Meses %", field: "ipca_acumulado_doze_meses" }
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
      accentedSort: true
    };

    var eGridDiv = document.querySelector('#ipca-grid');

    new agGrid.Grid(eGridDiv, gridOptions);

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
            type: "line"
          }
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
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });


    new Chart(ipca_acumulado, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% acumulo anual",
            data: dataset_acumulado,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "% acumulado 12 meses",
            type: "line",
            data: dataset_12_meses,
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
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
            text: "Acumulado IPCA %",
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

    // Fonte do IPCA
    $("div.fonte-ipca").text(raw.fonte);
    $("div.atualizacao-ipca").text(raw.data_atualizacao);
  }
);

function IPCASetor(data) {

  var raw = JSON.parse(data);

  const dataset = [];
  const dataset_alimentacao = [];
  const dataset_artigos_residencia = [];
  const dataset_comunicacao = [];
  const dataset_despesas_pessoais = [];
  const dataset_educacao = [];
  const dataset_habitacao = [];
  const dataset_saude = [];
  const dataset_transporte = [];
  const dataset_vestuario = [];


  raw.data.forEach((element) => {
    dataset.push({
      x: element.referencia,
      y: element.variacao_geral,
    })
    dataset_alimentacao.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_alimentacao,
    })
    dataset_artigos_residencia.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_artigos_residencia,
    })
    dataset_comunicacao.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_comunicacao,
    })
    dataset_despesas_pessoais.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_despesas_pessoais,
    })
    dataset_educacao.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_educacao,
    })
    dataset_habitacao.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_habitacao,
    })
    dataset_saude.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_saude,
    })
    dataset_transporte.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_transporte,
    })
    dataset_vestuario.push({
      x: element.referencia,
      y: element.ipca_acumulado_ano_vestuario,
    })
  })

  new Chart(ipca_acumulado_setor, {
    type: "bar",
    data: {
      backgroundColor: "#FFFFFF",
      datasets: [
        {
          label: "IPCA",
          data: dataset.slice(-60),
          borderWidth: 1,
          borderColor: "#FFFFFF",
          backgroundColor: "#FFFFFF",
          type: "line"
        },
        {
          label: "Alimentação",
          data: dataset_alimentacao.slice(-60),
          borderWidth: 1,
          borderColor: "#ffa500",
          backgroundColor: "#ffa500",
          type: "bar",
          stack: true
        },
        {
          label: "Habitacao",
          data: dataset_habitacao.slice(-60),
          borderWidth: 1,
          borderColor: "#008000",
          backgroundColor: "#008000",
          type: "bar",
          stack: true
        },
        {
          label: "Art. Residencia",
          data: dataset_artigos_residencia.slice(-60),
          borderWidth: 1,
          borderColor: "#f00",
          backgroundColor: "#f00",
          type: "bar",
          stack: true
        },
        {
          label: "Vestuario",
          data: dataset_vestuario.slice(-60),
          borderWidth: 1,
          borderColor: "#800080",
          backgroundColor: "#800080",
          type: "bar",
          stack: true
        },
        {
          label: "Transporte",
          data: dataset_transporte.slice(-60),
          borderWidth: 1,
          borderColor: "#a52a2a",
          backgroundColor: "#a52a2a",
          type: "bar",
          stack: true
        },
        {
          label: "Saúde",
          data: dataset_saude.slice(-60),
          borderWidth: 1,
          borderColor: "#ffc0cb",
          backgroundColor: "#ffc0cb",
          type: "bar",
          stack: true
        },
        {
          label: "Despesas Pessoais",
          data: dataset_despesas_pessoais.slice(-60),
          borderWidth: 1,
          borderColor: "#808080",
          backgroundColor: "#808080",
          type: "bar",
          stack: true
        },
        {
          label: "Educação",
          data: dataset_educacao.slice(-60),
          borderWidth: 1,
          borderColor: "#808000",
          backgroundColor: "#808000",
          type: "bar",
          stack: true
        },
        {
          label: "Comunicação",
          data: dataset_comunicacao.slice(-60),
          borderWidth: 1,
          borderColor: "#00ffff",
          backgroundColor: "#00ffff",
          type: "bar",
          stack: true
        }
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
          text: "Decomposição do IPCA por setor",
          color: "#FFFFFF",
          padding: {
            top: 10,
            bottom: 30,
          },
        },
        subtitle: {
          display: true,
          color: "#FFFFFF",
          // text: raw.unidade_medida,
        },
        legend: {
          labels: {
            color: "#FFFFFF",
          }
        }
      },
    },
  });

  // Data Grid
  var columnDefs = [
    { headerName: "Periodo", field: "referencia" },
    { headerName: "Alimentação %", field: "ipca_acumulado_ano_alimentacao" },
    { headerName: "Art. Res. %", field: "ipca_acumulado_ano_artigos_residencia" },
    { headerName: "Comunicação %", field: "ipca_acumulado_ano_comunicacao" },
    { headerName: "Despesas Pessoais %", field: "ipca_acumulado_ano_despesas_pessoais" },
    { headerName: "Educação %", field: "ipca_acumulado_ano_educacao" },
    { headerName: "Habitação %", field: "ipca_acumulado_ano_habitacao" },
    { headerName: "Saúde %", field: "ipca_acumulado_ano_saude" },
    { headerName: "Transporte %", field: "ipca_acumulado_ano_transporte" },
    { headerName: "Vestuário %", field: "ipca_acumulado_ano_vestuario" }
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
    accentedSort: true
  };

  var eGridDiv = document.querySelector('#ipca-setor-acumulado-grid');

  new agGrid.Grid(eGridDiv, gridOptions);
  
}

// IPCA Detalhado
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/ipca_detalhado.json",
  function (data, textStatus, jqXHR) {
    var raw = JSON.parse(data);

    const dataset = [];
    const dataset_alimentacao = [];
    const dataset_artigos_residencia = [];
    const dataset_comunicacao = [];
    const dataset_despesas_pessoais = [];
    const dataset_educacao = [];
    const dataset_habitacao = [];
    const dataset_saude = [];
    const dataset_transporte = [];
    const dataset_vestuario = [];

    raw.data.forEach((element) => {
      dataset.push({
        x: element.referencia,
        y: element.variacao_geral,
      })
      dataset_alimentacao.push({
        x: element.referencia,
        y: element.variacao_alimentacao_dec,
      })
      dataset_artigos_residencia.push({
        x: element.referencia,
        y: element.variacao_artigos_residencia_dec,
      })
      dataset_comunicacao.push({
        x: element.referencia,
        y: element.variacao_comunicacao_dec,
      })
      dataset_despesas_pessoais.push({
        x: element.referencia,
        y: element.variacao_despesas_pessoais_dec,
      })
      dataset_educacao.push({
        x: element.referencia,
        y: element.variacao_educacao_dec,
      })
      dataset_habitacao.push({
        x: element.referencia,
        y: element.variacao_habitacao_dec,
      })
      dataset_saude.push({
        x: element.referencia,
        y: element.variacao_saude_cuidados_pessoais_dec,
      })
      dataset_transporte.push({
        x: element.referencia,
        y: element.variacao_transporte_dec,
      })
      dataset_vestuario.push({
        x: element.referencia,
        y: element.variacao_vestuario_dec,
      })
    })


    new Chart(ipca_variacao_setor, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "IPCA",
            data: dataset,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            type: "line"
          },
          {
            label: "Alimentação",
            data: dataset_alimentacao,
            borderWidth: 1,
            borderColor: "#ffa500",
            backgroundColor: "#ffa500",
            type: "bar",
            stack: true
          },
          {
            label: "Habitacao",
            data: dataset_habitacao,
            borderWidth: 1,
            borderColor: "#008000",
            backgroundColor: "#008000",
            type: "bar",
            stack: true
          },
          {
            label: "Art. Residencia",
            data: dataset_artigos_residencia,
            borderWidth: 1,
            borderColor: "#f00",
            backgroundColor: "#f00",
            type: "bar",
            stack: true
          },
          {
            label: "Vestuario",
            data: dataset_vestuario,
            borderWidth: 1,
            borderColor: "#800080",
            backgroundColor: "#800080",
            type: "bar",
            stack: true
          },
          {
            label: "Transporte",
            data: dataset_transporte,
            borderWidth: 1,
            borderColor: "#a52a2a",
            backgroundColor: "#a52a2a",
            type: "bar",
            stack: true
          },
          {
            label: "Saúde",
            data: dataset_saude,
            borderWidth: 1,
            borderColor: "#ffc0cb",
            backgroundColor: "#ffc0cb",
            type: "bar",
            stack: true
          },
          {
            label: "Despesas Pessoais",
            data: dataset_despesas_pessoais,
            borderWidth: 1,
            borderColor: "#808080",
            backgroundColor: "#808080",
            type: "bar",
            stack: true
          },
          {
            label: "Educação",
            data: dataset_educacao,
            borderWidth: 1,
            borderColor: "#808000",
            backgroundColor: "#808000",
            type: "bar",
            stack: true
          },
          {
            label: "Comunicação",
            data: dataset_comunicacao,
            borderWidth: 1,
            borderColor: "#00ffff",
            backgroundColor: "#00ffff",
            type: "bar",
            stack: true
          }
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
            text: "Decomposição do IPCA por setor",
            color: "#FFFFFF",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            // text: raw.unidade_medida,
          },
          legend: {
            labels: {
              color: "#FFFFFF",
            }
          }
        },
      },
    });

    var columnDefs = [
      { headerName: "Periodo", field: "referencia" },
      { headerName: "Alimentação %", field: "variacao_alimentacao" },
      { headerName: "Art. Res. %", field: "variacao_artigos_residencia" },
      { headerName: "Comunicação %", field: "variacao_comunicacao" },
      { headerName: "Despesas Pessoais %", field: "variacao_despesas_pessoais" },
      { headerName: "Educação %", field: "variacao_educacao" },
      { headerName: "Habitação %", field: "variacao_habitacao" },
      { headerName: "Saúde %", field: "variacao_saude_cuidados_pessoais" },
      { headerName: "Transporte %", field: "variacao_transporte" },
      { headerName: "Vestuário %", field: "variacao_vestuario" }
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
      accentedSort: true
    };
  
    var eGridDiv = document.querySelector('#ipca-setor-variacao-grid');
  
    new agGrid.Grid(eGridDiv, gridOptions);

  }
)

// IPCA15
$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/ipca15.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_acumulado = []
    const dataset_12_meses = []

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {

      temp = {
        x: element.referencia,
        y: element.variacao,
      };

      temp_ano = {
        x: element.referencia,
        y: element.acumulado_ano,
      };

      temp_12_meses = {
        x: element.referencia,
        y: element.acumulado_doze_meses,
      };

      dataset.push(temp);
      dataset_acumulado.push(temp_ano);
      dataset_12_meses.push(temp_12_meses);
    });

    // Data Grid
    var columnDefs = [
      { headerName: "Periodo", field: "referencia" },
      { headerName: "Variação %", field: "ipca_variacao" },
      { headerName: "Acumulado Ano %", field: "ipca_acumulado_ano" },
      { headerName: "Acumulado 12 Meses %", field: "ipca_acumulado_doze_meses" }
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
      accentedSort: true
    };

    // new agGrid.Grid(eGridDiv, gridOptions);

    new Chart(ipca15_variacao, {
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
            type: "line"
          }
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
            text: "Variação do IPCA15 %",
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


    new Chart(ipca15_acumulado, {
      type: "bar",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% acumulo anual",
            data: dataset_acumulado,
            borderWidth: 1,
            borderColor: "#5D6D2F",
            backgroundColor: "#5D6D2F",
          },
          {
            label: "% acumulado 12 meses",
            data: dataset_12_meses,
            type: "line",
            borderWidth: 1,
            borderColor: "#114247",
            backgroundColor: "#114247",
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
            text: "Acumulado IPCA15 %",
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