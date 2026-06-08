const prompt = require("prompt-sync")();

let nomes = [];

for (let i = 1; i<= 7; i++){
  let nomesDigitados = String(prompt(`Digite o ${i} nome: `))
  nomes.push(nomesDigitados)
}
for(let i = nomes.length -1; i >= 0; i--){
  console.log(nomes[i])
}