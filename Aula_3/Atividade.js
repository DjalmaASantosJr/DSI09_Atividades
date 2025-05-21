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