// 10. Validação e Tratamento de Erros: Escreva uma função segura que tente
// converter uma string para JSON e trate possíveis erros:
function parseJSONSafe(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        console.error("Erro ao converter JSON:", erro.message); 
        return null;
    }
}
const jsonInvalido = '{nome: "João", "idade": 30}'; // Falta aspas em "nome"
console.log(parseJSONSafe(jsonInvalido)); // Deve retornar null ou mensagem de erro
