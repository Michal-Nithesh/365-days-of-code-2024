// DO NOT USE ARGUMENTS FOR INPUTS
// Vaiable size_ is the size of input array.
// Variable array_ stores all the array elements
var size_ = parseInt(readLine().trim());
var array_ = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    array_.push(x);
}
// YOUR CODE GOES HERE
var new_arr = [];  


for (var i = 0; i < array_.length; i++) {


    // push items based in old array + i 
    new_arr.push(array_[i] + i);  

} 

// Based on New array's length - print each new array's element
for (var i = 0; i < new_arr.length; i++) {

    console.log(new_arr[i]);
}
