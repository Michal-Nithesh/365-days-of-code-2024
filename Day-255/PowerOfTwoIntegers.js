module.exports = { 
 //param A : integer
 //return an integer
	isPower : function(A){
		if(A == 1) return 1;
		for(let i = 2; i * i <= A; i++){
			let j = 1;
			let limit = Math.pow(i, j);
			while(limit <= A){
				if(limit === A){
					return 1;
				}
				j++;
				limit = Math.pow(i, j);
			}
		}
		return 0;
	}
};
module.exports = { 
 //param A : integer
 //return an integer
	isPower : function(A){
		if(A == 1) return 1;
		for(let i = 2; i * i <= A; i++){
			let j = 1;
			let limit = Math.pow(i, j);
			while(limit <= A){
				if(limit === A){
					return 1;
				}
				j++;
				limit = Math.pow(i, j);
			}
		}
		return 0;
	}
};
