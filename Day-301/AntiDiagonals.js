module.exports = { 
 //param A : array of array of integers
 //return a array of array of integers
	diagonal : function(A){
        let n= A.length;
        let res = new Array(2*n-1).fill().map(()=> []);
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                let aoo = i+j;
                res[aoo].push(A[i][j]);
            }
        }
        return res;
    }
};
