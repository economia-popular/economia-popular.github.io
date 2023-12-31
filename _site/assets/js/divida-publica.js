const divida_publica = document.getElementById("pib-divida-publica");
const divida_publica_anual = document.getElementById("pib-divida-publica-anual");
// PIB - Anual
$.get(
    "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/divida_publica.json",
    function (data, textStatus, jqXHR) {
        const dataset = [];
        const dataset_anual = [];

        var raw = JSON.parse(data);

        raw.data.sort((a, b) => a.ano - b.ano);

        raw.data.forEach((element) => {
            dataset.push({
                x: element.referencia,
                y: element.valor,
            });
            if (element.mes == "12") {
                dataset_anual.push({
                    x: element.ano,
                    y: element.valor,
                })
            }
        });

        new Chart(divida_publica, {
            type: "line",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        label: "% do PIB em Dívida Pública",
                        data: dataset,
                        borderWidth: 1,
                        borderColor: "#FFFFFF",
                        backgroundColor: "#FFFFFF",
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
                        text: "Divida Pública vs PIB",
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

        new Chart(divida_publica_anual, {
            type: "bar",
            data: {
                backgroundColor: "#FFFFFF",
                datasets: [
                    {
                        label: "% do PIB em Dívida Pública - Fechamento Anual",
                        data: dataset_anual,
                        borderWidth: 1,
                        borderColor: "#FFFFFF",
                        backgroundColor: "#FFFFFF",
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