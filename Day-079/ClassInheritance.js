// Example - 1
class A{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }   
}

let x = readLine();
let y = readLine();
let z = readLine();

class B extends A {
    constructor(x,y,z){
        super(x,y)
        this.z = z;
    }
    printIB(){
        console.log("IB")
    }
}

const objA = new A(x,y)
const objC = new B(objA.x,objA.y,z)

console.log(objC.x);
console.log(objC.y);
console.log(objC.z);
objC.printIB()

// Example - 2
class X {
    constructor(a, b) {
        this.a = a;  
        this.b = b;
    }
    printHi() {
        console.log("Hi");
    }
}

class Y extends X { //Y is a subclass of X
    constructor(a, b, c) {
        super(a, b);  //refers to the constructor of parent class X
        this.c = c;   //c is exclusive to Class Y only.
    }
    printHello() {    //printHello is exclusive to class Y only.
        console.log("Hello");
    }
}

const x1 = new X(1, 2);  //x1 contains properties: a, b, printHi
console.log(x1.a);
console.log(x1.b);
console.log(x1.printHi());


const y1 = new Y("a", "b", "c");  //y1 contains properties: a, b, printHi, c, printHello
console.log(y1.a);
console.log(y1.b);
console.log(y1.c);
console.log(y1.printHi());
console.log(y1.printHello());
