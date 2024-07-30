module.exports = { 
 //param A : integer
 //param B : integer
 //return a long integers
	solve : function(A, B){
        while(B > 1){
            if(A % 2 != 0){
                A = 3 * A + 1
            } else {
                A = A/2
            }
            B -= 1
        }
        return A
	}
};
