//De un array de números, obtener solo los mayores a 25.

const numeros = [12, 100, 6, 98, 15, 36, 21, 123 ]

const mayor25 = _.filter(numeros, numero => {
    return numero > 25;
})

console.log(mayor25);


//Obtener solo los números menores que 10.
const numerosMenores = [5, 12, 8, 21, 30, 7];

const menor10 = _.filter(numerosMenores, numero => numero < 10)

console.log(menor10);