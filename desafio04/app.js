function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function separarNumerosPrimos(array) {
    let numerosPrimos = [];
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            numerosPrimos.push(array[i]);
        }
    }
    return numerosPrimos;
}

let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let primos = separarNumerosPrimos(numeros);

alert(`bem vindo! seus números primos são:`)
alert(`Números primos: ${primos}`); 
