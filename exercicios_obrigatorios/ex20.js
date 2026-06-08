const palavras = ["maçã", "banana", "maçã", "uva", "banana", "maçã"];

function contarOcorrencias(arr) {
  const resultado = {};

  for (const palavra of arr) {
    if (resultado[palavra] === undefined) {
      resultado[palavra] = 1;
    } else {
      resultado[palavra] = resultado[palavra] + 1;
    }
  }

  return resultado;
}

console.log(contarOcorrencias(palavras));