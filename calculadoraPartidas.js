let registraVitorias = prompt("Digite o numero de vitorias")
let registraDerrotas = prompt("Digite o numero de derrotas")
let vitorias = parseInt(registraVitorias)
let derrotas = parseInt(registraDerrotas)
let saldoVitorias = calculoSaldoVitorias(vitorias, derrotas)
let nivel = ""


function calculoSaldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

if (saldoVitorias < 10){
    nivel = "Ferro"
}else if(saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze "
}else if(saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata "
}else if(saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro "
}else if(saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = "Diamante "
}else if(saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = "Lendário "
}else{
    nivel = "Imortal"
}

console.log (`O Herói tem de saldo de ${saldoVitorias} vitorias e está no nível ${nivel}`)



//Instruções para entrega
 //  Calculadora de partidas Rankeadas
//O Que deve ser utilizado**

//Variáveis
//Operadores
//Laços de repetição
//Estruturas de decisões
//Funções

// Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

// Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 

  
// Bons estudos 😉