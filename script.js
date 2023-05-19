const CadastroContainer = document.getElementById('cadastro-container')

const moveOverlay = () => CadastroContainer.classList.toggle('move')

document.getElementById('overlay-cadastrar').addEventListener('click', moveOverlay)
document.getElementById('overlay-entrar').addEventListener('click', moveOverlay)




window.addEventListener("load", function(){
    const email = this.document.getElementById("email")
    const senha = this.document.getElementById("senha")
    const confirmSenha = this.document.getElementById("confirmSenha")
    
    const cadastrar = this.document.getElementById("cadastrar")
    const entrar = this.document.getElementById("entrar")
    
    let emailRegist = this.document.getElementById("email-regist")
    let senhaRegist = this.document.getElementById("senha-regist")
    
    
    cadastrar.addEventListener("click", function () {
        let chave = email.value
        let valor = senha.value
        let valorConfirm = confirmSenha.value
        if (valor == valorConfirm && valor != "") {
            localStorage.setItem(chave, valor)
            alert ("Cadastro Concluido")
        }
        else{
            alert ("Algumas informações podem estar incorretas, tente novamente")
        }
    
    })
    
    entrar.addEventListener("click", function (e) {
        e.preventDefault()
        let chave = emailRegist.value
        let valor = senhaRegist.value
       /*  console.log(chave)
        console.log(valor) */
    
        /* let key = localStorage.key(chave)
        let result = localStorage.getItem(key)
        console.log(key)
        console.log(result) */
        var confirm = 0
        for (let i = 0, len = localStorage.length; i < len; i++){
            let confirmKey = localStorage.key(i)
            let confirmResult = localStorage.getItem(confirmKey)
            if(chave == confirmKey && valor == confirmResult){
                confirm = 1;
                break
            }
        }
        if (confirm == 1) {
            alert ("Bem vindo!")
           /*  window.open('') */
        }
        else {
            alert ("Email ou Senha Incorretos...")
        }
    })
})