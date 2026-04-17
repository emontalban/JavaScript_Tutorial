//Filtra jugadores con mayor de 50 puntos
// Quédate solo con sus nombres


const players = [
  { name: "Mario", skillPoints: 100 },
  { name: "Luigi", skillPoints: 23 },
  { name: "Peach", skillPoints: 55 },
  { name: "Toad", skillPoints: 30 },
  { name: "Yoshi", skillPoints: 95 },
  { name: "Bowser", skillPoints: 48 },
  { name: "Rosalina", skillPoints: 92 }
];

const over50 = _.filter( players, player => player.skillPoints > 50);

console.log(over50);

const names = _.map(over50, player => player.name)

console.log(names)