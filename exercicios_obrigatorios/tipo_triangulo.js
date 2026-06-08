const prompt = require("prompt-sync")();

let ladoA = Number(prompt("Informe o lado A do triangulo: "));
let ladoB = Number(prompt("Informe o lado B do triangulo: "));
let ladoC = Number(prompt("Informe o lado C do triangulo: "));

// Primeiro verifica se forma um triângulo válido
if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
  console.log("Os lados formam um triângulo válido!");
  // Depois classifica o tipo
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Triângulo Equilátero — todos os lados iguais.");
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    console.log("Triângulo Isósceles — dois lados iguais.");
  } else {
    console.log("Triângulo Escaleno — todos os lados diferentes.");
  }
} 
else {
  console.log("Esses lados NÃO formam um triângulo!");
}