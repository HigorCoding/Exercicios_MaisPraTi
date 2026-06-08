const prompt = require("prompt-sync")();

let pessoas = []; 
let opcaoUsario = 1;

while (opcaoUsario != 0){
  opcaoUsario = Number(prompt("Digite 0 para parar e 1 para continuar: "))

  if(opcaoUsario === 0){
    console.log("Muito obrigado!")
    break
  }
  let salario = Number(prompt("Digite o seu salario: "))
  let numeroFilhos = Number(prompt("Digite a quantidade de filhos:  "))
  pessoas.push([salario,numeroFilhos])
  console.log("------------------------------------")
}
console.log("-----EXIBINDO DADOS-----")
console.log(`Média de salário: R$ ${mediaSalario(pessoas).toFixed(2)}`)
console.log(`Média de filhos: ${mediaFilhos(pessoas).toFixed(2)}`)
console.log(`Maior salário: R$ ${maiorSalario(pessoas).toFixed(2)}`)
console.log(`Percentual com salário até R$350,00: ${percentualBaixoSalario(pessoas).toFixed(2)}%`)

function mediaSalario (salario){
  let soma = 0;
  for(let i = 0; i < salario.length; i++){
    soma += salario[i][0]
  }
  return soma / salario.length;
}

function mediaFilhos(pessoas){
  let soma = 0;
  for(let i = 0; i < pessoas.length; i++){
    soma += pessoas[i][1]
  }
  return soma / pessoas.length;
}

function maiorSalario (pessoas){
  let maior = 0;
  for(let i = 0; i< pessoas.length;i++){
    if(maior < pessoas[i][0]){
      maior = pessoas[i][0]
    }
  }
  return maior;
}

function percentualBaixoSalario(pessoas){
  let contador = 0; 
  for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i][0] <= 350){
      contador++;
    }
  }
  return (contador / pessoas.length) * 100;
}