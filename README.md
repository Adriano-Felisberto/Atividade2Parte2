# Atividade2Parte2

## 1. Converta o seguinte objeto JavaScript para uma string JSON e depois recupere-o:

```js
const usuario = {
nome: "Ana Silva",
idade: 30,
habilidades: ["JavaScript", "React", "Node.js"],
ativo: true
};
```
## 2. Dado o JSON abaixo, extraia todos os emails e concatene-os em uma string
separada por vírgulas:
```js
const jsonString = `{
"usuarios": [
{"nome": "Carlos", "email": "carlos@email.com"},
{"nome": "Maria", "email": "maria@email.com"},
{"nome": "João", "email": "joao@email.com"}
]
}`;
```
## 3. Crie uma função que recebe uma string JSON de produtos e retorna apenas os
nomes dos produtos com preço acima de R$ 50:
```js
const produtosJSON = `{
"produtos": [
{"nome": "Mouse", "preco": 25.90},
{"nome": "Teclado", "preco": 89.90},
{"nome": "Monitor", "preco": 450.00},
{"nome": "Cabo USB", "preco": 15.00}
]
}`;
```
## 4. Escreva uma função que formate um objeto de endereço em uma string legível
usando template strings:
```js
const endereco = {
rua: "Av. Paulista",
numero: 1000,
cidade: "São Paulo",
cep: "01310-100"
};
// Resultado esperado: "Av. Paulista, 1000 - São Paulo - CEP: 01310-100"
```

## 5. Crie uma função que processe uma lista de pedidos e retorne um resumo:
```js
const pedidosJSON = `{
"pedidos": [
{"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
{"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
{"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
]
}`;
// Função deve retornar: "2 pedidos entregues, 1 em processamento. Valor total: R$
255,70"
```
## 10. Validação e Tratamento de Erros: Escreva uma função segura que tente
converter uma string para JSON e trate possíveis erros:
```js
function parseJSONSafe(jsonString) {
// Sua implementação aqui
}
// Teste com JSON inválido
const jsonInvalido = '{nome: "João", "idade": 30}'; // Falta aspas em "nome"
console.log(parseJSONSafe(jsonInvalido)); // Deve retornar null ou mensagem de
erro2. Dado o JSON abaixo, extraia todos os emails e concatene-os em uma string
separada por vírgulas:
const jsonString = `{
"usuarios": [
{"nome": "Carlos", "email": "carlos@email.com"},
{"nome": "Maria", "email": "maria@email.com"},
{"nome": "João", "email": "joao@email.com"}
]
}`;
```


[Link das resoluções](https://github.com/Adriano-Felisberto/Atividade2Parte2/tree/Adriano-Felisberto/I.A-ECIT/src)

