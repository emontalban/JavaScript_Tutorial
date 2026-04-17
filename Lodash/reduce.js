// la sintaxis
const sum = _.reduce([1, 2, 3],  function(total, num){
    return total + num;
}, 0)

console.log(sum);


// aqui queremos sumar todo los puntos
const scores = [
  { name: "Eleven",  points: 100 },
  { name: "Vecna",  points: 98 },
  { name: "Jim Hopper",  points: 85 },
  { name: "Steve Harrington",  points: 80 },
  { name: "Nancy Wheeler",  points: 75 },
  { name: "Dustin Henderson",  points: 70 },
  { name: "Mike Wheeler",  points: 65 },
  { name: "Max Mayfield",  points: 60 },
  { name: "Lucas Sinclair",  points: 60 }
];

const pointsTotal = _.reduce(scores, function(total , characters){
    return total + characters.points;
},0)

// con arrow function

const pointsTotalArrow = _.reduce(scores, (total , characters) =>{
    return total + characters.points;
},0)


console.log(pointsTotal);
console.log(pointsTotalArrow);

//generar un codigo html

const links = [
    "https://google.com",
    "https://devcamp.com",
    "https://airbnb.com"
];

const html =  _.reduce(links, (content, link) =>{
    return `<a href='${link}'>${link}</a> <br>`.concat(content);

},"");

console.log(html)