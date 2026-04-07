// Função sem parâmetro
function avisar() {
    document.getElementById("funcao1").textContent = "Função executada!";
}
avisar();

// Função com parâmetro
function saudar(nome) {
    document.getElementById("funcao2").textContent = "Olá, " + nome + "!";
}
saudar("Aluno");

// Função com retorno
function calcularDobro(num) {
    return num * 2;
}

let resultado = calcularDobro(10);

document.getElementById("funcao3").textContent = "O dobro de 10 é: " + resultado;