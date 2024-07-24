module.exports = { 
 //param A : array of integers
 //return an integer
	maxProfit : function(A){
		let profit = 0
		for(let i = 0; i < A.length; i++){
			if(A[i] > A[i-1]){
				profit += A[i] - A[i-1];
			}
		}
		return profit;
	}
};
