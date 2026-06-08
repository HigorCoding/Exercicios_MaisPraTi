const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let media;

console.log("Digite 0 para parar!");

while (true) {
  let valorUsuario = Number(prompt(`Digite o ${contador + 1}° valor: `));

  if (valorUsuario === 0) {
    if (contador === 0) {
      console.log("Nenhum valor foi digitado!");
    } else {
      media = soma / contador;
      console.log(`Quantidade de valores: ${contador}`);
      console.log(`Soma total: ${soma.toFixed(2)}`);
      console.log(`A média é: ${media.toFixed(2)}`);
    }
    break;
  }
  soma += valorUsuario;  // acumula os valores
  contador++;            // só conta valores válidos
}