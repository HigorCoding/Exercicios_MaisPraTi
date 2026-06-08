const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 99, d: 4 };

function combinar(obj1, obj2) {
  const resultado = {};

  resultado.a = obj1.a;
  resultado.b = obj2.b;
  resultado.c = obj1.c;
  resultado.d = obj2.d;

  return resultado;
}

console.log(combinar(obj1, obj2));