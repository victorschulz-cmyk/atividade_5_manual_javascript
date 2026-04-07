const botao = document.getElementById('botao');

botao.addEventListener('click', () => {

    const inputNome = document.getElementById('nome');
    const valorNome = inputNome.value.trim();
    let statusValidacao = "Pendente";

    if (valorNome !== "") {
        console.log('Nome Registrado!');
        window.alert("Nome Registrado!");
        statusValidacao = "Validado"; // Se este comando da variável estivesse fora do if, ele seria executado mesmo que o nome fosse inválido.
    }

    if (valorNome === "") {
        console.log('Nome Inválido!');
        window.alert("Nome Inválido!");
    }
});