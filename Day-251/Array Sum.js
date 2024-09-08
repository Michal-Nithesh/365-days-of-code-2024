module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //return a array of integers
    addArrays : function(A, B){
        let ans=[];
        let a=A.length,b=B.length;

//console.log(A[0],B[0]);
        if(a>=b){
            for(let i=0;i<a+1;i++){
            ans.push(0);
            }
            let sum=0,carry=0,rem=0;

            for(let i=a-1;i>=0;i--){
                if(i+b-a >= 0){
                    //console.log(A[i],B[i+b-a],carry)
                    sum=Number(A[i])+ Number(B[i+b-a]) + rem;
                    rem=Math.floor(sum/10);
                    carry= sum % 10;

                    ans[i+1]=carry;
                }
                else{
                    sum=Number(A[i])+rem;
                    rem=Math.floor(sum/10);
                    carry= sum % 10;

                    ans[i+1]=carry;
                }
            }
            ans[0]=rem;

        }
        else{
            for(let i=0;i<b+1;i++){
            ans.push(0);
            }
            let sum=0,carry=0,rem=0;

            for(let i=b-1;i>=0;i--){
                if(i+a-b >=0){
                    sum= Number(B[i])+ Number(A[i-b+a]) + rem;
                    rem=Math.floor(sum/10);
                    carry= sum % 10;

                    ans[i+1]=carry;
                }
                else{
                    sum=Number(B[i])+ rem;
                    rem=Math.floor(sum/10);
                    carry=sum % 10;

                    ans[i+1]=carry;
                }
            }
            ans[0]=rem;

        }
        if(ans[0]==0){
            ans.shift();
        }


        return ans;




    }
};

