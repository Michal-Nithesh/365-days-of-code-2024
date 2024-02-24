// DO NOT USE ARGUMENTS FOR INPUTS
// Input num valus is in variable *num*
var num = parseInt(readLine().trim());
// YOUR CODE GOES HERE
let N = 0;

while(N < num)
{
    N++;
    if(N % 2 === 0)
    continue;
console.log(N);
}
