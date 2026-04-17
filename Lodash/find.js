// Encontrar el primer número mayor que 30.

const nums = [5,10, 20, 35, 40];

const findNums = _.find(nums, num =>  num < 30
)

console.log(findNums)

// Encontrar el primer número mayor que 10.
const numsArray = [4, 9, 15, 22, 5];
const encontrar = _.find(numsArray, numArray => numArray>10);
 console.log(encontrar);