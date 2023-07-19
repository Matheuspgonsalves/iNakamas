// Declaracao de variaveis
const btnAdd = document.querySelector('.box-add');
const btnFechar = document.querySelector('.btnFechar');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

// Eventos
btnAdd.addEventListener('click', () => {
    modal.setAttribute('style', 'display: block;');
    fade.setAttribute('style', 'display: block;');
});

btnFechar.addEventListener('click', fechar);
fade.addEventListener('click', fechar);

// Funcoes
function fechar() {
    modal.setAttribute('style', 'display: none;');
    fade.setAttribute('style', 'display: none;');
}

