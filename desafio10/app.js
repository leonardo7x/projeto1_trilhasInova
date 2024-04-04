let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

let contadorLMaiusculas = 0;

for (let i = 0; i < texto.length; i++) {
    let caractere = texto[i];
    if (caractere >= 'A' && caractere <= 'Z') {
        contadorLMaiusculas++;
    }
}  

alert(`Número de letras maiúsculas na frase: ${contadorLMaiusculas}`);