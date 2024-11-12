module.exports = { 
 //param A : integer
 //param B : integer
 //return a long integers
    solve : function(A, B){
        let min = BigInt( Math.min(A, B));
        let max = BigInt(Math.max(A, B));
       
        const sum = (x) => {
            const n = ( BigInt(x) / BigInt(7));
            return BigInt(7) *( n * (n + BigInt(1)) )/ BigInt(2);
        }
       
        return  sum(max) - sum(min-BigInt(1));
    }
};

