module.exports = { 
 //param A : array of integers
 //param B : integer
 //return a array of integers
	twoSum : function(A, B){
		let map = {};
		for(let i = 0; i < A.length; i++){
			let element = B - A[i];
			if(map[element]){
				return [map[element], i+1]
			} else {
				if(!map[A[i]]){
					map[A[i]] = i + 1;
				}
			}
		}
		return [];
	}
};
