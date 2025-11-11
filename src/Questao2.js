// 2. Dado o JSON abaixo, extraia todos os emails e concatene-os em uma string
// separada por vírgulas:
const jsonString = `{
"usuarios": [
{"nome": "Carlos", "email": "carlos@email.com"},
{"nome": "Maria", "email": "maria@email.com"},
{"nome": "João", "email": "joao@email.com"}
]
}`;

const dados = JSON.parse(jsonString)

const usuarios = dados.usuarios.map(usuario => usuario.email).join(", ");

console.log(usuarios);
