module.exports = {
 //param A : array of integers
 //return an integer
    solve : function(A){
        let a = null;
       
        a = A.sort((a,b) => {
            if(a>b){
                return 1;
            }
            if(a<b){
                return -1;
            }
            if(a==b){
                return 0;
            }
        });
       
        return a[0]+a[a.length-1];        
    }
};
