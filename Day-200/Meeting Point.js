module.exports = { 
 //param A : array of array of integers
 //return an integer
	solve : function(A){
        A.sort((a, b) => {
            if(a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        });
        let p1 = A[0];
        A.sort((a, b) => {
            if(a[1] === b[1]) return a[0] -b[0];
            return a[1] - b[1];
        });
        let p2 = A[0];
        return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
	}
};
