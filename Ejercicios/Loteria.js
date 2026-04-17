// weightedLottery(weights)
// Esta función recibe un objeto donde cada clave tiene una probabilidad.
// El objetivo es devolver una de las claves de forma aleatoria,
// pero respetando los pesos: cuanto mayor el número, más probabilidad tiene de salir.
//
// Ejemplo:
// { green: 1, yellow: 2, red: 3 }
// → red debería salir más veces que yellow y green.
//
// La función debe ser flexible para cualquier número de opciones.
const weights = { green: 1, yellow: 2, red: 3 , blue: 4, black:5}

function weightedLottery(weights){
    let probability =[];
    for (let key in weights){
        for (let i = 0; i < weights[key]; i++) {
                probability.push(key);
        }
    }
    console.log(probability);
    const randomIndex = Math.floor(Math.random() * probability.length);
    return probability[randomIndex];
    

}
console.log(weightedLottery(weights))
