const prompt = require("prompt-sync")();

let funcionarios = []; 

for(let i = 1; i <= 80; i++){
  let matricula = Number(prompt(`Digite a matrícula do ${i}° funcionário: `));
  let nome = String(prompt(`Digite o nome do ${i}° funcionário: `));
  let salario = Number(prompt(`Digite o salário do ${i}° funcionário: `));
  funcionarios.push([matricula, nome, salario]);
}

function salarioLiquido(salarioBruto){
  return salarioBruto - calculoInss(salarioBruto)
}

function calculoInss(salarioBruto) {
  if (salarioBruto <= 1621) {
    return 0;
  } else if (salarioBruto <= 2902.84) {
    return salarioBruto * 0.09;
  } else if (salarioBruto <= 4354.27) {
    return salarioBruto * 0.14;
  }
}
for(let i = 0; i < funcionarios.length; i++){
  let matricula = funcionarios[i][0];
  let nome      = funcionarios[i][1];
  let bruto     = funcionarios[i][2];

  console.log(`Matrícula: ${matricula}`);
  console.log(`Nome: ${nome}`);
  console.log(`Salário bruto: R$ ${bruto.toFixed(2)}`);
  console.log(`Dedução INSS: R$ ${calculoInss(bruto).toFixed(2)}`);
  console.log(`Salário líquido: R$ ${salarioLiquido(bruto).toFixed(2)}`);
  console.log("-----------------------------------");
}