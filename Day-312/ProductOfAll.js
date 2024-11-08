module.exports = { 
 //param A : array of integers
 //return a array of integers
    solve : function(A){
        let mod = BigInt(1e9+7);
        let n = A.length;

        let p = new Array(n);
        let s = new Array(n);
        p[0] = 1;
        s[n-1] = 1;

        for(let i = 1; i < n; i++){
            p[i] = (BigInt(p[i-1]) * (A[i-1])) % BigInt(mod);
        }

        for(let i = n-2; i >=0; i--){
            s[i] = (BigInt(s[i+1]) * (A[i+1])) % BigInt(mod);
        }

        let ans = new Array(n);
        for(let i = 0; i < n; i++){
            ans[i] = (BigInt(p[i]) * BigInt(s[i])) % BigInt(mod)
        }

        return ans;
    }
};

