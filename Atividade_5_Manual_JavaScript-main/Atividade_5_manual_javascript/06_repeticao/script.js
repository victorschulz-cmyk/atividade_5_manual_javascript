// Exemplo for
let pFor = document.getElementById("lista-for");
let contagemFor = "Contagem For: ";
for (let i = 1; i <= 5; i++) {
    contagemFor += i + " ";
}
pFor.textContent = contagemFor;

// Exemplo while
let pWhile = document.getElementById("lista-while");
let contagemWhile = "Contagem While: ";
let i = 1;
while (i <= 7) {
    contagemWhile += i + " ";
    i++;
}
pWhile.textContent = contagemWhile;