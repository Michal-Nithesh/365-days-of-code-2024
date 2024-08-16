module.exports = { 
 //param A : integer
 //param B : integer
 //param C : integer
 //param D : integer
 //return an integer
	solve : function(A, B, C, D){
		if(A === B && C === D){
			return 1
		} else {
			return 0
		}
	}
};
