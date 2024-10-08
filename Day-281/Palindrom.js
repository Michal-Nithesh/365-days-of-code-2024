module.exports = { 
	//param A : string
	//return an integer
	isPalindrome : function(A){
        var str = A.toLowerCase().replace(/\W+/g,'');
        var len = str.length
        for (var i=0; i<len; i++) {
            if (str[i] !== str[len-1-i]) {
                return 0;
            }
        }
        return 1;
	}
};

