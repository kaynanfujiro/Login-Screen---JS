
const btnLogin = document.querySelector('#btnlogin')

btnLogin.addEventListener('click', function logar(){
    let username = document.getElementById('inputusuario').value
    let password = document.getElementById('inputsenha').value

    if(username == 'admin' && password == 'admin'){
        alert('Você foi logado com sucesso');
    }
    else{
        alert('Senha ou Usuario invalido. Digite novamente.')
    }
});