/// Generar 10 números aleatorios entre 1 y 50.
 numeroAleatorio = () => {
     return Math.round(Math.random() * 50)
 }
 const numerosAleatorios =  _.times(10, numeroAleatorio)

 console.log(numerosAleatorios)

//Crear un array con 8 números aleatorios entre 1 y 20.

numberRandom = () => {
  return Math.round(Math.random() * 20)
}

const num8 = _.times(8, numberRandom);
console.log(num8);