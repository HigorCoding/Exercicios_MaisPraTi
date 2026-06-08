const prompt = require("prompt-sync")();

let altura = Number(prompt("Informe a sua altura: "))
let sexo = String(prompt("Informe o seu sexo: "))

function pesoRecomendado(altura, sexo){
    if(sexo.toLowerCase() === "homem"){
      return 72.7 * altura - 58
    }else{
      return 62.1 * altura - 44.7
    }
}
let pesoIdeal = pesoRecomendado(altura, sexo)
console.log(`O seu peso ideal é ${pesoIdeal.toFixed(2)}Kgs!`)