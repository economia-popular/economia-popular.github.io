const gasolina_comum_variacao = document.getElementById("gasolina-comum-variacao");
const gasolina_aditivada_variacao = document.getElementById("gasolina-aditivada-variacao");

const etanol_variacao = document.getElementById("etanol-variacao");

const diesel_variacao = document.getElementById("diesel-variacao");
const diesel_s10_variacao = document.getElementById("diesel-s10-variacao");

const gas_veicular_variacao = document.getElementById("gas-veicular-variacao");


$.get(
  "https://economia-popular-delivery-content-indices.s3.amazonaws.com/combustiveis/combustiveis-brasil.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];
    const dataset_gasolina_comum_avg = [];
    const dataset_gasolina_comum_min = [];
    const dataset_gasolina_comum_max = [];

    const dataset_gasolina_aditivada_avg = [];
    const dataset_gasolina_aditivada_min = [];
    const dataset_gasolina_aditivada_max = [];

    const dataset_etanol_hidratado_avg = [];
    const dataset_etanol_hidratado_min = [];
    const dataset_etanol_hidratado_max = [];

    const dataset_diesel_avg = [];
    const dataset_diesel_min = [];
    const dataset_diesel_max = [];

    const dataset_diesel_s10_avg = [];
    const dataset_diesel_s10_min = [];
    const dataset_diesel_s10_max = [];

    const dataset_gas_veicular_avg = [];
    const dataset_gas_veicular_min = [];
    const dataset_gas_veicular_max = [];
    
    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      
      temp_gasolina_comum_avg = {
        x: element.referencia,
        y: element.gasolina_comum_preco_revenda_avg,
      };

      temp_gasolina_comum_min = {
        x: element.referencia,
        y: element.gasolina_comum_preco_revenda_min,
      };

      temp_gasolina_comum_max = {
        x: element.referencia,
        y: element.gasolina_comum_preco_revenda_max,
      };

      if (element.gasolina_aditivada_preco_revenda_avg != null) {

        temp_gasolina_aditivada_avg = {
            x: element.referencia,
            y: element.gasolina_aditivada_preco_revenda_avg,
          };
    
          temp_gasolina_aditivada_min = {
            x: element.referencia,
            y: element.gasolina_aditivada_preco_revenda_min,
          };
    
          temp_gasolina_aditivada_max = {
            x: element.referencia,
            y: element.gasolina_aditivada_preco_revenda_max,
          };

          dataset_gasolina_aditivada_avg.push(temp_gasolina_aditivada_avg);
          dataset_gasolina_aditivada_min.push(temp_gasolina_aditivada_min);
          dataset_gasolina_aditivada_max.push(temp_gasolina_aditivada_max);

      }

      if (element.gas_natural_veicular_gnv_preco_revenda_avg != null) {

          temp_gas_veicular_avg = {
            x: element.referencia,
            y: element.gas_natural_veicular_gnv_preco_revenda_avg,
          };
    
          temp_gas_veicular_min = {
            x: element.referencia,
            y: element.gas_natural_veicular_gnv_preco_revenda_min,
          };
    
          temp_gas_veicular_max = {
            x: element.referencia,
            y: element.gas_natural_veicular_gnv_preco_revenda_max,
          };

          dataset_gas_veicular_avg.push(temp_gas_veicular_avg);
          dataset_gas_veicular_min.push(temp_gas_veicular_min);
          dataset_gas_veicular_max.push(temp_gas_veicular_max);

      }      

      temp_etanol_hidratado_avg = {
        x: element.referencia,
        y: element.etanol_hidratado_preco_revenda_avg,
      };
    
      temp_etanol_hidratado_min = {
        x: element.referencia,
        y: element.etanol_hidratado_preco_revenda_min,
      };
    
      temp_etanol_hidratado_max = {
        x: element.referencia,
        y: element.etanol_hidratado_preco_revenda_max,
      };

      temp_diesel_avg = {
        x: element.referencia,
        y: element.oleo_diesel_preco_revenda_avg,
      };
      
      temp_diesel_min = {
        x: element.referencia,
        y: element.oleo_diesel_preco_revenda_min,
      };
      
      temp_diesel_max = {
        x: element.referencia,
        y: element.oleo_diesel_preco_revenda_max,
      };

      temp_diesel_s10_avg = {
        x: element.referencia,
        y: element.oleo_diesel_s10_preco_revenda_avg,
      };
      
      temp_diesel_s10_min = {
        x: element.referencia,
        y: element.oleo_diesel_s10_preco_revenda_min,
      };
      
      temp_diesel_s10_max = {
        x: element.referencia,
        y: element.oleo_diesel_s10_preco_revenda_max,
      };      

      dataset_gasolina_comum_avg.push(temp_gasolina_comum_avg);
      dataset_gasolina_comum_min.push(temp_gasolina_comum_min);
      dataset_gasolina_comum_max.push(temp_gasolina_comum_max);

      dataset_etanol_hidratado_avg.push(temp_etanol_hidratado_avg);
      dataset_etanol_hidratado_min.push(temp_etanol_hidratado_min);
      dataset_etanol_hidratado_max.push(temp_etanol_hidratado_max);

      dataset_diesel_avg.push(temp_diesel_avg);
      dataset_diesel_min.push(temp_diesel_min);
      dataset_diesel_max.push(temp_diesel_max);

      dataset_diesel_s10_avg.push(temp_diesel_s10_avg);
      dataset_diesel_s10_min.push(temp_diesel_s10_min);
      dataset_diesel_s10_max.push(temp_diesel_s10_max);

    });

    // Data Grid - Gasolina
    var columnDefs = [
      { headerName: "Referencia", field: "referencia" },
      { headerName: "Gasol. Comum Média", field: "gasolina_comum_preco_revenda_avg" },
      { headerName: "Gasol. Comum Min", field: "gasolina_comum_preco_revenda_min" },
      { headerName: "Gasol. Comum Max", field: "gasolina_comum_preco_revenda_max" },
      { headerName: "Gasol. Aditivada Média", field: "gasolina_aditivada_preco_revenda_avg" },
      { headerName: "Gasol. Aditivada Min", field: "gasolina_aditivada_preco_revenda_min" },
      { headerName: "Gasol. Aditivada Max", field: "gasolina_aditivada_preco_revenda_max" },
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

    var eGridDiv = document.querySelector('#gasolina-grid');
    new agGrid.Grid(eGridDiv, gridOptions);


    // Data Grid - Etanol
    var columnDefsEtanol = [
        { headerName: "Referencia", field: "referencia" },
        { headerName: "Etanol Média", field: "etanol_hidratado_preco_revenda_avg" },
        { headerName: "Etanol Min", field: "etanol_hidratado_preco_revenda_min" },
        { headerName: "Etanol Max", field: "etanol_hidratado_preco_revenda_max" },
      ];
  
      var gridOptionsEtanol = {
        defaultColDef: {
          flex: 1,
          sortable: true,
          filter: true,
        },
        columnDefs: columnDefsEtanol,
        rowData: raw.data,
        animateRows: true,
        accentedSort: true
      };
  
      var eGridDivEtanol = document.querySelector('#etanol-grid');
      new agGrid.Grid(eGridDivEtanol, gridOptionsEtanol);

    // Data Grid - Diesel
    var columnDefsDiesel = [
        { headerName: "Referencia", field: "referencia" },
        { headerName: "Diesel Média", field: "oleo_diesel_preco_revenda_avg" },
        { headerName: "Diesel Min", field: "oleo_diesel_preco_revenda_min" },
        { headerName: "Diesel Max", field: "oleo_diesel_preco_revenda_max" },
        { headerName: "Diesel S10 Média", field: "oleo_diesel_s10_preco_revenda_avg" },
        { headerName: "Diesel S10 Min", field: "oleo_diesel_s10_preco_revenda_min" },
        { headerName: "Diesel S10 Max", field: "oleo_diesel_s10_preco_revenda_max" },
      ];
  
      var gridOptionsDiesel = {
        defaultColDef: {
          flex: 1,
          sortable: true,
          filter: true,
        },
        columnDefs: columnDefsDiesel,
        rowData: raw.data,
        animateRows: true,
        accentedSort: true
      };
  
      var eGridDivDiesel = document.querySelector('#diesel-grid');
      new agGrid.Grid(eGridDivDiesel, gridOptionsDiesel);  


    // Data Grid - Gás Veicular
    var columnDefsGasVeicular = [
      { headerName: "Referencia", field: "referencia" },
      { headerName: "Gás Veicular Média", field: "gas_natural_veicular_gnv_preco_revenda_avg" },
      { headerName: "Gás Veicular Min", field: "gas_natural_veicular_gnv_preco_revenda_min" },
      { headerName: "Gás Veicular Max", field: "gas_natural_veicular_gnv_preco_revenda_max" },
    ];

    var gridOptionsGasVeicular = {
      defaultColDef: {
        flex: 1,
        sortable: true,
        filter: true,
      },
      columnDefs: columnDefsGasVeicular,
      rowData: raw.data,
      animateRows: true,
      accentedSort: true
    };

    var eGridDivGasVeicular = document.querySelector('#gas-veicular-grid');
    new agGrid.Grid(eGridDivGasVeicular, gridOptionsGasVeicular);       


    new Chart(gasolina_comum_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            type: "line",
            label: "Preço minimo da Gasolina",
            data: dataset_gasolina_comum_min.slice(-120), // Ultimos 10 anos,
            borderWidth: 1,
            borderColor: "#9EC1C9",
            backgroundColor: "#9EC1C9",
            fill: false
          },
          {
            type: "line",
            label: "Preço médio da Gasolina",
            data: dataset_gasolina_comum_avg.slice(-120), // Ultimos 10 anos,
            borderWidth: 1,
            borderColor: "#587F49",
            backgroundColor: "#587F49",
            fill: false
          },            
          {
            type: "line",
            label: "Preço máximo da Gasolina",
            data: dataset_gasolina_comum_max.slice(-120), // Ultimos 10 anos,
            borderWidth: 1,
            borderColor: "#BA6338",
            backgroundColor: "#BA6338",
            fill: false
          },        
        ],
      },
      options: {
        responsive: true,
        hover: {
            mode: 'index',
            intersec: false
        },
        scales: {
          x: {
            display: true,
            title: {
                display: true
            },
            grid: {
              color: "#FFFFFF",
            },
            ticks: {
              color: "#FFFFFF",
              major : {
                enabled: true
              }
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
            text: "Preços da Gasolina Comum - Revenda",
            color: "#FFFFFF",
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "Em R$",
          },
        },
      },
    });

    new Chart(gasolina_aditivada_variacao, {
        type: "line",
        data: {
          backgroundColor: "#FFFFFF",
          datasets: [
            {
              type: "line",
              label: "Preço minimo da Gasolina Aditivada",
              data: dataset_gasolina_aditivada_min.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#9EC1C9",
              backgroundColor: "#9EC1C9",
              fill: false
            },
            {
              type: "line",
              label: "Preço médio da Gasolina Aditivada",
              data: dataset_gasolina_aditivada_avg.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#587F49",
              backgroundColor: "#587F49",
              fill: false
            },            
            {
              type: "line",
              label: "Preço máximo da Gasolina Aditivada",
              data: dataset_gasolina_aditivada_max.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#BA6338",
              backgroundColor: "#BA6338",
              fill: false
            },        
          ],
        },
        options: {
          responsive: true,
          hover: {
              mode: 'index',
              intersec: false
          },
          scales: {
            x: {
              display: true,
              title: {
                  display: true
              },
              grid: {
                color: "#FFFFFF",
              },
              ticks: {
                color: "#FFFFFF",
                major : {
                  enabled: true
                }
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
              text: "Preços da Gasolina Comum - Revenda",
              color: "#FFFFFF",
            },
            subtitle: {
              display: true,
              color: "#FFFFFF",
              text: "Em R$",
            },
          },
        },
    });

    new Chart(etanol_variacao, {
        type: "line",
        data: {
          backgroundColor: "#FFFFFF",
          datasets: [
            {
              type: "line",
              label: "Preço minimo do Etanol",
              data: dataset_etanol_hidratado_min.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#9EC1C9",
              backgroundColor: "#9EC1C9",
              fill: false
            },
            {
              type: "line",
              label: "Preço médio do Etanol",
              data: dataset_etanol_hidratado_avg.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#587F49",
              backgroundColor: "#587F49",
              fill: false
            },            
            {
              type: "line",
              label: "Preço máximo do Etanol",
              data: dataset_etanol_hidratado_max.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#BA6338",
              backgroundColor: "#BA6338",
              fill: false
            },        
          ],
        },
        options: {
          responsive: true,
          hover: {
              mode: 'index',
              intersec: false
          },
          scales: {
            x: {
              display: true,
              title: {
                  display: true
              },
              grid: {
                color: "#FFFFFF",
              },
              ticks: {
                color: "#FFFFFF",
                major : {
                  enabled: true
                }
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
              text: "Preços da Gasolina Comum - Revenda",
              color: "#FFFFFF",
            },
            subtitle: {
              display: true,
              color: "#FFFFFF",
              text: "Em R$",
            },
          },
        },
    });    

    new Chart(diesel_variacao, {
        type: "line",
        data: {
          backgroundColor: "#FFFFFF",
          datasets: [
            {
              type: "line",
              label: "Preço minimo do Diesel",
              data: dataset_diesel_min.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#9EC1C9",
              backgroundColor: "#9EC1C9",
              fill: false
            },
            {
              type: "line",
              label: "Preço médio do Diesel",
              data: dataset_diesel_avg.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#587F49",
              backgroundColor: "#587F49",
              fill: false
            },            
            {
              type: "line",
              label: "Preço máximo do Diesel",
              data: dataset_diesel_max.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#BA6338",
              backgroundColor: "#BA6338",
              fill: false
            },        
          ],
        },
        options: {
          responsive: true,
          hover: {
              mode: 'index',
              intersec: false
          },
          scales: {
            x: {
              display: true,
              title: {
                  display: true
              },
              grid: {
                color: "#FFFFFF",
              },
              ticks: {
                color: "#FFFFFF",
                major : {
                  enabled: true
                }
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
              text: "Preços do Diesel S500 (Comum) - Revenda",
              color: "#FFFFFF",
            },
            subtitle: {
              display: true,
              color: "#FFFFFF",
              text: "Em R$",
            },
          },
        },
    });        

    new Chart(diesel_s10_variacao, {
        type: "line",
        data: {
          backgroundColor: "#FFFFFF",
          datasets: [
            {
              type: "line",
              label: "Preço minimo do Diesel S10",
              data: dataset_diesel_s10_min.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#9EC1C9",
              backgroundColor: "#9EC1C9",
              fill: false
            },
            {
              type: "line",
              label: "Preço médio do Diesel S10",
              data: dataset_diesel_s10_avg.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#587F49",
              backgroundColor: "#587F49",
              fill: false
            },            
            {
              type: "line",
              label: "Preço máximo do Diesel S10",
              data: dataset_diesel_s10_max.slice(-120), // Ultimos 10 anos,
              borderWidth: 1,
              borderColor: "#BA6338",
              backgroundColor: "#BA6338",
              fill: false
            },        
          ],
        },
        options: {
          responsive: true,
          hover: {
              mode: 'index',
              intersec: false
          },
          scales: {
            x: {
              display: true,
              title: {
                  display: true
              },
              grid: {
                color: "#FFFFFF",
              },
              ticks: {
                color: "#FFFFFF",
                major : {
                  enabled: true
                }
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
              text: "Preços do Diesel S10 - Revenda",
              color: "#FFFFFF",
            },
            subtitle: {
              display: true,
              color: "#FFFFFF",
              text: "Em R$",
            },
          },
        },
    });   

    new Chart(gas_veicular_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            type: "line",
            label: "Preço minimo do Gás Veicular",
            data: dataset_gas_veicular_min.slice(-120), // Ultimos 10 anos,
            borderWidth: 1,
            borderColor: "#9EC1C9",
            backgroundColor: "#9EC1C9",
            fill: false
          },
          {
            type: "line",
            label: "Preço médio do Gás Veicular",
            data: dataset_gas_veicular_avg.slice(-120), // Ultimos 10 anos,
            borderWidth: 1,
            borderColor: "#587F49",
            backgroundColor: "#587F49",
            fill: false
          },            
          {
            type: "line",
            label: "Preço máximo do Gás Veicular",
            data: dataset_gas_veicular_max.slice(-120), // Ultimos 10 anos,
            borderWidth: 1,
            borderColor: "#BA6338",
            backgroundColor: "#BA6338",
            fill: false
          },        
        ],
      },
      options: {
        responsive: true,
        hover: {
            mode: 'index',
            intersec: false
        },
        scales: {
          x: {
            display: true,
            title: {
                display: true
            },
            grid: {
              color: "#FFFFFF",
            },
            ticks: {
              color: "#FFFFFF",
              major : {
                enabled: true
              }
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
            text: "Preços do Gás Natural Veicular GNV - Revenda",
            color: "#FFFFFF",
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: "Em R$",
          },
        },
      },
  });   


    $("div.fonte-combustiveis").text(raw.fonte);
    $("div.atualizacao-combustiveis").text(raw.data_atualizacao);
  }
);
