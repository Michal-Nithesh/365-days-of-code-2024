module.exports = { 
 //param A : array of integers
 //param B : integer
 //param C : integer
 //return an integer
    solve : function(A, B, C){
        let d = 0;
        let day = 0;
        if(B%2 === 0) {
            day = 1;
        }
        for( let i = 0; i < A.length; i++) {
            if(parseInt(A[i])%2 === day) {
                d= d+1;
            }
        }
    return d*C
    }
};

