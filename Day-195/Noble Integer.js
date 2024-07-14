module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
		A.sort()
		let n = A.length
		for(let i = 0; i < n; i++){
			if(A[i] === (n - i - 1)){
				if(i === n -1 || A[i] != A[i + 1]){
					return 1
				}
			}
		}
		return -1
	}
};
