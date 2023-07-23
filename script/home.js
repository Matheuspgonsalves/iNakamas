if(localStorage.getItem("token") == null) {
    document.querySelector(".btnSair").setAttribute("style", "display: none;");
    document.querySelector(".btnLogin").setAttribute("style", "display: hidden;");
} else {
    document.querySelector(".btnLogin").setAttribute("style", "display: none;");
    document.querySelector(".btnSair").setAttribute("style", "display: hidden;");
}

function sair() {
    localStorage.removeItem("token");

    setTimeout(() =>{
        window.location.href = './index.html'
    },1500)
}

