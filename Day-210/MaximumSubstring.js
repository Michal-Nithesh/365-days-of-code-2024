module.exports = { 
 //param A : string
 //param B : integer
 //return an integer
    solve : function(A, B){
        let maxCount = 0;
        for (let i = 0; i < A.length; i += B) {
            const currStr = A.substring(i, i + B);
            let currCount = 0;
            [...currStr].forEach(c => currCount += c === 'a' ? 1 : 0);
            maxCount = Math.max(maxCount, currCount);
        }

        return maxCount;
    }
}
