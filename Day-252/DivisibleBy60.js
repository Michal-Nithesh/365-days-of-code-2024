module.exports = { 
 //param A : array of integers
 //return an integer
    divisibleBy60 : function(A){
        if(A.length===1 && A[0]===BigInt(0)) return 1;
        var len=A.length;
        var even=false,zero=false,sum=BigInt(0);
        for(let i=0;i<len;i++){
            sum+=A[i];
            if(A[i]===BigInt(0)) zero=true;
            else if(A[i]%BigInt(2)===BigInt(0)) even=true;
        }
        if(sum%BigInt(3)==0 && zero==true && even==true) return 1;
        else return 0;
    }
};


