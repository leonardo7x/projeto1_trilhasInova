let pontosVidaInicial = 100;
let danosAtaque = 20;
let numeroAtaques = 3;

let totalDanos = danosAtaque * numeroAtaques;
let pontosDeVidaRestantes = pontosVidaInicial - totalDanos;

alert('começarar com 100 de hp')
alert(`Após três ataques, restarão  ${pontosDeVidaRestantes} pontos de vida.`);