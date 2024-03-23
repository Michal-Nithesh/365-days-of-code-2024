// Module - 1
// this binding
 function fun() {
       console.log(this);
 }
 fun(); // prints global object (window) 
During a method invocation the value of this is the object owning the method:

 const obj = {
  fun() {
    console.log(this);
  }
};
obj.fun(); // prints obj 
// The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

// In the following example, fun1() is an outer regular function of fun2() arrow function:

const obj = {
  fun1(items) {
    console.log(this); // prints obj
    const fun2 = () => {
      console.log(this); // prints obj
   };
  }
};
// this value inside the arrow function fun2() equals to this value of the outer function fun1().

// Module - 2
// arguments object
// Inside the body of a regular function, arguments is a special array-like object containing the list of arguments with which the function has been invoked.

function fun() {
  console.log(arguments);
}

myFunction('a', 'b'); // prints { 0: 'a', 1: 'b'}
// No arguments object is defined inside an arrow function.

// The arguments object is resolved lexically: the arrow function accesses arguments from the closest outer non-arrow function.

function fun1() {
  const fun2 = () => {
    console.log(arguments);
  }

  fun2('c', 'd');
}

fun1('a', 'b'); // prints { 0: 'a', 1: 'b' }

// Module - 3
// new keyword
// Regular functions created using function declarations or expressions are constructible (means that we can use regular functions as constructors) and callable. And since regular functions are constructible, they can be called using the new keyword.

function fun(){
    console.log("hello");
}
const obj = new fun(); //valid code
// The arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be called with the new keyword.

let fun = () => {
   console.log("hello);
}
const obj = new fun(): // Gives error
// Find the output for the given code below.

let obj = {
    a: 100,
    fun1() {
        let a = 20;
        let fun2 = () => {
            console.log(this.a);
        }
        fun2();
    }
}

obj.fun1();
