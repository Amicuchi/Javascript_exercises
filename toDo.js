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

    listElement.innerHTML = '';
        // Esse método recupera todo o conteúdo que tiver dentro do HTML.
        // Nesse caso específico, o listElement recupera todo conteúdo que tem 
        // dentro da lista (ul)
        // Como, depois de recuperar todo o conteúdo da ul, estamos atribuindo
        // valor vazio, todo o conteúdo que tiver sido inserido na ul será excluído.
        // IMPORTANTE perceber que isso não vai apagar nada do array, apenas da ul.
        // Esse método se faz necessário para que os mesmos itens não sejam inseridos repetidamente.        

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

function addToDo() {
    // A primeira coisa que essa função deverá fazer é recuperar o valor 
    // inserido na caixa de texto (input).
    // Para isso utilizaremos o inputElement, que é onde o texto foi inserido.
    var toDoText = inputElement.value;
        // inputElement.value recupera o valor digitado
    
    // A segunda coisa a ser feita é adicionar o texto recuperado ao array toDos.
    toDos.push(toDoText);
        // método push é utilizado para inserir um novo item ao final de um array.
    
    inputElement.value = '';
        // essa linha foi utilizada para apagar o conteúdo inserido na caixa de texto.
        // para isso, bastou definir o input como vazio.    
    renderToDos();
        // Essa função foi chamada novamente para que possa renderizar a nova lista.
}

buttonElement.onclick = addToDo();
    // Aqui, chamamos a função addToDo() através do click no botão Adicionar.
    // Para isso, foi necessário o método onclick.
