function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
      return 1;
  } else {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
          resultado *= i;
      }
      return resultado;
  }
}

let numero = 12;
let fatorialDe12 = calcularFatorial(numero);

alert('bem vindo!');
alert(`O fatorial de ${numero} é: ${fatorialDe12}`);