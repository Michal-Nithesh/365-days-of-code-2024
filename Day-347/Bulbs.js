module.exports = { 
	//param A : array of integers
	//return an integer
	bulbs : function(A){
	    var ans=0;
	    var state=0;
        for(var i=0;i<A.length;i++){
            if(A[i]==state){
            ans++;
            state=1-state;}
        }
        return ans;
	}
};
