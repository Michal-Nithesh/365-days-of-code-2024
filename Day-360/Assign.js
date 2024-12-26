module.exports = { 
    //param a : array of integers
    //param b : array of integers
    //return an integer
	mice : function(a, b){
	   // a = a.map(function(str){return parseInt(str)});
	    // b = b.map(function(str){return parseInt(str)});
	    var compareNum = function(l,r){
	        l = parseInt(l);
	        r = parseInt(r);
	        if(l<r)return -1;
	        if(l===r)return 0;
	        return 1;
	    }
	    
        var aSorted = a.sort(compareNum);
        var bSorted = b.sort(compareNum);

        var max = aSorted.reduce(function(acc,curr,index){
            var dist = Math.abs(aSorted[index]-bSorted[index]);
            return Math.max(acc,dist);
        },0);
        return max;
	}
};
