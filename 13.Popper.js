// Creamos una clase llamada ArrayPopper
// Esta clase servirá para ir sacando elementos
// de un array alternando entre el inicio y el final




class ArrayPopper {
  constructor(arr) {
    this.arr = arr;
    // Variable booleana para recordar desde qué lado toca sacar
    // true  -> un lado
    // false -> el otro lado
    this.atBeginning = true;
  }

  togglePopper() {
    // Invertimos el valor booleano
    // true pasa a false
    // false pasa a true
    this.atBeginning = !this.atBeginning;
     // Operador ternario:
    // si atBeginning es true -> usa pop()
    // si atBeginning es false -> usa shift()

    // pop()   -> elimina el ÚLTIMO elemento
    // shift() -> elimina el PRIMER elemento
    return this.atBeginning ? this.arr.pop() : this.arr.shift();
  }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

ap.togglePopper(); 
ap.togglePopper(); 
ap.arr
ap.togglePopper(); 
ap.togglePopper(); 
ap.togglePopper(); 
ap.togglePopper();  // undefined

const strApp = new ArrayPopper(['Hi','there','from','JS'])
strApp.togglePopper()
strApp.togglePopper()
strApp.togglePopper()
strApp.togglePopper()
strApp.togglePopper()  // undefined
strApp.arr
