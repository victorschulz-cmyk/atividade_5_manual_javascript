// Exemplo if e else
let idade = 17;
const pIdade = document.getElementById("msg-idade");

if (idade >= 18) {
    pIdade.textContent = "Status: Maior de idade.";
} else {
    pIdade.textContent = "Status: Menor de idade.";
}

// Exemplo switch
let sinal = "vermelho";
const pClima = document.getElementById("msg-clima");

switch (sinal) {
    case "verde":
        pClima.textContent = "Sinal Verde: Pode passar.";
        break;
    case "vermelho":
        pClima.textContent = "Sinal Vermelho: PARE.";
        break;
    default:
        pClima.textContent = "Atenção!";
}