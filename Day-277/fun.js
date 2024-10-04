module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //return a array of integers
    intersect : function(A, B){
        if(A.length<B.length) [A,B] = [B,A];
        let ia = ib = 0;
        let res = [];
        while(ia<A.length && ib<B.length){
            while(A[ia]<B[ib] && ia<A.length) ia++;
            while(A[ia]>B[ib] && ib<B.length) ib++;
            if(A[ia] == B[ib]) {
                res.push(A[ia]);
                ia++;
                ib++;
            }
        }
        return res;
    }
};

