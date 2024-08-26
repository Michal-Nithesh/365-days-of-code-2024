module.exports = { 
 //param A : integer
 //return an integer
	reverse : function(A){
        const INT_MAX = 2**31 - 1;
        const INT_MIN = -(2**31);

        
        let rev = 0;
        let sign = A > 0 ? 1 : -1;
        A = Math.abs(A);
        
        while(A !== 0) {
            let pop = A % 10;
            A = Math.floor(A / 10);
            
            if (rev > (INT_MAX - pop) / 10){
                return 0;
            }
            rev = rev * 10 + pop;
        }
        return sign * rev;
	}
};
