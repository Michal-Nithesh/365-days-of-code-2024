module.exports = { 
 //param A : array of integers
 //return an integer
    repeatedNumber : function(A){
        const mainSqrt = Math.sqrt(A.length);
        const sqrtArr = Array(Math.ceil(mainSqrt)).fill(0);
        for(let i=0; i<A.length; i++) {
            const currSqrt = Math.sqrt(A[i]);
            sqrtArr[Math.floor(currSqrt/mainSqrt)]++;
        }
        let dupIndex = -1;
        for(let i=1; i<=sqrtArr.length; i++){
            if(sqrtArr[i-1] > mainSqrt*i) {
                dupIndex = i-1;
                break;
            }
        }
        if(dupIndex == -1) { // can't happen...
            return -1;
        }
        const dupSet = new Set();
        for(let i=0; i<A.length; i++) {
            const currSqrt = Math.sqrt(A[i]);
            if(currSqrt >= mainSqrt*dupIndex &&
                currSqrt <= mainSqrt*(dupIndex+1)) {
                if(dupSet.has(A[i])) {
                    return A[i];
                }
                dupSet.add(A[i]);
            }
        }
    }
};

