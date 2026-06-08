let notasEstudante = [8, 7, 9, 10, 6]
let mediaEstudante = 0;
let tamanhoArray = notasEstudante.length;

for (let i = 0; i<notasEstudante.length; i++){
  mediaEstudante += notasEstudante[i]
}
mediaEstudante /= tamanhoArray;

console.log(`A media do aluno foi de ${mediaEstudante} pontos`)