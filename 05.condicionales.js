let numero = 10;

if (numero === 10) {
    console.log("Es exactamente 10");
} else if (numero > 10) {
    console.log("Es mayor que 10");
} else {
    console.log("Es menor que 10");
}



let nota = 7;

if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 7) {
    console.log("Notable");
} else if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}

let edad = 20;

if (edad < 12) {
    console.log("Niño");
} else if (edad < 18) {
    console.log("Adolescente");
} else if (edad < 65) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}

let dia = 2;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    default:
        console.log("Otro día");

}


function switchStatement() {
    var data = 5
    switch (typeof data){
        case "string":
            console.log('Es un string')
            break;
        case "number":
            console.log("number")
            break;
        case "boolean":
            console.log('Es un boolean')
            break;
        default:
            console.log('No encontrado el tipo')
    }
}

switchStatement()
function loguearte(user) {
    user
        ? (user.admin
            ? console.log('eres admin')
            : console.log('no eres admin'))
        : console.log('necesitas loguearte');
}

loguearte(null);
loguearte({ admin: false });
loguearte({ admin: true });


