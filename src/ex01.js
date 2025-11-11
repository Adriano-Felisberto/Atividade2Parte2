// Converta o seguinte objeto JavaScript para uma string JSON e depois recupere-o:


const usuario = {
nome: "Ana Silva",
idade: 30,
habilidades: ["JavaScript", "React", "Node.js"],
ativo: true
};

const convertor = JSON.stringify(usuario);
console.log(convertor)

const recuperar = JSON.parse(convertor);
console.log(recuperar)

