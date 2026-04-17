/*
Crear una función tipo toThePowerOf(base, exponente)
Generar una estructura (normalmente un array) que represente las multiplicaciones
Usar reduce para multiplicar todos los valores
Devolver el resultado final (por ejemplo, 8)
*/


function toThePowerOf(base, exponente){
    let numeros = new Array(exponente);
    numeros.fill(base);

    return numeros.reduce((total, valorActual) =>{
       return total * valorActual
    }, 1 );

}




console.log(toThePowerOf(2,3))


const toThePowerOfTwo = (num, exp) => {
  const items = Array(exp).fill(num);
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return items.reduce(reducer);
};
console.log(toThePowerOf(2,3))