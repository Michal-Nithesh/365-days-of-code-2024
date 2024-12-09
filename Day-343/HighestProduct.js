module.exports = { 
    //param a : array of integers
    //return an integer
	maxp3 : function(a){
	    var compareNum = function(a,b){
	        a = parseInt(a); b = parseInt(b);
	        if(a<b)return-1;
	        if(a===b) return 0; return 1;
	    }
	    var sorted = a.sort(compareNum);
	    var len = sorted.length;
	    var topThree = sorted[len-1]*sorted[len-2]*sorted[len-3];
	    var topAndBotTwo = sorted[len-1]*sorted[0]*sorted[1];
	    return Math.max(topThree,topAndBotTwo);
	}
};
