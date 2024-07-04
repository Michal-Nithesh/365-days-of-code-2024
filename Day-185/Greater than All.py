module.exports = { 
 //param A : array of integers
 //return an integer
    solve : function(A){
           let count = 1;
           let max = A[0];
           for (let i = 1; i< A.length; i++){
                if(A[i] > A[i-1] && A[i] > max){
                    count++;
                    max = A[i];
                }
           }
           return count;
    }
};

