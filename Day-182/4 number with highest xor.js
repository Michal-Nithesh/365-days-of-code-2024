module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
        let ans = Number.MIN_SAFE_INTEGER;
        for(let i = 0; i < A.length - 3; i++){
            for(let j = i + 1; j < A.length - 2; j++){
                for(let k = j + 1; k < A.length; k++){
                    for(let l = k + 1; l < A.length; l++){
                        let toCheck = A[i] ^ A[j] ^ A[k] ^ A[l];
                        ans = Math.max(ans, toCheck);
                    }
                }
            }
        }
        return ans;
	}
};
