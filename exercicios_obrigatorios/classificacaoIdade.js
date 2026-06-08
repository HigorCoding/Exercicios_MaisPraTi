const prompt = require("prompt-sync")();
console.log("=== Verificação criança, adolecente, adulto, idoso===")

let idade = Number(prompt("Informe a sua Idade: "))
/*
Comando isNaN(idade) detecta se o usuário digitou letras ao invés de número.
*/

if (idade < 0 || isNaN(idade)) {
  console.log("Idade inválida!");
} else if (idade <= 11) {
  console.log(`A idade ${idade} se encaixa em Criança`);
} else if (idade <= 17) {
  console.log(`A idade ${idade} se encaixa em Adolescente`);
} else if (idade <= 59) {
  console.log(`A idade ${idade} se encaixa em Adulto`);
} else {
  console.log(`A idade ${idade} se encaixa em Idoso`);
}
