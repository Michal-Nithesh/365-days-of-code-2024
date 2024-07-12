module.exports = { 
 //param A : integer
 //return an integer
    climbStairs : function(A){
        var dp = [1];
        function f(n){
            if (n<0) return 0;
            if (n==0) return 1;
            if (!dp[n])
                dp[n] = f(n-2) + f(n-1);
            return dp[n];
        }
        return f(A);
    }
};

