module.exports = { 
 //param A : array of integers
 //return an integer
    perfectPeak : function(A){
        let max_val=0,flag=0,temp=0;

        for(let i=0;i<A.length;i++){
            if(A[i]>max_val){
                if(flag==0){
                    if(i !=0 && i!=A.length-1){
                    flag=1;
                    temp=A[i];
                    //console.log(temp);
                    }

                }
                max_val=A[i];    
            }
            else if(A[i]<=max_val){
                if(flag==1){
                    if(temp>=A[i]){
                        flag=0;
                    }
                }
            }

        }
        return flag;

    }
};

