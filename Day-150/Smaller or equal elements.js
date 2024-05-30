module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	solve : function(A, B){
       var len=A.length-1;
       var ans=A.length;
        var st=0,en=len;
        if(A[st]>B) return 0;
        while(st<=en){
            var mid=Math.floor(st+(en-st)/2);
            if(A[mid]<=B) {
                st=mid+1;
                ans=mid+1;
                }
            else en=mid-1;
        }
        return ans;
	}
};
