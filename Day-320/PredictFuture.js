function pow(num , p, mod) {
    if(p == 0) return 1n;
    let x = pow(num, Math.floor(p / 2), mod) % mod;
    x = (x * x) % mod;
    if(p & 1) {
        return (num * x) % mod;
    } else {
        return x;
    }
}

module.exports = { 
 //param A : integer
 //param B : integer
 //param C : integer
 //return a array of integers
    solve : function(A, B, C){
        // Observation based solution
        const mod = 1000000007n;
        A = BigInt(A);
        B = BigInt(B);
        let val1_1 = BigInt(((B - (2n * A) % mod) % mod + mod) % mod);
        let val1_2 = BigInt((((2n * B) % mod + A) % mod + mod) % mod);
        if(C == 1) {
            return [Number(val1_1 % mod), Number(val1_2 % mod)];
        }
        let val2_1 = ((val1_2 - (2n * val1_1) % mod) % mod + mod) % mod;
        let val2_2 = (((2n * val1_2) % mod + val1_1) % mod + mod) % mod;
        if(C == 2) {
            return [val2_1, val2_2];
        }
        
        if(C % 2 != 0) {
            let diff = Math.floor(C / 2);
            let power = pow(5n, diff, mod) % mod;
            let ret1 = (val1_1 * power) % mod;
            let ret2 = (val1_2 * power) % mod;
            return [ret1 % mod, ret2 % mod];
        } else {
            let diff = Math.floor((C - 1) / 2);
            let power = pow(5n, diff, mod) % mod;
            let ret1 = ((val2_1 * power) % mod) % mod;
            let ret2 = ((val2_2 * power) % mod) % mod;
            return [ret1 % mod, ret2 % mod];
        }

    }
};

