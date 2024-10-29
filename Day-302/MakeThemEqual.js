module.exports = { 
 //param A : array of integers
 //return an integer
    solve : function(A){
        let n = A.length;
        let min = A[0];

        for (let i = 1; i < n; i++) {
            let b= A[i];
            while(min!=b){
                if(min>b){
                    min>>=1;
                }else{
                    b>>=1;
                }
            }
        }

        let count = 0;
        for (let i = 0; i < n; i++) {
            if (A[i] == min) {
                continue;
            }
            while (min != A[i]) {
                count++;
                A[i] >>= 1;
            }
        }
        return count;
    }
};

