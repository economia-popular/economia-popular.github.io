const desmatamento_variacao = document.getElementById("desmatamento-variacao");
const desmatamento_regioes_variacao = document.getElementById("desmatamento-regioes-variacao");


$.get(
    "https://economia-popular-delivery-content-indices.s3.amazonaws.com/ambientais/desmatamento_prodes.json",
    function (data, textStatus, jqXHR) {

        dataset_desmatamento = [];
        dataset_desmatamento_acre = [];
        dataset_desmatamento_amazonas = [];
        dataset_desmatamento_amapa = [];
        dataset_desmatamento_maranhao = [];
        dataset_desmatamento_mato_grosso = [];
        dataset_desmatamento_para = [];
        dataset_desmatamento_rondonia = [];
        dataset_desmatamento_roraima = [];
        dataset_desmatamento_tocantins = [];

        var raw = JSON.parse(data);

        raw.data.forEach((element) => {

            var referencia = element.referencia.toString()

            temp_desmatamento = {
                x: referencia,
                y: element.area_total_desmatamento,
            };

            temp_desmatamento_acre = {
                x: referencia,
                y: element.acre,
            };

            temp_desmatamento_amazonas = {
                x: referencia,
                y: element.amazonas,
            };

            temp_desmatamento_amapa = {
                x: referencia,
                y: element.amapa,
            };

            temp_desmatamento_maranhao = {
                x: referencia,
                y: element.maranhao,
            };

            temp_desmatamento_mato_grosso = {
                x: referencia, 
                y: element.mato_grosso
            }

            temp_desmatamento_para = {
                x: referencia, 
                y: element.para
            }

            temp_desmatamento_rondonia = {
                x: referencia, 
                y: element.rondonia
            }

            temp_desmatamento_roraima = {
                x: referencia, 
                y: element.roraima
            }

            temp_desmatamento_tocantins = {
                x: referencia, 
                y: element.tocantins
            }

            dataset_desmatamento_acre.push(temp_desmatamento_acre)
            dataset_desmatamento_amapa.push(temp_desmatamento_amapa)
            dataset_desmatamento_amazonas.push(temp_desmatamento_amazonas)

            dataset_desmatamento_maranhao.push(temp_desmatamento_maranhao)
            dataset_desmatamento_mato_grosso.push(temp_desmatamento_mato_grosso)
            dataset_desmatamento_para.push(temp_desmatamento_para)
            dataset_desmatamento_rondonia.push(temp_desmatamento_rondonia)
            dataset_desmatamento_roraima.push(temp_desmatamento_roraima)
            dataset_desmatamento_tocantins.push(temp_desmatamento_tocantins)

            dataset_desmatamento.push(temp_desmatamento);
        })

            // Data Grid
        var columnDefs = [
            { headerName: "Referencia", field: "referencia" },
            { headerName: "Acre", field: "acre" },
            { headerName: "Amazonas", field: "amazonas" },
            { headerName: "Amapá", field: "amapa" },
            { headerName: "Maranhão", field: "maranhao" },
            { headerName: "Mato Grosso", field: "mato_grosso" },
            { headerName: "Pará", field: "para" },
            { headerName: "Rondônia", field: "rondonia" },
            { headerName: "Roraima", field: "roraima" },
            { headerName: "Tocantins", field: "tocantins" },
            { headerName: "Area Total", field: "area_total_desmatamento" }
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
    
        var eGridDiv = document.querySelector('#desmatamento-grid');
    
        new agGrid.Grid(eGridDiv, gridOptions);

        new Chart(desmatamento_variacao, {
            type: "bar",
            data: {
              backgroundColor: "#FFFFFF",
              datasets: [
                {
                    type: "line",
                    label: "Área Total Desmatada",
                    data: dataset_desmatamento,
                    borderWidth: 1,
                    borderColor: "#BA6338",
                    backgroundColor: "#BA6338",
                    fill: false
                },  
                {
                  type: "bar",
                  label: "Área Total Desmatada",
                  data: dataset_desmatamento,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                  backgroundColor: "#FFFFFF",
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
                  text: "Historico de Desmatamento da Amazônia Legal",
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

        new Chart(desmatamento_regioes_variacao, {
            type: "bar",
            data: {
              backgroundColor: "#FFFFFF",
              datasets: [ 
                {
                    type: "line",
                    label: "Área Total Desmatada",
                    data: dataset_desmatamento,
                    borderWidth: 1,
                    borderColor: "#BA6338",
                    backgroundColor: "#BA6338",
                    fill: false
                },  
                {
                  type: "bar",
                  label: "Acre",
                  data: dataset_desmatamento_acre,
                  borderWidth: 1,
                  borderColor: "#89944F",
                  backgroundColor: "#89944F",
                  fill: false,
                  stack: true
                },   
                {
                    type: "bar",
                    label: "Amazonas",
                    data: dataset_desmatamento_amazonas,
                    borderWidth: 1,
                    borderColor: "#cf844d",
                    backgroundColor: "#cf844d",
                    fill: false,
                    stack: true
                }, 
                {
                    type: "bar",
                    label: "Amapá",
                    data: dataset_desmatamento_amapa,
                    borderWidth: 1,
                    borderColor: "#1f271b",
                    backgroundColor: "#1f271b",
                    fill: false,
                    stack: true
                },   
                {
                    type: "bar",
                    label: "Maranhão",
                    data: dataset_desmatamento_maranhao,
                    borderWidth: 1,
                    borderColor: "#5c7b46",
                    backgroundColor: "#5c7b46",
                    fill: false,
                    stack: true
                },  
                
                {
                    type: "bar",
                    label: "Mato Grosso",
                    data: dataset_desmatamento_mato_grosso,
                    borderWidth: 1,
                    borderColor: "#844525",
                    backgroundColor: "#844525",
                    fill: false,
                    stack: true
                }, 
                {
                    type: "bar",
                    label: "Pará",
                    data: dataset_desmatamento_para,
                    borderWidth: 1,
                    borderColor: "#b94d29",
                    backgroundColor: "#b94d29",
                    fill: false,
                    stack: true
                }, 
                {
                    type: "bar",
                    label: "Rondonia",
                    data: dataset_desmatamento_rondonia,
                    borderWidth: 1,
                    borderColor: "#38261a",
                    backgroundColor: "#38261a",
                    fill: false,
                    stack: true
                }, 
                {
                    type: "bar",
                    label: "Roraima",
                    data: dataset_desmatamento_roraima,
                    borderWidth: 1,
                    borderColor: "#073c45",
                    backgroundColor: "#073c45",
                    fill: false,
                    stack: true
                },
                {
                    type: "bar",
                    label: "Tocantins",
                    data: dataset_desmatamento_tocantins,
                    borderWidth: 1,
                    borderColor: "#32461a",
                    backgroundColor: "#32461a",
                    fill: false,
                    stack: true
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
                  text: "Historico de Desmatamento Segmentado por Região",
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

        // Fonte 
        $("div.fonte-desmatamento").text(raw.fonte);
        $("div.atualizacao-ambientais").text(raw.data_atualizacao);
        
    }
)