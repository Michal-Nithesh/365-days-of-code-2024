module.exports = { 
    //param A : array of integers
    //return an integer
    removeDuplicates : function(A){
        let len=0;
        let i=0;
        while(i < A.length)
        {
            A[len++]=A[i++];
            while(i< A.length && A[i]===A[i-1]) i++;
        }
         return len
    }
};

