//Variaveis ================================

//Variaveis do modal
const btnAdd = document.querySelector('.box-add');
const btnFechar = document.querySelector('.btnFechar');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

//Variaveis para adicionar membro
const nomeUsuario = document.querySelector("#nome")
const celularUsuario = document.querySelector("#cel")
const emailUsuario = document.querySelector("#mail")
const btnEnviar = document.querySelector("#btnEnviar");
const modalBody = document.querySelector("#modal-body");
const tabela = document.querySelector(".box-table");


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



// Todas as funcoes ==================

//Funcao para o modal
function fechar() {
    modal.setAttribute('style', 'display: none;');
    fade.setAttribute('style', 'display: none;');
}

//Funcao de cadastro
function cadastrar () {

    let membros = [];

    if(localStorage.getItem("membros")) {
        membros = JSON.parse(localStorage.getItem("membros"))
    }

    membros.push({
        nome: nomeUsuario.value,
        celular: celularUsuario.value,
        email: emailUsuario.value
    })

    localStorage.setItem("membros", JSON.stringify(membros));

    nomeUsuario.value = '';
    celularUsuario.value = '';
    emailUsuario.value = '';

    exibir(membros);
}

function exibir(membros) {
    tabela.innerHTML = `
    <div class="info-cadastro">
        <div class="c1 campos">Nº</div>
        <div class="c2 campos">Nome</div>
        <div class="c3 campos">Celular</div>
        <div class="c4 campos">Email</div>
        <div class="c5 campos">Cadastrado em</div>
        <div class="c6 campos">Ações</div>
    </div>
`
    for (let i = 0; i < membros.length; i++) {

        tabela.innerHTML += `
        <div class="p-cadastro">
            <div class="c1 campos">${i+1}</div>
            <div class="c2 campos">${membros[i].nome}</div>
            <div class="c3 campos">${membros[i].celular}</div>
            <div class="c4 campos">${membros[i].email}</div>
            <div class="c5 campos">27/07/2003</div>
            <div class="c6 campos">
                <div class="btnExcluir" data-index="${i}">
                    <i class="bi bi-x-square-fill"></i>
                </div>
            </div>
        </div>`;
    };

    const btnExcluirList = document.querySelectorAll(".btnExcluir");
    for (let i = 0; i < btnExcluirList.length; i++) {
        btnExcluirList[i].addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            excluir(index, membros);
        });
    }

}

function excluir(index, membros) {
    membros.splice(index, 1);
    localStorage.setItem("membros", JSON.stringify(membros));
    exibir(membros);
}

//Start
if(localStorage.getItem("membros")) {
    let users = JSON.parse(localStorage.getItem("membros"));
    exibir(users);
}

document.addEventListener("DOMContentLoaded", function() {
    
});