// Autenticacao de login 
if (localStorage.getItem("token") == null) {
    alert("Efetue login para acessar essa página");
    window.location.href = './index.html';
} 

function sair() {
    localStorage.removeItem("token");
    setTimeout(() => {
        window.location.href = './index.html';
    }, 1500);
}

//Variaveis ================================
//Variaveis do modal
const btnAdd = document.querySelector('.box-add');
const btnFechar = document.querySelector('.btnFechar');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

//Variaveis para adicionar membro
const nomeUsuario = document.querySelector("#nome");
const celularUsuario = document.querySelector("#cel");
const emailUsuario = document.querySelector("#mail");
const btnEnviar = document.querySelector("#btnEnviar");
const modalBody = document.querySelector("#modal-body");
const tabela = document.querySelector(".box-table");

//Variavel para o campo de pesquisa
const buscarNome = document.querySelector("#buscarNome");
let listaMembros = JSON.parse(localStorage.getItem("membros")) || [];
let listaExibicao = [];

//Eventos =========================================

//Evento relacionados ao modal
btnAdd.addEventListener('click', () => {
    modal.setAttribute('style', 'display: block;');
    fade.setAttribute('style', 'display: block;');
});

btnFechar.addEventListener('click', fechar);
fade.addEventListener('click', fechar);

//Eventos relacionados ao cadastro
btnEnviar.addEventListener("click", cadastrar);

//Funcao para o modal
function fechar() {
    modal.setAttribute('style', 'display: none;');
    fade.setAttribute('style', 'display: none;');
}

//Funcao de cadastro
function cadastrar() {
    let membros = [];

    if(localStorage.getItem("membros")) {
        membros = JSON.parse(localStorage.getItem("membros"));
    }

    const dataHoraCadastrado = new Date().toLocaleString(); // Obtém a data e hora local formatada
    membros.push({
        nome: nomeUsuario.value,
        celular: celularUsuario.value,
        email: emailUsuario.value,
        dataHoraCadastro: dataHoraCadastrado // Adiciona a data e hora de cadastro
    });

    localStorage.setItem("membros", JSON.stringify(membros));

    nomeUsuario.value = '';
    celularUsuario.value = '';
    emailUsuario.value = '';

    listaMembros = membros;
    exibir(listaMembros);
}

//Mostragem dos membros
function exibir(membros) {
    listaExibicao = [...membros]; // Fazer uma cópia da lista de membros para a lista de exibição
    tabela.innerHTML = `
    <div class="info-cadastro">
        <div class="c1 campos">Nº</div>
        <div class="c2 campos">Nome</div>
        <div class="c3 campos">Celular</div>
        <div class="c4 campos">Email</div>
        <div class="c5 campos">Cadastrado em</div>
        <div class="c6 campos">Ações</div>
    </div>
    `;

    for (let i = 0; i < listaExibicao.length; i++) {
        tabela.innerHTML += `
        <div class="p-cadastro">
            <div class="c1 campos">${i + 1}</div>
            <div class="c2 campos">${listaExibicao[i].nome}</div>
            <div class="c3 campos">${listaExibicao[i].celular}</div>
            <div class="c4 campos">${listaExibicao[i].email}</div>
            <div class="c5 campos">${listaExibicao[i].dataHoraCadastro}</div>
            <div class="c6 campos">
                <div class="btnExcluir" data-index="${i}">
                    <i class="bi bi-x-square-fill"></i>
                </div>
            </div>
        </div>`;
    }

    const btnExcluirList = document.querySelectorAll(".btnExcluir");
    for (let i = 0; i < btnExcluirList.length; i++) {
        btnExcluirList[i].addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            excluir(index);
        });
    }
}

//Exclusão dos membros
function excluir(index) {
    const membroExcluido = listaExibicao[index];
    const indexMembro = listaMembros.findIndex(membro => membro.nome === membroExcluido.nome);
    listaExibicao.splice(index, 1);
    listaMembros.splice(indexMembro, 1);
    localStorage.setItem("membros", JSON.stringify(listaMembros));
    exibir(listaMembros);
}

// Função para pesquisar
buscarNome.addEventListener("input", pesquisar);

// Pesquisar membros
function pesquisar() {
    const searchTerm = buscarNome.value.trim().toLowerCase();
    listaExibicao = listaMembros.filter(membro =>
        membro.nome.toLowerCase().includes(searchTerm)
    );

    exibir(listaExibicao);
}

// Start
exibir(listaMembros);
