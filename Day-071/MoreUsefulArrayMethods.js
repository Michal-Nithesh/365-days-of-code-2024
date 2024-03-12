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
array_.sort((a,b) => a-b);
for(let i in array_){
    console.log(array_[i])
}
