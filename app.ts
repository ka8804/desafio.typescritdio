let funcionario = {
    codigo: 10,
    nome: "Jonh"
}

// Exercicio 2
enum Profissao{
    Atriz,
    Padeiro
}

interface Pessoa {
    nome: string,
    idade: number,
    Profissao: Profissao,
}

const Maria = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

const Roberto = {
    nome: "Roberto",
    idade: 19,
    profissao:Profissao.Padeiro
}

const Laura = {
    nome: "Laura",
    idade: 32,
    profissao:Profissao.Atriz
}

const Carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

