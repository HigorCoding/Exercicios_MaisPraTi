const prompt = require("prompt-sync")();

console.log("=====Bem vindo ao menu de operações!====")
console.log("1 - Adicionar")
console.log("2 - Editar")
console.log("3 - Excluir")
let opcaoUsuario = Number(prompt("Digite uma das opções acima: "));

switch (opcaoUsuario){
  case 1:
    console("Voce selecionou a opção adicionar!");
    break;
  case 2:
    console("Voce selecionou a opção editar!");
    break;  
  case 3: 
  console("Voce selecionou a opção excluir!");
    break;  
  default:
    console.log("Opção inválida!");
}
