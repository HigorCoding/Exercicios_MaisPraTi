const prompt = require("prompt-sync")();

let fatorial =  Number(prompt("Digite um numero que deseja verificar o fatorial: "));
let contador = fatorial - 1;

for (;contador != 0 ; contador--){
  let anterior = fatorial;
  fatorial = fatorial * contador; 
  console.log(`${anterior} x ${contador} = ${fatorial}`);
}
