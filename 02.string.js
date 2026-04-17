var str = "The quick brown fox jumped over the lazy dog";

var caracthers = str.length;
console.log(str.length);
//Resultado: 44 me devuelve cuantos caracteres hay en la frase

console.log(str.charAt(4)); //Resultado: q
//te devuelve el caracter en la posicion 4

console.log(str.concat('again and again'));
//añade el texto a la frase que esta en la variable str

console.log(str.includes('quick')); //Resultado: true
// te devuelve true o falso dependiento si contiene o no la palabra

console.log(str.startsWith('The')); //Resultado; true
// devuelve true o false dependiendo si empieza o no por la palabrano

console.log(str.endsWith('The')); //Resultado; false
// devuelve true o false dependiendo si termina o no por la palabra

console.log(str.repeat(5));
//Repite 5 veces la misma oracion


var telephone = '(555)555-5555'
console.log(telephone.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) )

console.log(str.replace('fox', 'wolf'));
// reemplaza la palabra fox por wolf

console.log(str.search('jumped'));
// devuelve el numero del indice del primero que encuentre

var str2 = str.concat(' again and again');
console.log(str2);

console.log(str2.indexOf('again'));
// devuelve el indice del si lo encuentra

console.log(str2.lastIndexOf('again'));
// devuelve el ultimo indice

console.log(str.slice(10));
//devuelve desde la posicion 10 hasta el final

console.log(str.charAt(10));
//devuelve el caracter en la posicion 10

console.log(str.slice())




console.log(str.slice(4, 10)); // "quick "

console.log(str.slice(-8)); // "lazy dog"

console.log(str.slice(10)); // "brown fox jumped over the lazy dog"

console.log(str.toUpperCase()); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

console.log(str.toLowerCase()); // "the quick brown fox jumped over the lazy dog"

var messyString = '    Hi there    ';

console.log(messyString.trim()); // "Hi there"




function strings() {
    
    // Use slice to return a substring starting from the "w" through the end of the sentence
    var str = "The five boxing wizards jump quickly";
    return (str.slice(16) );
    
}

console.log(strings());


var nombre = 'Keira';

function saludo(){
    console.log('Hello ' + nombre);
}
saludo() // Hola Keira
console.log(nombre)

var nombre1 = 'Keira';

function saludo1(){
    nombre1 = 'Hexe'
    console.log('Hello ' + nombre1);
}
saludo1() // Hola Hexe
console.log(nombre1)


let frase = "Hola_JavaScript es un lenguaje de programacion.";
// Índices:   0123456789...

// Ejemplo 1: Extraer desde el índice -25 hasta el -17
let palabra1 = frase.slice(5,9);
console.log(palabra1); // Resultado: "lenguaje"

// Ejemplo 2: Extraer desde el índice -13 hasta el final
let palabra2 = frase.slice(-13);
console.log(palabra2); // Resultado: "programacion."