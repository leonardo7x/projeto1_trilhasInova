
alert ('bem vindo a calculadora de notas.')

let nota01 = parseInt(prompt('digite sua primeira nota'));
let nota02 = parseInt(prompt('digite sua segunda nota'));
let nota03 = parseInt(prompt('digite sua terceira nota'));
let notaMedia = ((nota01+nota02+nota03) / 3 ).toFixed(2);

alert (`sua media é ${notaMedia}`);
