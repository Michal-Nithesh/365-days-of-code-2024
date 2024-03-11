// DO NOT USE ARGUMENTS FOR INPUTS
// Variable A and B are input arrays.
// You have to just update A and B and make new ans array and print it's elements.
var size1 = parseInt(readLine().trim());
var A = []
for(var i = 0 ; i < size1; i++ ){
    var x = parseInt(readLine().trim());
    A.push(x);
}
var size2 = parseInt(readLine().trim());
var B = []
for(var i = 0 ; i < size2; i++ ){
    var x = parseInt(readLine().trim());
    B.push(x);
}
// YOUR CODE GOES HERE
var firstElementOfA = A.shift();
B.push(firstElementOfA);

// Append both arrays
var mergedArray = A.concat(B);

// Print the elements of the merged array
for (var i = 0; i < mergedArray.length; i++) {
console.log(mergedArray[i]);
}
