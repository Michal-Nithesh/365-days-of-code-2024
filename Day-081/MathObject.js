// Some static properties of Math:

// Math.E : Euler's constant and the base of natural logarithms; approximately 2.718.
// Math.LN2 : Natural logarithm of 2; approximately 0.693.
// Math.LN10 : Natural logarithm of 10; approximately 2.303.
// Math.LOG2E : Base-2 logarithm of E; approximately 1.443.
// Math.LOG10E : Base-10 logarithm of E; approximately 0.434.
// Math.PI : Ratio of the a circle's circumference to its diameter; approximately 3.14159.
// Math.SQRT2 : Square root of 2; approximately 1.414.

// Some static methods of Math:

// Math.abs(x) : Returns the absolute value of x.
// Math.cbrt(x) : Returns the cube root of x.
// Math.ceil(x) : Returns the smallest integer greater than or equal to x.
// Math.exp(x) : Returns Ex, where x is the argument, and E is Euler's constant (2.718…, the base of the natural logarithm).
// Math.floor(x) : Returns the largest integer less than or equal to x.
// Math.log(x) : Returns the natural logarithm (loge; also, ㏑) of x.
// Math.max([x[, y[, …]]]) : Returns the largest of zero or more numbers.
// Math.min([x[, y[, …]]]) : Returns the smallest of zero or more numbers.
// Math.pow(x, y) : Returns base x to the exponent power y (i.e, xy).
// Math.random() : Returns a pseudo-random number between 0 and 1.
// Math.round(x) : Returns the value of the number x rounded to the nearest integer.
// Math.sqrt(x) : Returns the positive square root of x.
// Math.trunc(x) : Returns the integer portion of x, removing any fractional digits.

// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
// YOUR CODE GOES HERE
const a = parseInt(readLine())
const volume = Math.ceil((4*Math.PI*Math.pow(a,3))/3)

console.log(volume)
