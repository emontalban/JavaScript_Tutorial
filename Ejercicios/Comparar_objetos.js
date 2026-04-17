// Vamos a crear una función que compare dos objetos de configuración de JavaScript 
// y determine si tienen exactamente las mismas propiedades y valores.


const obj1 = { language: "JavaScript", level: "beginner" };
const obj2 = { language: "JavaScript", level: "beginner" };

//console.log(obj1 === obj2); // false No funciona

const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
            return false;
    }
    for (let key of obj1Keys) {
         if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;

};
console.log(isEqual(obj1, obj2));

const objeto1 = {
  language: "JavaScript",
  tools: {
    bundler: "Webpack"
  }
};

const objeto2 = {
  language: "JavaScript",
  tools: {
    bundler: "Webpack"
  }
};

// para casos complejos anidados se usa librerias como
// _.isEqual(objeto1, objeto2)