document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("btnAcao");
    const input = document.querySelector("#campoNome");
    const checkbox = document.getElementById("checkTermos");
    const status = document.getElementById("status");
    const todosItens = document.querySelectorAll(".caixa");

    botao.addEventListener("click", () => {
        if (input.checkValidity() && checkbox.checked) {
            
            status.textContent = "Sucesso! Nome: " + input.value;
            status.style.color = "green";
            status.style.fontWeight = "bold";

            status.classList.add("ativo");

            todosItens.forEach(item => item.remove());

        } else {
            status.textContent = "Erro: Preencha o nome e aceite os termos.";
            status.style.color = "red";
        }

        todosItens.forEach(item => console.log("Conteúdo da div:", item.textContent));
    });
});