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

var toDos = JSON.parse(localStorage.getItem('list_toDos')) || [];
    //JSON.parse converte o conteudo da localStorage em um array.
    // Funcionalidade necessaria para podermos trabalhar com esse conteudo no javascript.

    // O problema encontrado nesse caso, é que quando a aplicacao for executada pela primeira vez, 
    // esse comando retornara um erro, ja que ainda nao existe um array. 

    // Para resolver isso, foi incluido, apos o JSON, uma condicional "ou" ||
    // Assim, quando ele não encontrar conteudo que possa ser convertido num array,
    // retornara um array vazio "[]".

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
        var linkElement = document.createElement("a");
            // Essa variável será utilizada para criar o link responsável por
            // excluir um item da lista.
        linkElement.setAttribute('href', '#');
            // Como um elemento "a" foi criado, o atributo href deve ser definido.
            // Momentaneamente, definimos o valor de href como sendo "#"
            // apenas para evitar qualquer efeito indesejado.

        var pos = toDos.indexOf(todo);
            // O metodo indexOf pega o parametro que lhe foi informado e 
            // procura dentro do array de onde ele foi chamado qual eh a posicao
            // do conteudo pedido.
            // Nesse caso, O metodo indexOf vai procurar no array toDos qual eh a posicao 
            // do texto informado em toDo.
            // E atribuir essa posicao a variavel pos, que sera usada posteriormente.

        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');
            // Essa variável contem o texto que será incluido 
            // na tag "a", criada anteriormente.
        linkElement.appendChild(linkText);
            // O appendChild foi utilizado para incluir o texto Excluir na tag "a". 
            // Para isso, ele recupera o conteudo/valor da variavel linkText.    
        toDoElement.appendChild(toDoText);
            // O appendChild foi utilizado para adicionar cada toDoText a cada
            // toDoElement.
            // Simplificando, cada linha de tarefas será incluída no elemento da tabela.
        toDoElement.appendChild(linkElement);
            // Além de inserir o texto no elemento "li", 
            // após o texto será inserido o link "Excluir"
            // Assim, após cada novo "To Do Item" será incluido um "Excluir"
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
    saveToStorage();
}

buttonElement.onclick = addToDo;
    // Aqui, chamamos a função addToDo() através do click no botão Adicionar.
    // Para isso, foi necessário o método onclick.

function deleteToDo(pos){
    toDos.splice(pos, 1);
    // O método splice remove elementos do array e, se necessário, reinsere outra informação.
    // baseando-se na posição informada, retornando o elemento excluido.
    // Nesse caso, especificamente, a função fara o seguinte:
    // receberá uma posição como parametro e removerá o primeiro item a partir 
    // da posicao recebida, que é o proprio item a ser excluido.
    // Se a posicao recebida for a 1, por exemplo, ele vai, a partir da posicao 1
    // remover 1 item.
    // Se for a posicao 0, a partir dessa posicao, ele removera 1 item, que eh o proprio
    // item 0, no exemplo.
    renderToDos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_toDos', JSON.stringify(toDos));
    // A variavel localStorage é uma variavel global.
    // não precisa ser iniciada antes.
    // IMPORTANTE lembrar que a localStorage não tem "habilidade" 
    // para salvar objetos ou vetores.
    // Ela so consegue salvar uma chave e uma string.
    // Para conseguir salvar um array na localStorage vamos usar o JSON
    // O JSON tem uma estrutura muito parecida ao de objeto no Javascript, porém é uma STRING.
    // Para converter o array para string, utilizamos o método:
    // JSON.stringfy(toDos)

}