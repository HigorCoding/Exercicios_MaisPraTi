const prompt = require("prompt-sync")();

let M = [];
let C = [];

for(let i = 0; i < 6; i++){
  M.push([]);
  for(let j = 0; j < 8; j++){
    let valorUsuarioDgtd = Number(prompt(`Informe o valor da ${i} linha na coluna ${j}`))
    M[i].push(valorUsuarioDgtd)
  }
}

for(let i = 0; i < 6; i++){
  let contador = 0;
  for(let j = 0; j < 8; j++){
    if(M[i][j] < 0){
      contador++
    }
  }
  C.push(contador)
}

for(let i = 0; i < C.length; i++){
  console.log(C[i])
}