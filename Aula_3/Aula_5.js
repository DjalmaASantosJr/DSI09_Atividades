// 1º questão

function buscarDadosNoBD(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = {
                id: 1,
                nome: "Djalma",
                idade: 27,
                altura: 1.71,
                time: "Nautico"
            }
            const erro = false
            if(erro){
                reject("Falha na conexão com o Banco de Dados")
            }else{
                resolve(dados)
            }
        }, 2000)
    })
}

async function main(){
    try{
        console.log("iniciando a busca de dados...")
        const dados = await buscarDadosNoBD()
        console.log("Dados encontrados: ", dados)
    }catch(erro){
        console.error("Erro: ", erro)
    }
}

main()

// 2º questão

function validarIdade(idade){
  return new Promise((resolve, reject) => {
    if(idade >= 18){
      resolve("Acesso permitido");
    }else{
      reject("Acesso negado");
    }
  });
}

async function testarIdade(idade){
  try{
    const resultado = await validarIdade(idade);
    console.log(`Idade ${idade}: ${resultado}`);
  }catch(erro){
    console.log(`Idade ${idade}: ${erro}`);
  }
}

testarIdade(27);
testarIdade(17);
testarIdade(53);

// 3º questão

function baixarImagem(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Imagem baixada");
    }, 2000);
  });
}

function baixarVideo(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Vídeo baixado");
    }, 3000);
  });
}

async function baixarMidias(){
  try{
    const [mensagemImagem, mensagemVideo] = await Promise.all([baixarImagem(), baixarVideo()]);
    console.log(mensagemImagem);
    console.log(mensagemVideo);
  }catch(erro){
    console.log("Erro ao baixar mídias:", erro);
  }
}

baixarMidias();

// 4º questão

function FazerLogin(usuario, senha){
    return new Promise((resolve, reject) => {
        if(usuario == 'admin' && senha == '1234'){
            console.log("Login bem-sucedido!");
        }else{
            console.log("Credenciais inválidas!");
        }
    })
}
