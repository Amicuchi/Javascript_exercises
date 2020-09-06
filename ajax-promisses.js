
// Promisses são códigos que não influenciam na linha do tempo do Javascript.
// São funções que só devolvem seus resultados depois de um tempo.
// Independente do tempo que elas demorarem para retornar os valores pedidos, 
// o Javascript vai continuar sendo executado normalmente.

var primeiraPromisse = function() {
    return new Promise(function(resolve, reject) {
        // Toda PROMISSE deverá receber os dois parâmetros (Resolve e Reject).
        // Tanto o RESOLVE e o REJECT são funções.
        // A resolve será retornada quando o resultado obtido foi de sucesso.
        // A reject será retornada quando o resultado obtido não foi de sucesso.
        
        var xhr = new XMLHttpRequest();
            // Essa variável é utilizada para iniciar o AJAX e através disso, 
            // conseguir recuperar as informações necessárias no servidor.

        //Nesse exercício vamos usar como base de dados a api do GitHub que armazena os dados públicos de usuários.
        // api.github.com/users/amicuchi
        xhr.open('GET', 'https://api.github.com/users/amicuchi');
            // Método utilizado para pegar (get) os dados na api.
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                // Lembrando que o resultado 4 significa que a função retornou
                // algum resultado válido.
                // Significa que está finalizada.
                if(xhr.status === 200) {
                    // Essa função retornará um código de status.
                    resolve(JSON.parse(xhr.responseText));
                        // Se o código retornado for 200,
                        // significa que deu tudo certo.
                } else {
                    reject('Erro na requisição');
                        // Caso o código retornado não seja 200, 
                        // significa que deu algum erro.
                }
            }   
        }

    })
}

//var resultado = primeiraPromisse();  // <- Método pouco utilizado
//console.log(resultado);     // Promisse {<pending>}
    // o resultado acima acontece porque o Javascript vai executar linha a linha
    // sem esperar o resultado de uma para executar a próxima.
    // na linha 45, ele executa a primeiraPromisse e já passa para a linha 46
    // sem que a primeiraPromisse tenha terminado de ser executada.

primeiraPromisse()                  // <- Método mais atual e utilizado
    .then(function(response) {
        // Será executado quando o RESOLVE for chamado na promisse
        console.log(response);
            // Se o código tiver chegado no RESOLVE, 
            // Teremos aqui o resultado de sucesso da requisição.
    })
    .catch(function(error) {
        // Será executado quando o REJECT for chamado na promisse
        console.warn(error);
    });
