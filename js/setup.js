function enviar(){

    validarCampo()

    let nome = document.querySelector('#ds_nome').value
    let sobrenome = document.querySelector('#ds_sobrenome').value
    let rg = document.querySelector('#ds_rg').value
    let cpf = document.querySelector('#ds_cpfcnpj').value
    let usuarioCadastro = document.querySelector('#cd_usuario_cadastro').value
    let tipo = document.querySelector('#ds_tipo').value
    let grupoUsuario = document.querySelector('#cd_tipo_redirecionamento').value
    let empresa = document.querySelector('#ds_empresa').value
    let funcionario = document.querySelector('#stFuncionario').value
    let centroCusto = document.querySelector('#cd_centroDeCusto').value
    let lideranca = document.querySelector('#liderancaDireita').value
    let cargo = document.querySelector('#cargo').value
    let lider = document.querySelector('#lider').value
    let ingresso = document.querySelector('#ingressoNaSociedade').value

    
}


function validarCampo(){

    if(document.querySelector('#ds_nome').value == ""){
        alert('Preencha o campo nome!')
        return false;
    }if(document.querySelector('#ds_sobrenome').value ==""){
        alert('Preencha o campo Sobrenome!')
        return false;
    }if(document.querySelector('#ds_rg').value ==""){
        alert('Preencha o campo Rg!')
        return false;
    }if(document.querySelector('#ds_cpfcnpj').value ==""){
        alert('Preencha o campo Cpf/Cnpj!')
        return false;
    }if(document.querySelector('#cd_usuario_cadastro').value ==""){
        alert('Selecione o Usuário!')
        return false;
    }if(document.querySelector('#ds_tipo').value ==""){
        alert('Selecione o Tipo Usuario!')
        return false;
    }if(document.querySelector('#cd_tipo_redirecionamento').value ==""){
        alert('Selecione o Grupo Usuário!')
        return false;
    }if(document.querySelector('#ds_empresa').value ==""){
        alert('Selecione a Empresa!')
        return false;
    }if(document.querySelector('#stFuncionario').value ==""){
        alert('Selecione o tipo Funcionário!')
        return false;
    }if(document.querySelector('#cd_centroDeCusto').value ==""){
        alert('Selecione o centro de custo!')
        return false;
    }if(document.querySelector('#cargo').value == ""){
        alert('Selecione o Cargo!')
        return false;
    }  
     else {
        console.log('Usuario Cadastrado com sucesso!')
    } 

}