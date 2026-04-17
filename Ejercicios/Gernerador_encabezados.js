/*
Ejercicio: Generador de Encabezados HTML

Crea una función llamada `headingGenerator` que haga lo siguiente:

1. Reciba dos argumentos:
   - Un texto que será el contenido del encabezado.
   - Un número que indicará el nivel del encabezado HTML (1 → <h1>, 2 → <h2>, etc.).

2. La función debe devolver un string que represente un encabezado HTML
   con el texto y el nivel especificado.

Ejemplos de uso:
headingGenerator("Hola Mundo", 1) // Devuelve "<h1>Hola Mundo</h1>"
headingGenerator("JavaScript", 3) // Devuelve "<h3>JavaScript</h3>"

Nota: La función solo debe devolver el string, no escribirlo en la página.
*/

const headingGenerator = function(text, number){
    return (`<h${number}> ${text} <h${number}>`);
}

console.log(headingGenerator("Hi there", 1));

//con Arrow function

const headingGeneratorTwo = (text, number)  =>{
    return (`<h${number}> ${text} <h${number}>`);
}
console.log(headingGeneratorTwo("Hola Mundo", 2));


function SavingCalc(paycheck) {
  this.percent = 0.30;
  this.paycheck = paycheck;

  this.deposit = function() {
    return (this.percent * this.paycheck)
  }
}

const piggyBank = new SavingCalc(2000);

console.log(piggyBank.deposit()); 

function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    //Write your code here to make the cars switch lanes
    [rightLane, leftLane] = [leftLane, rightLane]
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

console.log(roadRage());

const [beverage, plant, fruit] = ["Iced Coffee","Roses","Kiwi"]

console.log(beverage, plant, fruit)

const bank = {
  accountNum: 454812259,
  name: 'John Doe',
  balance: 1257
}

const bankInfo = ({accountNum,name,balance}) => {
  return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
}

console.log(bankInfo(bank));

const user = {
  username : "Keira",
  status : "away"
}
function loginEven({username, status}){
    status = "active";
    return (`${username} is ${status}`)
}