//Declaracao de variaveis
var btnAddMembro = document.querySelector('.box-add');
var btnFechar = document.querySelector('.fechar');

//Eventos
btnAddMembro.addEventListener('click', formAdic);
btnFechar.addEventListener('click', fechar);

//Funcao para formulario de add membros
function formAdic() {
   let formMembro = document.querySelector('.formMembro'); 
   formMembro.setAttribute('style', 'display: flex')
}

function fechar() {
    let formMembro = document.querySelector('.formMembro'); 
    formMembro.setAttribute('style', 'display: none')
}