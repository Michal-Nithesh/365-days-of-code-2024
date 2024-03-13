// DO NOT USE ARGUMENTS FOR INPUTS
// Vaiable size_ is the size of input array.
// Variable A stores all the array elements
var size_ = parseInt(readLine().trim());
var A = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    A.push(x);
}
// YOUR CODE GOES HERE
let B=[];
for (let i = 0; i < A.length; i++) {
    B[i]=A[i]*2;
}
let C=[];
for(let i=0;i<B.length;i++){
    if(B[i]%8===0){
        if(!C[i]){C[i]=0}
        C[i]+=B[i];
        console.log(C[i]);
    }
}
