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

async function testarLogin() {
  try{
    const resultado = await fazerLogin('admin', '1234');
    console.log(resultado);
  }catch(erro){
    console.error(erro);
  }
}

testarLogin();
testarLogin('user', '1234');

// 5º questão

function getUsuario(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 5, nome: 'João' });
    }, 1000);
  });
}

function getPedidos(idUsuario){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Pedido 1', 'Pedido 2', 'Pedido 3']);
    }, 1500);
  });
}

async function mostrarPedidos(){
  try{
    const usuario = await getUsuario();
    const pedidos = await getPedidos(usuario.id);
    console.log('Usuário: ${usuario.nome}');
    console.log('Pedidos:', pedidos);
  }catch(erro){
    console.error(erro);
  }
}

mostrarPedidos();

// 6º questão

function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function contarAte(numero){
  for (let i = 1; i <= numero; i++){
    console.log(i);
    await delay(1000);
  }
}

contarAte(5);

// 7º questão

function buscarComTimeout(){
  const buscaDados = new Promise(resolve => {
    setTimeout(() => resolve("Dados recebidos"), 2000);
  });
  
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject("Tempo esgotado"), 1000);
  });
  
  return Promise.race([buscaDados, timeout]);
}

async function executarBusca(){
  try{
    const resultado = await buscarComTimeout();
    console.log(resultado);
  }catch(erro){
    console.error(erro);
  }
}

executarBusca();

// 8º questão

function promessa1(){
  return new Promise(resolve => {
    setTimeout(() => resolve("Promessa 1 resolvida"), 1000);
  });
}

function promessa2(){
  return new Promise((_, reject) => {
    setTimeout(() => reject("Promessa 2 rejeitada"), 2000);
  });
}

function promessa3(){
  return new Promise(resolve => {
    setTimeout(() => resolve("Promessa 3 resolvida"), 500);
  });
}

async function verificarResultados(){
  const resultados = await Promise.allSettled([promessa1(), promessa2(), promessa3()]);
  
  resultados.forEach((resultado, index) => {
    console.log('Promessa ${index + 1}:', resultado.status);
    if(resultado.status === 'fulfilled'){
      console.log('  Valor:', resultado.value);
    }else{
      console.log('  Razão:', resultado.reason);
    }
  });
}

verificarResultados();