// Multiplicar todos los números por 2.
const numbers = [1, 2, 3, 4, 5];

multiplicar = (n) => {
    return n * 2
}

const numberPorDos = _.map(numbers, multiplicar);

console.log(numberPorDos)


const masUno = [2, 4, 6, 8];

anadirUno = (n) => n + 1;

const unoMas = _.map(masUno, anadirUno);

console.log(unoMas);