module.exports = {
 //param A : array of integers
 //return a array of integers
    solve : function(A){
        let countPositive=0
        let countNegative=0
        for(let i=0;i<A.length;i++){
            if(A[i]>0){countPositive++}
            else if(A[i]<0){countNegative++}
        }
        let res=[]
        res.push(countPositive,countNegative)
        return res
    }
};
