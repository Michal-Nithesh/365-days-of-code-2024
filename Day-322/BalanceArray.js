module.exports = { 
 //param A : array of integers
 //return an integer
    solve : function(A){
    // console.log(A);
    
    if(A.length==0) return 0;
    if(A.length==1) return 1;

    let odd=0,even=0;
    let oddSum=[],evenSum=[];
    for (let i = 0; i < A.length; i++) {
        
        if((i+1)%2)
        {
            odd+=A[i];
            oddSum[i]=odd;
            evenSum[i]=even;
        }
        else
        {
            even+=A[i];
            oddSum[i]=odd;
            evenSum[i]=even;
        }
    }
    // console.log(oddSum,evenSum);

    let result=0;

    for (let i = 0; i < A.length; i++) {
        if((i+1)%2)
        {
            if(oddSum[i]-A[i]+even-evenSum[i]==evenSum[i]+odd-oddSum[i]) result++;
        }
        else
        {
            if(oddSum[i]+even-evenSum[i]==evenSum[i]-A[i]+odd-oddSum[i]) result++;
        }
        
    }

    return result;
    }
};

