const languages = [
  { name: "JavaScript", creator: "Brendan Eich" },
  { name: "Python", creator: "Guido van Rossum" },
  { name: "Java", creator: "James Gosling" },
  { name: "C++", creator: "Bjarne Stroustrup" },
  { name: "TypeScript", creator: "Anders Hejlsberg" },
  { name: "C#", creator: "Anders Hejlsberg" },
  { name: "Ruby", creator: "Yukihiro Matsumoto" }
];

const objectLenguaje = _.keyBy(languages, "name")
console.log(objectLenguaje);

console.log(objectLenguaje["Java"]);