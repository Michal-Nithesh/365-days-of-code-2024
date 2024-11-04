module.exports = { 
 //param A : string
 //param B : integer
 //return a strings
    solve : function(A, B){
        if (B===1) return ''
        let res = ''
        for(let i=0;i<A.length;i++){
            let flag = false
            for(let j=i+1;j<i+B;j++){
                if(i===A.length || A[i]!==A[j]){
                    flag=true
                    break;
                }
            }
            if(flag) {
                res+=A[i]
            }else{
                i+=B-1
            }
        }
        return res
    }
};

