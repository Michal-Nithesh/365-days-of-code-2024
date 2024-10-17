module.exports = { 
 //param A : integer
 //return an integer
    sqrt : function(A){
        if(A == 0 || A == 1) {
            return A;
        }
        
        let lo = 0;
        let hi = A;
        let mid;
        while (hi - lo > 1) {
            mid = lo + Math.floor((hi-lo)/2);
            if (mid**2 == A) {
                return mid
            } else if (mid**2 > A ) {
                hi = mid
            } else {
                lo = mid
            }
        }
        
        return Math.floor(lo);

    }
};

