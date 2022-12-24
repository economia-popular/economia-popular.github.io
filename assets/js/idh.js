const idh_variacao = document.getElementById("idh-variacao");
const idh_sexo = document.getElementById("idh-sexo");
const idh_ev = document.getElementById("idh-ev");
const idh_ev_sexo = document.getElementById("idh-ev-sexo");
const idh_as = document.getElementById("idh-as");
const idh_as_sexo = document.getElementById("idh-as-sexo");
const idh_as_sexo_m = document.getElementById("idh-as-sexo-m");
const idh_mort_materna = document.getElementById("idh-mort-materna");


// IDH
$.get(
    "https://economia-popular-delivery-content-indices.s3.amazonaws.com/idh/idh.json",
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
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        label: "IDH",
                        data: dataset,
                        borderWidth: 1,
                        borderColor: "#5D6D2F",
                        backgroundColor: "#5D6D2F",
                    }
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
                    }
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


        // Expectativa de Anos na Escola - Geral

        const dataset_as = []
        const dataset_as_avg = []

        raw.data.forEach((element) => {

            temp = {
                x: element.ano_referencia,
                y: element.expectativa_de_anos_escola,
            };
            temp_avg = {
                x: element.ano_referencia,
                y: element.media_de_anos_escola,
            };
            dataset_as.push(temp);
            dataset_as_avg.push(temp_avg)
        })

        new Chart(idh_as, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        label: "Média Efetiva de Anos na Escola",
                        data: dataset_as_avg,
                        type: "line",
                        borderWidth: 1,
                        borderColor: "#FFFFFF",
                        backgroundColor: "#FFFFFF",
                    },
                    {
                        label: "Expectativa de Anos na Escola",
                        data: dataset_as,
                        borderWidth: 1,
                        borderColor: "#5D6D2F",
                        backgroundColor: "#5D6D2F",
                    },
                ],
            },
            options: {
                responsive: true,
                hover: {
                    mode: "Anos na Escola",
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
                        text: "Expectativa de Anos na Escola",
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


        // Expectativa de Anos na Escola - Sexo
        const dataset_as_m = [];
        const dataset_as_f = [];

        const dataset_as_m_avg = [];
        const dataset_as_f_avg = [];

        raw.data.forEach((element) => {

            if (element.expectativa_de_vida_feminina > 0 && element.ano_referencia >= 2002) {
                // Masculino
                temp_m = {
                    x: element.ano_referencia,
                    y: element.expectativa_de_anos_escola_masculina,
                };
                temp_m_avg = {
                    x: element.ano_referencia,
                    y: element.media_de_anos_escola_masculina,
                };
                dataset_as_m.push(temp_m);
                dataset_as_m_avg.push(temp_m_avg)

                // Feminino
                temp_f = {
                    x: element.ano_referencia,
                    y: element.expectativa_de_anos_escola_feminina,
                };
                temp_f_avg = {
                    x: element.ano_referencia,
                    y: element.media_de_anos_escola_feminina,
                };
                dataset_as_f.push(temp_f);
                dataset_as_f_avg.push(temp_f_avg)
            }
        });

        new Chart(idh_as_sexo, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        label: "Expectativa Escolar Masculino",
                        data: dataset_as_m,
                        borderWidth: 1,
                        borderColor: "#114247",
                        backgroundColor: "#114247",
                    },
                    {
                        label: "Expectativa Escolar Feminino",
                        data: dataset_as_f,
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
                        text: "Expectativa de Anos na Escola",
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


        new Chart(idh_as_sexo_m, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        label: "Média de Anos Escolares - Masculino",
                        data: dataset_as_m_avg,
                        borderWidth: 1,
                        borderColor: "#114247",
                        backgroundColor: "#114247",
                    },

                    {
                        label: "Média de Anos Escolares - Feminino",
                        data: dataset_as_f_avg,
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
                        text: "Expectativa de Anos na Escola",
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

        // Taxa de Mortalidade Materna

        const dataset_mort_mat = []

        raw.data.forEach((element) => {

            temp_mort_mat = {
                x: element.ano_referencia,
                y: element.taxa_mortalidade_materna,
            };
            dataset_mort_mat.push(temp_mort_mat);
        })

        new Chart(idh_mort_materna, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        label: "Taxa de Mortalidade Maternas",
                        data: dataset_mort_mat,
                        borderWidth: 1,
                        borderColor: "#FFFFFF",
                        backgroundColor: "#FFFFFF",
                    }
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
                        text: "Taxa de Mortalidade Materna",
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

        // Data Grid
        var columnDefs = [
            { headerName: "Período", field: "ano_referencia" },
            { headerName: "IDH", field: "idh" },
            { headerName: "ID Masculino", field: "idh_masculino" },
            { headerName: "IDH Feminino", field: "idh_feminino" },
            { headerName: "Exp Vida", field: "expectativa_de_vida" },
            { headerName: "Exp Vida Masc", field: "expectativa_de_vida_masculina" },
            { headerName: "Exp Vida Fem", field: "expectativa_de_vida_feminina" },
            { headerName: "Exp Anos na Escola", field: "expectativa_de_anos_escola" },
            { headerName: "Anos na Escola Masc", field: "expectativa_de_anos_escola_masculina" },
            { headerName: "Anos na Escola Fem", field: "expectativa_de_anos_escola_feminina" },
            { headerName: "Mort Materna", field: "taxa_mortalidade_materna" },

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

        var eGridDiv = document.querySelector('#idh-grid');

        new agGrid.Grid(eGridDiv, gridOptions);


        // Fonte do gini
        $("div.fonte-idh").text(raw.fonte);
        $("div.atualizacao-idh").text(raw.data_atualizacao);
    }
);
