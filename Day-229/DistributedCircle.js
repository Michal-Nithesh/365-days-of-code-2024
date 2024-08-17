module.exports = { 
 //param A : integer
 //param B : integer
 //param C : integer
 //return an integer
	solve : function(A, B, C){
		return (A + C - 1) % B;
	}
};
