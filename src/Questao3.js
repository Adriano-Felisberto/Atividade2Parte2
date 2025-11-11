// Crie uma função que recebe uma string JSON de produtos e retorna apenas os
// nomes dos produtos com preço acima de R$ 50:

const produtosJSON = `{
"produtos": [
{"nome": "Mouse", "preco": 25.90},
{"nome": "Teclado", "preco": 89.90},
{"nome": "Monitor", "preco": 450.00},
{"nome": "Cabo USB", "preco": 15.00}
]
}`;

let filtrarprodutos = (jsonString) => {
    const json = JSON.parse(jsonString);       
    const maioresDe50 = json.produtos           
        .filter(item => item.preco > 50)       
        .map(item => item.nome);               

    console.log(maioresDe50);
}

filtrarprodutos(produtosJSON);
