module.exports = { 
 //param A : integer
 //param B : integer
 //return an integer
    solve : function(A, B){
        const mod = BigInt(10**9 + 7);
        
        const modInverse = (b, mod) => {
            return modExponent(b, mod - 2n, mod);
        }
        
        const modExponent = (base, exponent, mod) => {
            let result = 1n;
            base %= mod;
            while(exponent > 0){
                if(exponent % 2n === 1n){
                    result = (result * base) % mod;
                }
                exponent = (exponent/2n);
                base = (base * base) % mod;
            }
            
            return result;
        }
        
        A = BigInt(A);
        B = BigInt(B);
        let x = (A * B - A + 1n)% mod;
        let y = B;
        const y_inverse = modInverse(y, mod);
        const ans = (x * y_inverse) % mod;
        return Number(ans);

    }
};

