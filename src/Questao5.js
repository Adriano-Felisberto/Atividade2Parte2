// 5. Crie uma função que processe uma lista de pedidos e retorne um resumo:

const pedidosJSON = `{
"pedidos": [
{"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
{"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
{"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
]
}`;
// Função deve retornar: "2 pedidos entregues, 1 em processamento. Valor total: R$ 255,70"

let processamentoPed = (jsonString) => {
    const dados = JSON.parse(jsonString);

    const entregues = dados.pedidos.filter(pedido => pedido.status === "entregue").length;
    const processando = dados.pedidos.filter(pedido => pedido.status === "processando").length;
    const valorTotal = dados.pedidos.reduce((total, pedido) => total + pedido.total, 0).toFixed(2);

    return `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${valorTotal}`;
}

console.log(processamentoPed(pedidosJSON));
