const dados = {
  nome: "Carlos",
  idade: 35,
  notas: [9, 8, 7],
  ativo: true,
  hobbies: ["leitura", "música"],
  score: 4.5
};

function filtrarArrays(obj) {
  const resultado = {};
  for (const chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave];
    }
  }
  return resultado;
}

console.log(filtrarArrays(dados));