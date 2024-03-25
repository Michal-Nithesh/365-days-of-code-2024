// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
// YOUR CODE GOES HERE
let a = readLine().toLowerCase()
let i = 0;
let j = a.length-1;

while(i<j){
    if(a[i] === a[j]){
        i++;
        j--;
    }
    else{
        console.log("No");
        return;
    }
}
console.log("Yes")
