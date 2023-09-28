const carne_bovina = document.getElementById("carne-bovina");
const carne_suina = document.getElementById("carne-suina");
const carne_frango = document.getElementById("carne-frango");
const cana = document.getElementById("cana");
const milho = document.getElementById("milho")
const leite = document.getElementById("leite")
const trigo = document.getElementById("trigo")
const ovos = document.getElementById("ovos")
const arroz = document.getElementById("arroz")
const feijao = document.getElementById("feijao")


// Preços Mercado
$.get(
    "https://economia-popular-delivery-content-indices.s3.amazonaws.com/precos/precos.json",
    function (data, textStatus, jqXHR) {
        const dataset_carne_bovina_dianteira = [];
        const dataset_carne_bovina_traseira = [];
        const dataset_carne_suina_carcaca = [];
        const dataset_carne_suina_lombo = [];
        const dataset_carne_suina_paleta = [];
        const dataset_carne_suina_pernil = [];
        const dataset_carne_frango_resfriado = [];
        const dataset_ovos_extra = [];
        const dataset_ovos_grandes = [];
        const dataset_ovos_medios = [];
        const dataset_ovos_pequenos = [];
        const dataset_arroz_tipo_1 = [];
        const dataset_arroz_tipo_2 = [];
        const dataset_feijao = [];
        const dataset_feijao_preto = [];
        const dataset_cana_de_acucar = [];
        const dataset_milho = [];
        const dataset_leite = [];
        const dataset_trigo = [];

        var raw = JSON.parse(data);

        raw.data.forEach((element) => {
            // Carne Bovina
            dataset_carne_bovina_dianteira.push({
                x: element.referencia,
                y: element.carne_bovina_dianteira_kg,
            });
            dataset_carne_bovina_traseira.push({
                x: element.referencia,
                y: element.carne_bovina_traseira_kg,
            });

            // Carne Suina
            dataset_carne_suina_carcaca.push({
                x: element.referencia,
                y: element.carne_suina_carcaca_kg,
            });
            dataset_carne_suina_lombo.push({
                x: element.referencia,
                y: element.carne_suina_lombo_kg,
            });
            dataset_carne_suina_paleta.push({
                x: element.referencia,
                y: element.carne_suina_paleta_kg,
            });
            dataset_carne_suina_pernil.push({
                x: element.referencia,
                y: element.carne_suina_pernil_kg,
            });

            // Ovos
            dataset_ovos_extra.push({
                x: element.referencia,
                y: element.ovos_extra_tipo_1_30_duzias
            });
            dataset_ovos_grandes.push({
                x: element.referencia,
                y: element.ovos_grandes_tipo_2_30_duzias
            });
            dataset_ovos_medios.push({
                x: element.referencia,
                y: element.ovos_medios_tipo_3_30_duzias
            });
            dataset_ovos_pequenos.push({
                x: element.referencia,
                y: element.ovos_pequenos_tipo_4_30_duzias
            });

            // Frango
            dataset_carne_frango_resfriado.push({
                x: element.referencia,
                y: element.frango_kg,
            })

            // Arroz
            dataset_arroz_tipo_1.push({
                x: element.referencia,
                y: element.arroz_tipo_1_30kg,
            })
            dataset_arroz_tipo_2.push({
                x: element.referencia,
                y: element.arroz_tipo_2_30kg,
            })

            // Feijão
            dataset_feijao.push({
                x: element.referencia,
                y: element.feijao_preco_30kg,
            })
            dataset_feijao_preto.push({
                x: element.referencia,
                y: element.feijao_preto_preco_30kg,
            })

            // Cana
            dataset_cana_de_acucar.push({
                x: element.referencia,
                y: element.cana_de_acucar_preco_tonelada
            })

            // Milho
            dataset_milho.push({
                x: element.referencia,
                y: element.milho_preco_60kg
            })

            // Leite
            dataset_leite.push({
                x: element.referencia,
                y: element.leite_litro
            })

            // trigo
            dataset_trigo.push({
                x: element.referencia,
                y: element.trigo_60kg
            })
        });

        // Carne Bovina - Chart
        new Chart(carne_bovina, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "bar",
                        stack: false,
                        label: "Parte Dianteira R$",
                        data: dataset_carne_bovina_dianteira.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#b94d29",
                        backgroundColor: "#b94d29",
                    },
                    {
                        type: "bar",
                        stack: false,
                        label: "Parte Traseira R$",
                        data: dataset_carne_bovina_traseira.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#5c7b46",
                        backgroundColor: "#5c7b46",
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
                        text: "Carne Bovina - Atacado",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço de Atacado da Carne Bovina por Kilo",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Carne Suina - Chart
        new Chart(carne_suina, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "line",
                        stack: false,
                        label: "Carcaça Suina R$",
                        data: dataset_carne_suina_carcaca.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#0798b1",
                        backgroundColor: "#0798b1",
                    },
                    {
                        type: "bar",
                        stack: false,
                        label: "Lombo Suino R$",
                        data: dataset_carne_suina_lombo.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#b94d29",
                        backgroundColor: "#b94d29",
                    },
                    {
                        type: "bar",
                        stack: false,
                        label: "Pernil Suino R$",
                        data: dataset_carne_suina_pernil.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#89944F",
                        backgroundColor: "#89944F",
                    },
                    {
                        type: "bar",
                        stack: false,
                        label: "Paleta Suina R$",
                        data: dataset_carne_suina_paleta.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#844525",
                        backgroundColor: "#844525",
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
                        text: "Carne Suina - Atacado",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço de Atacado da Carne Suina por Kilo",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Carne Frango - Chart
        new Chart(carne_frango, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "line",
                        stack: false,
                        label: "Frango Resfriado Kg - R$",
                        data: dataset_carne_frango_resfriado.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#ffffff",
                        backgroundColor: "#ffffff",
                    },
                    {
                        type: "bar",
                        stack: true,
                        label: "Frango Resfriado Kg - R$",
                        data: dataset_carne_frango_resfriado.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#ffffff",
                        backgroundColor: "#ffffff",
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
                        text: "Carne de Frango - Atacado",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço de Atacado da Carne de Frango por Kilo",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Ovos - Chart
        new Chart(ovos, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "line",
                        label: "Ovos Tipo 1 - Extra R$",
                        data: dataset_ovos_extra.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#0798b1",
                        backgroundColor: "#0798b1",
                    },
                    {
                        type: "line",
                        label: "Ovos Tipo 2 - Grandes R$",
                        data: dataset_ovos_grandes.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#b94d29",
                        backgroundColor: "#b94d29",
                    },
                    {
                        type: "line",
                        label: "Ovos Tipo 3 - Medios R$",
                        data: dataset_ovos_medios.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#89944F",
                        backgroundColor: "#89944F",
                    },
                    {
                        type: "line",
                        label: "Ovos Tipo 4 - Pequenos R$",
                        data: dataset_ovos_pequenos.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#844525",
                        backgroundColor: "#844525",
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
                        text: "Preço dos Ovos - Atacado",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço de Atacado dos Ovos - 30 duzias",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Arroz - Chart
        new Chart(arroz, {
            type: "line",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "line",
                        label: "Arroz Tipo 1 - 30kg - R$",
                        data: dataset_arroz_tipo_1.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#b94d29",
                        backgroundColor: "#b94d29",
                    },
                    {
                        type: "line",
                        label: "Arroz Tipo 2 - 30kg - R$",
                        data: dataset_arroz_tipo_2.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#5c7b46",
                        backgroundColor: "#5c7b46",
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
                        text: "Preço do Arroz - Atacado",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço de Atacado das Sacas de Arroz de 30 Kg",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Feijão - Chart
        new Chart(feijao, {
            type: "line",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "line",
                        label: "Feijão - 30kg - R$",
                        data: dataset_feijao.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#b94d29",
                        backgroundColor: "#b94d29",
                    },
                    {
                        type: "line",
                        label: "Feijão Preto - 30kg - R$",
                        data: dataset_feijao_preto.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#5c7b46",
                        backgroundColor: "#5c7b46",
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
                        text: "Preço do Feijão - Atacado",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço de Atacado das Sacas de Feijão de 30 Kg",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Cana de Açucar - Chart
        new Chart(cana, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "bar",
                        stack: true,
                        label: "Cana-de-Açucar - Tonelada - R$",
                        data: dataset_cana_de_acucar.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#ffffff",
                        backgroundColor: "#ffffff",
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
                        text: "Cana-de-Açucar - Preço do Agricultor",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço recebido pelo Agricultos pela Tonelada da Cana-de-Açucar",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Milho - Chart
        new Chart(milho, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "bar",
                        stack: true,
                        label: "Milho - Tonelada - R$",
                        data: dataset_milho.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#ffffff",
                        backgroundColor: "#ffffff",
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
                        text: "Milho - Preço do Agricultor",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço recebido pelo Agricultos pela porção de 60Kg de Milho",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Trigo - Chart
        new Chart(trigo, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "bar",
                        stack: true,
                        label: "Trigo - Saca 60Kg - R$",
                        data: dataset_trigo.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#ffffff",
                        backgroundColor: "#ffffff",
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
                        text: "Trigo - Preço do Agricultor",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço recebido pelo Agricultos pela porção de 60Kg de Trigo",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        // Leite - Chart
        new Chart(leite, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        type: "bar",
                        stack: true,
                        label: "Litro do Leite - R$",
                        data: dataset_leite.slice(-120), // Ultimos 10 anos,,
                        borderWidth: 1,
                        borderColor: "#ffffff",
                        backgroundColor: "#ffffff",
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
                        text: "Leite - Preço do Agricultor",
                        color: "#FFFFFF",
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                    },
                    subtitle: {
                        display: true,
                        color: "#FFFFFF",
                        text: "Preço recebido pelo Agricultos pela Litro do Leite",
                    },
                    legend: {
                        labels: {
                            color: "#FFFFFF",
                        }
                    }
                },
            },
        });

        var gridData = raw.data.reverse()

        // Carne Bovina - Grid
        var columnBovina = [
            { headerName: "Período", field: "referencia" },
            { headerName: "Parte Dianteira", field: "carne_bovina_dianteira_kg" },
            { headerName: "Parte Traseira", field: "carne_bovina_traseira_kg" }
        ];

        var gridOptionsBovina = {
            defaultColDef: {
                flex: 1,
                sortable: true,
                filter: true,
            },
            columnDefs: columnBovina,
            rowData: gridData,
            animateRows: true,
            accentedSort: true
        };

        var eGridDivBovina = document.querySelector('#carne-bovina-grid');
        new agGrid.Grid(eGridDivBovina, gridOptionsBovina);

        // Carne Suina - Grid
        var columnSuina = [
            { headerName: "Período", field: "referencia" },
            { headerName: "Carcaça", field: "carne_suina_carcaca_kg" },
            { headerName: "Lombo", field: "carne_suina_lombo_kg" },
            { headerName: "Pernil", field: "carne_suina_pernil_kg" },
            { headerName: "Paleta", field: "carne_suina_paleta_kg" }
        ];

        var gridOptionsSuina = {
            defaultColDef: {
                flex: 1,
                sortable: true,
                filter: true,
            },
            columnDefs: columnSuina,
            rowData: gridData,
            animateRows: true,
            accentedSort: true
        };

        var eGridDivSuina = document.querySelector('#carne-suina-grid');
        new agGrid.Grid(eGridDivSuina, gridOptionsSuina);

        // Ovos - Grid
        var columnOvos = [
            { headerName: "Período", field: "referencia" },
            { headerName: "Extra", field: "ovos_extra_tipo_1_30_duzias" },
            { headerName: "Grandes", field: "ovos_grandes_tipo_2_30_duzias" },
            { headerName: "Medios", field: "ovos_medios_tipo_3_30_duzias" },
            { headerName: "Pequenos", field: "ovos_pequenos_tipo_4_30_duzias" }
        ];

        var gridOptionsOvos = {
            defaultColDef: {
                flex: 1,
                sortable: true,
                filter: true,
            },
            columnDefs: columnOvos,
            rowData: gridData,
            animateRows: true,
            accentedSort: true
        };

        var eGridDivOvos = document.querySelector('#ovos-grid');
        new agGrid.Grid(eGridDivOvos, gridOptionsOvos);


        // Arroz - Grid
        var columnArroz = [
            { headerName: "Período", field: "referencia" },
            { headerName: "Arroz Tipo 1", field: "arroz_tipo_1_30kg" },
            { headerName: "Arroz Tipo 2", field: "arroz_tipo_2_30kg" }
        ];

        var gridOptionsArroz = {
            defaultColDef: {
                flex: 1,
                sortable: true,
                filter: true,
            },
            columnDefs: columnArroz,
            rowData: gridData,
            animateRows: true,
            accentedSort: true
        };

        var eGridDivArroz = document.querySelector('#arroz-grid');
        new agGrid.Grid(eGridDivArroz, gridOptionsArroz);

        // Feijao - Grid
        var columnFeijao = [
            { headerName: "Período", field: "referencia" },
            { headerName: "Feijao", field: "feijao_preco_30kg" },
            { headerName: "Feijao Preto", field: "feijao_preto_preco_30kg" }
        ];

        var gridOptionsFeijao = {
            defaultColDef: {
                flex: 1,
                sortable: true,
                filter: true,
            },
            columnDefs: columnFeijao,
            rowData: gridData,
            animateRows: true,
            accentedSort: true
        };

        var eGridDivFeijao = document.querySelector('#feijao-grid');
        new agGrid.Grid(eGridDivFeijao, gridOptionsFeijao);


    }
);