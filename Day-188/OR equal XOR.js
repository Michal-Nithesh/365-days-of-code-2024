module.exports = {
    //param A : integer
    //return an integer
    solve: function (A) {
        const MOD = 10**9 + 7;
        
        const expo = (a, b) => {
            let ans = 1n;
            while (b) {
                if (b & 1)
                    ans = (ans * BigInt(a)) % BigInt(MOD);
                a = (BigInt(a) * BigInt(a)) % BigInt(MOD);
                b >>= 1;
            }
            return Number(ans);
        }

        return expo(3, A);

    }
};

