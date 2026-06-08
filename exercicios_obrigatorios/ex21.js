const vendas = [
  { vendedor: "Ana",    valor: 150 },
  { vendedor: "Bruno",  valor: 200 },
  { vendedor: "Ana",    valor: 300 },
  { vendedor: "Carlos", valor: 100 },
  { vendedor: "Bruno",  valor: 250 },
];

function totalPorVendedor(arr) {
  const resultado = {};

  for (const venda of arr) {
    const nome = venda.vendedor;
    const valor = venda.valor;

    if (resultado[nome] === undefined) {
      resultado[nome] = valor;
    } else {
      resultado[nome] = resultado[nome] + valor;
    }
  }

  return resultado;
}

console.log(totalPorVendedor(vendas));