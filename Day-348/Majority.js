module.exports = { 
 //param A : array of integers
 //return an integer
	majorityElement : function(A){
		const shouldAppear = Math.floor(A.length/2);
		const countObject = {};
		for(let i = 0; i < A.length; i++){
			if(!countObject[A[i]]){
				countObject[A[i]] = 1;
			} else {
				countObject[A[i]] += 1;
			}
		}
		for(keys in countObject){
			if(countObject[keys] > shouldAppear){
				return keys;
			}
		}
	}
};
