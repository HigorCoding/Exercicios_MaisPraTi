const prompt = require("prompt-sync")();

let nomes = [];
let idades = [];

for(let i = 1; i<= 9 ; i++){
    let nomesUsuario = String(prompt(`Digite o ${i} nome:`))
    nomes.push(nomesUsuario)
    let idadeUsuario = Number(prompt(`Digite a idade do ${nomesUsuario}: `))
    idades.push(idadeUsuario)
}

for(let i = 0; i<idades.length; i++){
  if (idades[i] < 18){
    console.log(`O ${nomes[i]} é menor de idade, possui ${idades[i]} anos`)
  }
}
