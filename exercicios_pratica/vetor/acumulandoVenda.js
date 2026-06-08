let vendas =  [100, 200, 150, 300]

let valorTotalVendas = 0;

for (let i = 0; i < vendas.length; i++){
  valorTotalVendas += vendas[i]
}
console.log(`O valor total de vendas foi R$${valorTotalVendas.toFixed(2)}`)