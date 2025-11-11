// 4. Escreva uma função que formate um objeto de endereço em uma string legível
// usando template strings:
const endereco = {
rua: "Av. Paulista",
numero: 1000,
cidade: "São Paulo",
cep: "01310-100"
};
// Resultado esperado: "Av. Paulista, 1000 - São Paulo - CEP: 01310-100"

let formatadorender = (endereco) => {
    return `${endereco.rua}, ${endereco.numero}, ${endereco.cidade} - CEP: ${endereco.cep}`
}
console.log(formatadorender(endereco));
