const numeroAleatorio =_.random(1, 52222)
console.log(numeroAleatorio);


    // random
    lodashRandNumber = () => {
      return _.random(1, 100);
    }

    const lodashSampleNumbers = _.times(5, lodashRandNumber);

    console.log(lodashSampleNumbers);