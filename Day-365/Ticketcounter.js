module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //return an integer
    solve : function(A, B){
    var n = A.length, t=0, ans=0;
        for(var i=0; i<n; i++)
        {
            if(t > A[i])
            {
                ans +=1;    
                continue;
            }
            t += B[i];
        }
        return ans;

    }
};

