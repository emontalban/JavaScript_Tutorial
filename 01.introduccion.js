var hello_world = "Hi There";
console.log(hello_world);

// typeof te devuelve el tipo de dato
console.log(typeof "Hola");     // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof {a: 1});     // "object"
console.log(typeof function(){}); // "function"

// Objetos en javaScript
var user = {
  name: 'Keira',
  age: 35,
  city: 'Scotts',
  grades: {
    math: 90,
    science: 80,
  }
}
user.age = 36; // actualizamos la variable
user.grades.coding = 95; // añadimos un nuevo clave valor al objeto
console.log(user.grades.coding); // nos devuelve el valor

// convertir un numero a un String

var ageOne = 35;
numberOne = String(ageOne);
var ageTwo = 45;
numberTwo = ageTwo.toString();
console.log(typeof numberOne);
console.log(typeof numberTwo);

//convertir un String a numero

var ageThree = '23'
numberThree = Number(ageThree);
numberFour = parseInt(ageThree);
numberFive = parseFloat(ageThree);
console.log(typeof numberThree);
console.log(typeof numberFour);
console.log(typeof numberFive);

//Otra opcion
var foo = + ageThree; //esto tambien lo convertira en numero
