module.exports = { 
    //param A : array of integers
    //return a array of integers
    wave : function(A){
        A.sort((a, b) => a - b); // Sort the array in ascending order
        for(let i = 1; i < A.length; i += 2){ // Correct the loop condition
            let temp = A[i];
            A[i] = A[i - 1];
            A[i - 1] = temp;
        }
        return A; // Return the array after the loop
    }
};
