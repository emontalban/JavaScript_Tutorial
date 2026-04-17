console.log(2 + 2); // 4

console.log(2 - 2); // 0

console.log(2 / 2); // 1

console.log(2 * 10); // 20

console.log(5 % 2); // 1

console.log(10 % 2); // 0

console.log(8 % 2); // 0

console.log(2 ** 10); // 1024

var num = 2;
console.log(num);
num++; // 2
console.log(num);
++num; // 4
console.log(num);
num; // 4
console.log(num);
num--; // 4
console.log(num);
num; // 3
console.log(num);
--num; // 2
console.log(num);
//2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

//++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

var someNum = 10;
console.log(someNum)

var someOtherNum = -someNum;
console.log(someOtherNum) // -10

var strNum = '100';
console.log (strNum)

var convertedNum = + strNum;

console.log(convertedNum); // 100


//Operadores compuestos

let total = 0;

total += 10;
total += 20;
total += 5;

