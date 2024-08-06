module.exports = { 
 //param A : array of integers
 //return an integer
    solve : function(A){
        socks={};
        for(let i=0;i<A.length;i++){
            if(socks[A[i]]) socks[A[i]]++;
            else socks[A[i]]=1;
        }
        let ans=0;
        for(let key in socks){
            ans+=parseInt(socks[key]/2);
        }
        return ans;
    }
};

