module.exports = { 
 //param A : string
 //return an integer
	lengthOfLastWord : function(A){
		let count = 0;
		let i = A.length;
		while(A[i--] === ' ');
		while(i > -1 && A[i--] !== ' ') count++;
		return count;
	}
};
