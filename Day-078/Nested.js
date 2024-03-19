//Model - 1
function hypotenuse(a, b) {
   function square(x) { return x*x; }
   return Math.sqrt(square(a) + square(b));
 }
var result = hypotenuse(1,2);

// Model - 2
function fun1(a) { 
 function fun2(b) { 
   return a + b; 
 } 
 return fun2; 
} 
var x = fun1("Adarsh") (" Chaudhary");

// Model - 3
function fun1(a) {
  a *= 2;
  function fun2(b) {
    return a + b; 
  } 
  a += 2;
  return fun2; 
}

function fun3(){
  return fun1(2) (2);
}

console.log(fun3());
