
function contarPalavras(frase) {
    let arrayPalavras = frase.split(' ');
    let numPalavras = arrayPalavras.length;
    return numPalavras;
  }
  
  let frase = "What is Lorem Ipsum?";
  let numPalavras = contarPalavras(frase);

  alert("sua frase tem:") ;
  alert( `${numPalavras} palavras ` );
