module.exports = { 
 //param A : array of integers
 //return an integer
	singleNumber : function(A){
        return A.reduce( (xor, x) => xor ^ x, 0);
	}
};
