// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
// YOUR CODE GOES HERE
const A = readLine().trim();
function recursion(A){
if(A <= 1) return A;
return (recursion(A -2) + recursion(A - 1));
}
console.log(recursion(A))
