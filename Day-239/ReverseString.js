module.exports = { 
 //param A : string
 //return a strings
	reverseString : function(A){
		let charArray = A.split('');
		charArray.reverse();
		let reversedString = charArray.join('');
		return reversedString;
	}
};
