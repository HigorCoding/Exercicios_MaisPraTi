const prompt = require("prompt-sync")();
/*
No navegador existe o prompt() nativo.
No Node.js não existe, por isso usamos o pacote.
const prompt = require("prompt-sync")();
  │              │                 │
  │              │                 └─ inicializa o pacote
  │              └─ importa o pacote instalado
  └─ cria a função prompt() para usar no código
*/
console.log("=== Verificação impar ou par ===")
let numeroDigitadoUsuario = Number(prompt("Digite o numero que gostaria de verificar: "))

if (numeroDigitadoUsuario % 2 === 0){
  console.log("O numero digitado %d é par", numeroDigitadoUsuario)
}else{
  console.log("O numero digitado %d é impar", numeroDigitadoUsuario)
}
