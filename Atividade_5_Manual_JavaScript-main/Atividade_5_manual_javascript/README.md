1- Introdução

    O que é JavaScript.
    R: O Javascrip é uma linguagem de programação feita para "melhorar" as páginas usado principalmente em páginas web com HTML e CSS.

    Para que ele serve. 
    R: Ele deixa a página com mais interações para os usuários fazerem, mudando o estilo da página também.

    Como ele complementa HTML e CSS.
    R: O Javascript a principio foi feito para os dois modelos, mudando sua aparencia e adicionando novas ultilidades.


2- Formas de uso no HTML

    JavaScript escrito dentro da própria página HTML.
    R: O Javascrip é inserido na tag <body> como <script>

    JavaScript em arquivo separado (script.js).
    R: Para fazer isso deve criar um arquivo script.js tendo o código dele ali.

    Exemplo prático das duas formas.
    R: 


3- variáveis, tipos e escopo

    o que é uma variável;
    R: A variável é um espaço onde vai armazaenar dados de certo tipo, como numero, texto e etc.

    como declarar variável em JavaScript;
    R: É usado o "var" é onde o dado pode ocorrer mudanças, "let" é os dados que podem mudar futuramente, "const" é um dado que não será mudado.

    diferença entre var, let e const;
    R: "var" possui escopo global ou de função e pode ser redeclarado ou reatribuído normalmente, "let" possui escopo de bloco e pode ser apenas reatribuída, "const" possui escopo de bloco e não pode ser nem redeclarada e nem reatribuída.

    quando cada uma pode ser usada;
    R: 

    o que é escopo global;
    R: O escopo é oque define cada tipo de variável, sendo  o escopo global oque possui todas as variáveis do Javascript.

    o que é escopo de função;
    R: É o escopo que engloba todas as variáveis locais dentro de uma função, ou seja: let, var e const e todas as outras váriaveis.

    o que é escopo de bloco.
    R: O escopo de bloco faz com que as variáveis fiquem somente em um local expecifico determinado por chaves em que é definido, ou seja, váriaveis como const e let.


4- Operadores, comparações e lógica

    operadores aritméticos principais;
    R: soma: +, subtração: -, multiplicação: *, divisão: /, resto de divisão: %, decremento: --, incremento: ++ e exponenciação **.

    operadores relacionais principais;
    R: >: amior que, <: menor que, >=: maior ou igual que, <=: menor ou igual que, ==: igual, ===: estritamente igual, !=: diferente e !==: estritamente diferente.

    operadores lógicos principais;
    R: &&: age como se fosse o valor E, ou seja, só irá retornar true se ambos os valores forem verdadeiros.
       ||: Já ele funciona como OU, então ele já retorna true quando ambos ou apenas um operando for verdadeiro.
       !: Ele funciona como NÃO, fazendo todos os operandos, por mais que sejam verdadeiros serem false.

    diferença entre == e ===;
    R: ==: age como igualdade normal, aceitando o valor por seu simbolo.
       ===: funciona de forma mais restrita, não aceitando qualquer código pela diferença de variavel.

    diferença entre != e !==.
    R: Aqui esses operadores agem de forma inversa os operadores anteriores(== e ===) sou seja, != age como == mas invés de ser true, dará false.

    Exemplos obrigatórios:
    R:

    comparação entre 5 == "5";
    R: a comparação vai dar "true" pois o simbolo 5 é igual.

    comparação entre 5 === "5";
    R: Esse irá dar "false" por ser duas variaveis diferentes, uma para numero e outra usando como texto.

    comparação entre 5 != "5";
    R: vai dar "false" por ser o contrário do ==.

    comparação entre 5 !== "5";
    R: Vai dar "true", por ser o contrário do ===.

    um exemplo em que o discente explique, com suas palavras, por que === é mais seguro em muitos casos.
    R:



5- Estruturas Condicionais
    o que é uma estrutura condicional;
    R: É um recurso que permite ao JavaScript tomar decisões, executando um bloco de código apenas se uma condição específica for verdadeira.

    if;
    R: É a condicional simples. Ele testa uma condição: se for verdade, executa o que está entre as chaves { }.

    if...else;
    R: É a condicional com alternativa. Se a condição do if for falsa, o código dentro do else será executado automaticamente.

    switch.
    R: É usado para testar uma única variável contra vários valores específicos (casos), sendo mais organizado que vários if seguidos.


6- Estruturas de Repetição
    o que é uma estrutura de repetição;
    R: Também chamada de "loop", serve para executar o mesmo comando várias vezes seguidas sem precisar repetir o código manualmente.

    for;
    R: É usado quando sabemos exatamente quantas vezes o código deve se repetir. Ele utiliza um contador interno.

    while;
    R: É usado quando não sabemos o número exato de repetições. Ele continuará repetindo enquanto a condição definida for verdadeira.


7- Funções
    o que é uma função;
    R: É um bloco de código "embrulhado" que realiza uma tarefa específica. Ela serve para organizar o código e ser reutilizada em vários lugares.

    como declarar uma função;
    R: Usamos a palavra-chave function, seguida de um nome e parênteses.

    como chamar uma função;
    R: Para a função funcionar, você deve "chamá-la" pelo nome seguido de parênteses no seu código.

    função com parâmetro;
    R: É quando a função recebe informações de fora para trabalhar. Esses dados ficam dentro dos parênteses.

    função com retorno.
    R: É quando a função termina sua tarefa e "devolve" um valor ou resultado para quem a chamou, usando a palavra return.


8- Manipulação de página com JavaScript
    
    document: Objeto que representa toda a página HTML no JavaScript.

    getElementById(): Busca um único elemento da página através do seu ID.

    querySelector(): Busca o primeiro elemento que combina com um seletor CSS.

    value: Pega ou define o texto digitado dentro de um campo de entrada (input).

    checked: Verifica se uma caixa de seleção (checkbox/radio) está marcada ou não.

    textContent: Pega ou define apenas o texto visível dentro de um elemento.

    style: Permite alterar o CSS (cores, tamanhos, etc.) de um elemento diretamente.

    classList: Permite adicionar, remover ou alternar classes CSS de um elemento.

    addEventListener(): "Escuta" e executa uma função quando ocorre um evento (como clique).

    querySelectorAll(): Busca todos os elementos que combinam com um seletor CSS (gera uma lista).

    checkValidity(): Verifica se um campo preenche os requisitos (ex: se é obrigatório).

    DOMContentLoaded: Evento disparado quando o HTML termina de carregar, mas antes das imagens.

    remove(): Exclui o elemento selecionado diretamente da página.