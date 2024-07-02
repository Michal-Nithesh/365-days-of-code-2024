module.exports = { 
 //param A : integer
 //return a strings
	solve : function(A){
    let factorial = BigInt(1)
    while(A > 0) {
        factorial = factorial*BigInt(A);
        A--
    }
    return `${factorial}`;
    }
	};
