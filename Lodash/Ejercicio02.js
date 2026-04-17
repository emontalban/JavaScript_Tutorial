//Saber si existe algún número mayor que 7.

const CompararNum = [1, 3, 5, 8, 9];


const mayor7 = _.filter(CompararNum, num => num > 7).length > 0;

console.log(mayor7);