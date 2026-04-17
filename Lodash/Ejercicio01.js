// Obtener solo los mayores de edad (≥18)
//  De esos, sacar solo los nombres

const users = [
  { name: "Ana", age: 17 },
  { name: "Luis", age: 25 },
  { name: "Marta", age: 30 },
  { name: "Carlos", age: 15 }
];

const mayoresEdad = _.filter(users, u => u.age > 18);
console.log(mayoresEdad);

const soloNombres = _.map(mayoresEdad, user =>{
    return user.name
})
console.log(soloNombres)
