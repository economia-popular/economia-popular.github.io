// Reduzindo o numero de chamadas de API para o dataset de inflação agregada.
$.get(
    "https://economia-popular-delivery-content-indices.s3.amazonaws.com/inflacao/inflacao.json",
    function (data, textStatus, jqXHR) {
        IPCA(data);
        IPCASetor(data);
    }
)