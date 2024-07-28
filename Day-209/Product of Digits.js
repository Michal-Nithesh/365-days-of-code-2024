module.exports = { 
 //param A : integer
 //return an integera
	solve : function(A){
		let num = A.toString();
		let ans = 1;
		for(let i = 0; i < num.length; i++){
			let integer = parseInt(num[i])
			ans *= integer;
		}
		return ans
	}
};
