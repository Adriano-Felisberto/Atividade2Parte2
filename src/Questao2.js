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