const contarPares = (n, x) => {
   n = 10;
    for(x = 0; x <= n; x++) {
        if(x % 2 == 0){
            console.log(x + " é um número par");
        }else{
            console.log(x + " é um número ímpar");
        }
}
}
contarPares();

const livro = {
    titulo: "JavaScript Essencial",
    autor: "Alana Souza",
    ano: 2024,
    sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    editora: "Mundo Dev"
};

const {titulo, autor, ano, sinopse, editora} = livro;

console.log(titulo);
console.log(ano);

const frutas = ["Maçã", "Banana"];
const novasFrutas = ["Laranja", "Abacaxi"];
const todasAsFrutas = [...frutas, ...novasFrutas];

console.log(todasAsFrutas);

const verificarAcesso = (idade, temIngresso) => {
   if(idade >= 18 && temIngresso) {
    console.log("Acesso permitido");   
   }else{
    console.log("Acesso negado");
   }
}

verificarAcesso(18, true);
verificarAcesso(17, true);
verificarAcesso(20, false);

const exibirAviso = (estaChovendo, semGuardaChuva) => {
   if(estaChovendo || semGuardaChuva) {
      console.log("Leve um guarda-chuva!");
   }else{
      console.log("Tudo certo, pode sair tranquilo");
   }
};

exibirAviso(true, false);
exibirAviso(false, true);
exibirAviso(false, false);
