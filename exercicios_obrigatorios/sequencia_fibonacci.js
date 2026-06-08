const prompt = require("prompt-sync")();

let valorFibonacci = 0;
let anterior =  0;
let anteAnterior = 1;

for(let i = 1; i<=10;i++){
  valorFibonacci = anterior + anteAnterior;
  anteAnterior = anterior;
  anterior =  valorFibonacci;
  console.log(valorFibonacci)
}