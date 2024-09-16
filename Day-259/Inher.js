// Parent class
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return `I have a ${this.carname}`;
  }
}

// Child class
class Model extends Car {
  constructor(brand, mod) {
    super(brand); // Call the parent class constructor
    this.model = mod;
  }
  show() {
    return `${this.present()}, it is a ${this.model}`;
  }
}

// Creating an instance of the child class
let myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); // Output: I have a Ford, it is a Mustang
