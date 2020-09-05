// A primeira coisa a ser feita é criar as variáveis necessárias 
// para poder recuperar os itens que serão utilizados no Javascript.
// Para isso, criamos uma variável para cada elemento a ser recuperado.
var listElement = document.querySelector("#app ul");
    // Recupera (pega) a lista (ul) para poder trabalhar com ela.
    // Seja para criar, alterar ou excluir elemento.
var inputElement = document.querySelector("#app input");
    // Recupera o texto que tiver sido inserido na caixa de texto (input)
    // Obs.: Apenas recupera (copia) o conteúdo, não apaga o que tiver escrito na caixa de texto.
var buttonElement = document.querySelector("#app button");
    // Recupera o click no botão, cada vez que o usuário clicar. 

// Abaixo, o array com a lista inicial 
var toDos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar a comunidade',
    'Responder pergutas'
];

function renderToDos() {
    for (todo of toDos){
        var toDoElement = document.createElement('li');
            // Essa variável será utilizada para criar o elemento linha
            // na tabela de To Do.
        var toDoText = document.createTextNode(todo);
            // Essa variável foi criada para atribuir o texto contido em cada 
            // elemento da lista à nova linha.
        toDoElement.appendChild(toDoText);
            // O appendChild foi utilizado para adicionar cada toDoText a cada
            // toDoElement.
            // Simplificando, cada linha de tarefas será incluída no elemento da tabela.
        listElement.appendChild(toDoElement);
            // Uma vez que o texto da tarefa foi inserido na linha, 
            // é hora de inserir a linha na tabela.
    }
}

renderToDos();