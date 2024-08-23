module.exports = { 
 //param A : array of integers
 //return a array of integers
    solve : function(A){
        //The fastest algo would be to swap the numbers, which will,in worst case too,
        //always be better than counting all 0s and then
        //making those number of elements 0, while rest are made 1.
        //Swap only those 'Zeroes' which are encountered after 'Ones' are encountered.
        let oneOccured = false;
        let lastZeroPlace = -1;
        for (var i=0; i<A.length; i++) {
            let currentElem = A[i];
            if (A[i] == 1) {
                oneOccured = true;
            }
            else if (A[i] == 0) {
                if (oneOccured == true) {
                    //swap the numbers
                    A[lastZeroPlace + 1] = 0;
                    A[i] = 1;
                }
                lastZeroPlace++;
            }
        }
        return A;
    }
};

