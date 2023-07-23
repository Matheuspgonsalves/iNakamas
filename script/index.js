//Iniciando localStorage
let listaUser = [];

if(localStorage.getItem("listaUser") == null) {
     listaUser = [
        {
            nome: "admin",
            user: "admin",
            mail: "admin@gmail",
            password: "admin"
        }
    ]
    localStorage.setItem("listaUser", JSON.stringify(listaUser));
}


//Função para verificar login
function entrar() {
    let userLogin = document.querySelector('#user')
    let lblUser = document.querySelector('#lblUser')


    let passLogin = document.querySelector('#pass')
    let lblPass = document.querySelector('#lblPass')

    let msgError = document.querySelector('#msgError')
    let msgSuccess = document.querySelector('#msgSuccess')

   

    let userValid = {
        nome: '',
        user: '',
        mail: '',
        password: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if((userLogin.value == item.user || userLogin.value == item.mail) && passLogin.value == item.password) {
            userValid = {
                nome: item.nome,
                user: item.user,
                mail: item.mail,
                password: item.password
            }
        }
    })
    

    if((userLogin.value == userValid.user || userLogin.value == userValid.mail) && passLogin.value == userValid.password) {
        msgSuccess.innerHTML = 'Login efetuado com sucesso'
        msgSuccess.setAttribute('style', 'display: block')
        msgError.setAttribute('style', 'display:none')
        setTimeout(() =>{
            window.location.href = './home.html'
        },1500)

        let token = Math.random().toString(16).substr(2);
        localStorage.setItem("token", token)
        
        
    } else {
        lblUser.setAttribute('style', 'color: red;')
        userLogin.setAttribute('style', 'border-color: red;')

        lblPass.setAttribute('style', 'color: red;')
        passLogin.setAttribute('style', 'border-color: red;')

        msgError.innerHTML = 'Usuário e senha não conferem ou não existe.'
        msgError.setAttribute('style', 'display: block')
        msgSuccess.setAttribute('style', 'display: none')
        userLogin.focus()
    }
}



