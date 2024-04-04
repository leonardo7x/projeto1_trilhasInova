function calcularIdade(dataNascimento) {
    
    let anoAtual = new Date().getFullYear();

    let anoNascimento = parseInt(dataNascimento.substring(0, 4));

    let idade = anoAtual - anoNascimento;

    let mesAtual = new Date().getMonth() + 1; 
    let diaAtual = new Date().getDate();
    let mesNascimento = parseInt(dataNascimento.substring(5, 7));
    let diaNascimento = parseInt(dataNascimento.substring(8, 10));

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

let dataDeNascimento = "1990-04-15";

alert(`A idade é: ${calcularIdade (dataDeNascimento)}`);


