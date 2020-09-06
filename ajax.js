var xhrOld = new XMLHttpRequest();
    // Essa variável é utilizada para iniciar o AJAX e através disso, 
    // conseguir recuperar as informações necessárias no servidor.

//Nesse exercício vamos usar como base de dados a api do GitHub que armazena os dados públicos de usuários.
// api.github.com/users/amicuchi

xhrOld.open('GET', 'https://api.github.com/users/amicuchi');
    // Método utilizado para pegar (get) os dados na api.
xhrOld.send(null);

// Como o AJAX executa requisições assíncronas, fica fácil perceber que parte do código
// terá sido executada enquanto outra parte ainda não.
// Isso nos traz um problema que é o de que o Javascript não pode ficar esperando
// o AJAX ser executado para só então dar andamento ao fluxo do código.
// Para resolver isso, utilizamos a função abaixo. (onReadyStateChange).
xhrOld.onreadystatechange = function(){
    if (xhrOld.readyState === 4){
            // readyState === 4 é quando a variável retorna o comando enviado.
        console.log(JSON.parse(xhrOld.responseText));
        // Esse comando serve apenas para mostrar o atraso da execução da função.
    }
}