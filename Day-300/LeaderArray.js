module.exports = { 
 //param A : array of integers
 //return a array of integers
    solve : function(A){
    let C=[A[A.length-1]];
    for (let i = A.length-2; i >-1; i--) {
        if(A[i]>C[C.length-1]) C.push(A[i]);
    }
    C.reverse();
    return C;
    }
};

