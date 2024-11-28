module.exports = { 
 //param A : array of strings
 //return a strings
    serialize : function(A){
        let ans='';
        for(let i=0;i<A.length;i++){
            ans+=A[i];
            ans+=A[i].length;
            ans+='~';

        }
        return ans;

    }
};

