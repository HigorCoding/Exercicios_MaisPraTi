const prompt = require("prompt-sync")();

let numeros = [20,45,35,50,999,1000,50];

let numeroDigitado = Number(prompt("Digite o valor para procurarmos: "))
let encontrado = false; // começa assumindo que não existe

for (let i = 0; i < numeros.length; i++){
  if (numeroDigitado === numeros[i]){
    encontrado = true; 
    break;             
  }
}

if (encontrado){
  console.log(`O numero ${numeroDigitado} existe na lista`)
}else{
  console.log(`O numero ${numeroDigitado} não existe na lista`)
}

/*
includes() já retorna true ou false
então não precisa comparar com === true
if (numeros.includes(numeroDigitado)){
  console.log("Existe!")
}else{
  console.log("Não existe!")
}
*/