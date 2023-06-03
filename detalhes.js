const urlParamsText = window.location.search;
const urlParams = new URLSearchParams(urlParamsText);

fetch('https://fakestoreapi.com/products/'+ urlParams.get('id'))
.then(res => res.json())
.then(data => {

    $('#titulo').text(data.title);
    $('#descricao').text(data.description);
    $('#imagem-detalhes').attr('src', data.image);
    $('#categoria').text(data.category);
    $('#preco').text(data.price);
    $('#rate').text(data.rating.rate);
    $('#count').text(data.rating.count);

})
