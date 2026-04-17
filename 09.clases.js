class Account{
    constructor({username, password}){
        this.username = username;
        this.password = password;
    }
}

const user = new Account({username:"Keira", password:"1234"})

console.log(user.username, user.password)

class Usuario{
  constructor(nombre, rol = "usuario"){
    this.nombre = nombre;
    this.rol = rol;
  }
  saludar() {
   return `Hola ${this.nombre}, tu rol es ${this.rol}`;
  }
}

const user1 = new Usuario("Mario");
const user2 = new Usuario("Luigi", "administrador")
user1.saludar(); 
user2.saludar();


class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

const model3 = new Car({year: 2026, brand: "Tesla", poweredBy: "electricity"})
model3.carSpecs();


class Instructor {
  constructor({ name, role = "assistant" }) {
    this.role = role;
    this.name = name;
  }

  // Instance method
  renderDetails() {
    console.log(`${this.name} - ${this.role}`);
  }

  // Base case static method
  static helloWorld() {
    console.log('Hi there');
  }

  // Static method
  static canTeach(instructor) {
    return (instructor.role === 'classroom');
  }
}

let juniorInstructor = new Instructor({ 'name' : 'Brian' });
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"

Instructor.helloWorld(); // "Hi there"

// "Brian can teach: false"
console.log(
  `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);

// "Alice can teach: true"
console.log(
  `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);



class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}
//Crear instancia
const choice1 = new Home({type: "house", payment: "mortgage"});
const choice2 = new Home({type: "apartment"});

Home.homeImprovement(choice1)
Home.homeImprovement(choice2)