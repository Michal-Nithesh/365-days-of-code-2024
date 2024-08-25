module.exports = { 
 //param A : array of integers
 //return a array of integers
    solve : function(A){
        let i=-1,j=0;
        while(j<A.length){
            if(A[j]!=0){
                i+=1;
                let temp=A[i];
                A[i]=A[j];
                A[j]=temp;
            }
            j+=1;
        }
        return A;

    }
};

