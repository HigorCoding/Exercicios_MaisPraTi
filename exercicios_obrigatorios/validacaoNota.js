const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite sua 1 nota: "))
let nota2 = Number(prompt("Digite sua 2 nota: "))
let nota3 = Number(prompt("Digite sua 3 nota: "))

let resultado = (nota1 + nota2 + nota3) / 3;

if (resultado >= 7){
  console.log(`Sua media é ${resultado.toFixed(2)}, você está aprovado`)
}
else if(resultado >= 4){
  console.log(`Sua media é ${resultado.toFixed(2)}, você está de recuperação`)
}
else{
  console.log(`Sua media é ${resultado.toFixed(2)}, você está reprovado`)
}


