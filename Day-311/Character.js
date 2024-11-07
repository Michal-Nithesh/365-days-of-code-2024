module.exports = { 
 //param A : string
 //return a array of integers
    solve : function(A){
        const map = new Map();
        const result = [];

        for (let i = 0; i<A.length; i++) {
            const x = map.get(A[i]);
            if (x || x ==0) {
                result[x] = result[x]+1;
            } else {
                result.push(1);
                map.set(A[i], result.length - 1);
            }
        }
        return result;
    }
};

