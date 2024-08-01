module.exports = { 
 //param A : integer
 //return an integer
	solve : function(A){
		if(A % 4 === 0 && A % 100 != 0){
			return 1
		} else if(A % 400 === 0) {
			return 1
		} else {
			return 0
		}
	}
};
