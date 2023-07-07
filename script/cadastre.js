//Recebendo Label e Input dos formulários de cadastro
let name = document.querySelector('#name')
let lblName = document.querySelector('#lblName')
let validName = false

let user = document.querySelector('#user')
let lblUser = document.querySelector('#lblUser')
let validUser = false

let email = document.querySelector('#email')
let lblMail = document.querySelector('#lblMail')
let validMail = false

let password = document.querySelector('#pass')
let lblPass = document.querySelector('#lblPass')
let validPass = false


//Eventos de estilo para quando for inserir texto no input
name.addEventListener('keyup', () => {
    if(name.value.length < 3) {
        lblName.setAttribute('style', 'color: red;')
        lblName.innerHTML = '<span>Nome *Insira no mínimo 3 letras</span>'
        validName = false
    }else {
        lblName.setAttribute('style', 'color: ;')
        lblName.innerHTML = '<span>Nome</span>'
        validName = true
    }
})

user.addEventListener('keyup', () => {
    if(user.value.length < 4) {
        lblUser.setAttribute('style', 'color: red;')
        lblUser.innerHTML = '<span>Usuário *Insira no mínimo 4 letras</span>'
        validUser = false
    }else {
        lblUser.setAttribute('style', 'color: ;')
        lblUser.innerHTML = '<span>Usuário</span>'
        validUser = true
    }
})

mail.addEventListener('keyup', () => {
    if(mail.value.length <= 3) {
        lblMail.setAttribute('style', 'color: red;')
        lblMail.innerHTML = '<span>Insira um email válido</span>'
        validMail = false
    }else {
        lblMail.setAttribute('style', 'color: ;')
        lblMail.innerHTML = '<span>Email</span>'
        validMail = true
    }
})


password.addEventListener('keyup', () => {
    if(password.value.length < 5) {
        lblPass.setAttribute('style', 'color: red;')
        lblPass.innerHTML = '<span>Senha mínima 4 caracteres</span>'
        validPass = false
    }else {
        lblPass.setAttribute('style', 'color: ;')
        lblPass.innerHTML = '<span>Senha</span>'
        validPass = true
    }
})

//Função para realizar o cadastro
function cadastrar() {
    let msgSucces = document.querySelector('#msgSuccess')
    let msgError = document.querySelector('#msgError')

    if(validName && validUser && validMail && validPass) {
        msgSucces.setAttribute('style', 'display: block;')
        msgSucces.innerHTML = '<strong>Usuário cadastrado!</strong>'
        msgError.setAttribute('style', 'display: none')
    }else {
        msgError.setAttribute('style', 'display: block;')
        msgError.innerHTML = '<strong>Usuário não cadastrado.<br>Preencha os campos vazios.</strong>'
        msgSucces.setAttribute('style', 'display: none')
    }
}



