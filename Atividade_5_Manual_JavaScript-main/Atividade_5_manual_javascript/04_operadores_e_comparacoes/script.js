document.getElementById("soma").textContent = "Soma (10+5): " + (10 + 5);
document.getElementById("subtracao").textContent = "Subtração (10-5): " + (10 - 5);
document.getElementById("multiplicacao").textContent = "Multiplicação (10*5): " + (10 * 5);
document.getElementById("divisao").textContent = "Divisão (10/5): " + (10 / 5);

document.getElementById("c1").textContent = "5 == '5' é: " + (5 == "5");  
document.getElementById("c2").textContent = "5 === '5' é: " + (5 === "5"); // O === é mais seguro porque ele exige que o valor e o tipo sejam iguais, isso evita que o sistema aceite um texto vazio como se fosse o número zero, por exemplo
document.getElementById("c3").textContent = "5 != '5' é: " + (5 != "5");  
document.getElementById("c4").textContent = "5 !== '5' é: " + (5 !== "5");

document.getElementById("maior-que").textContent = "10 é maior que 5? " + (10 > 5);

let temIdade = true;
let temTitulo = false;

document.getElementById("logico-e").textContent = "Pode votar (Idade E Título)? " + (temIdade && temTitulo);

document.getElementById("logico-ou").textContent = "Pode entrar na festa (Idade OU Título)? " + (temIdade || temTitulo);