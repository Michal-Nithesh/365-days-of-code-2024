module.exports = { 
 //param A : integer
 //return an integer
	solve : function(A){
		let K = Math.floor(Math.log(A)/Math.log(2))+1;
		let mask = (1 << K) - 1
		return A ^ mask;
	}
};
