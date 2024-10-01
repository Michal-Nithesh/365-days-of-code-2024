// keep two arrays one for current row one for previous

// value(i, j) = min(val(i-1, j), val(i, j-1))

module.exports = { 
	//param A : array of array of integers
	//return an integer
	minPathSum : function(A){ // [[1 0] [0 1]]
        var previous = Array(A[0].length); // [1, 1]
        var current = Array(A[0].length); // [1, 1]
        for (var i = 0; i < A.length; i++) {
            for (var j=0; j < current.length; j++) {
                if (j === 0 && i === 0) {
                    current[j] = A[0][0];
                } else if (i === 0) {
                    current[j] = A[i][j] + current[j - 1];
                } else if (j === 0) {
                    current[j] = A[i][j] + previous[j];
                } else {
                    current[j] = A[i][j] + Math.min(current[j - 1], previous[j]);
                }
            }
            previous  = current.slice(0, current.length);
        }
        
        return current[current.length - 1];
        
	}
};

