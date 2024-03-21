// Example 1
class Shape{
    area() {
        // YOUR CODE GOES HERE
        return 0
    }
    print() {
        console.log("This is a shape.");
    }
}

class Square extends Shape{
    constructor(s) {
        super();
        this.s = s;
    }
    area(){
        // YOUR CODE GOES HERE
        return this.s * this.s
    }
}

class Rectangle extends Shape{
    constructor(l, b) {
        super();
        this.l = l;
        this.b = b;
    }

    area() {
       // YOUR CODE GOES HERE 
       return this.l * this.b
}
}

const shape = new Shape();
const square = new Square();
const rectangle = new Rectangle();

// Example 2
class Person {
  constructor(name) {
    this.name = name
  }

  Hi() {
      console.log("Hi, My name is " + this.name + ".");
  }
}

class Student extends Person{
    constructor(name) {
        super(name);
    }
    Hi() {
        console.log("Hi, My name is " + this.name + ". I am a student.");
    }
}

const p1 = new Person("Alex");
p1.Hi() //prints "Hi, My name is Alex."
const s1 = new Student("Mark");
s1.Hi() //prints "Hi, My name is Mark. I am a student."
