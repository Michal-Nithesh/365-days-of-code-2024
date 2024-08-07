module.exports = { 
 //param A : integer
 //return an integer
	solve : function(A){
		let mod = 1000000007;
		let ans = 2;
		for(let i = 2; i <= A; i++){
			ans *= i;
			ans = ans % mod;
		}
		return ans
	}
};
