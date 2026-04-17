// conseguir la media aritmetica

const getAverage = arr => {

//suma los valores dessde el array
  const reducer = (total, currentValue) => total + currentValue;
  const total = arr.reduce(reducer);
  // consigue la longuitud del array
  // divide la suma del array entre la longuitud
  return total / arr.length;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(getAverage(arr));