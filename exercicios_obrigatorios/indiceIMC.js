const prompt = require("prompt-sync")();

console.log("Bem vindo a calculadora de IMC (Índice de Massa Corporal)")
let altura = Number(prompt("Digite a sua altura, exemplo: (1.00): "))
let kilos = Number(prompt("Digite seu peso, exemplo(25): "))

let calculoImc = kilos / (altura * altura) ;

if (calculoImc < 18.5){
  console.log(`O calculo deu ${calculoImc.toFixed(2)} você se encaixa em magresa!`)
}
else if(calculoImc >= 18.5 && calculoImc <= 24.9){
  console.log(`O calculo deu ${calculoImc.toFixed(2)} você se encaixa em normal!`)
}
else if(calculoImc <= 29.9){
  console.log(`O calculo deu ${calculoImc.toFixed(2)} você se encaixa em sobrepeso, grau 1 `)
}else if(calculoImc <= 39.99){
  console.log(`O calculo deu ${calculoImc.toFixed(2)} você se encaixa em obesidade, grau 2 `)
}
else{
  console.log(`O calculo deu ${calculoImc.toFixed(2)} você se encaixa em obesidade grave, grau 3 `)
}
