let lista_numeros = [15, 8, 90, 75, 102, 6, 2];

let numero_menor = Math.min(...lista_numeros);
let numero_maior = Math.max(...lista_numeros);

document.write("O número menor é: " + numero_menor);
document.write("<br>");
document.write("O número maior é: " + numero_maior);

alert(`O menor número da lista é: ${numero_menor}`);
alert(`O maior número da lista é: ${numero_maior}`);
