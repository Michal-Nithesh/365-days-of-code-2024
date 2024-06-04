module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //return an integer
	coverPoints : function(A, B){
        const n = A.length;
        let TStep = 0;
        for (let i = 0; i < n - 1; i++) {
        const dx = Math.abs(A[i + 1] - A[i]);
        const dy = Math.abs(B[i + 1] - B[i]);
        TStep += Math.max(dx, dy);
	}
    return TStep
}
};
