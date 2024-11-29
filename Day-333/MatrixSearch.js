module.exports = { 
    //param A : array of array of integers
    //param B : integer
    //return an integer
    searchMatrix : function(A, B){
        var r = A.length;
        if (r === 0) {
            return 0;
        }
        var c = A[0].length;
        if (c === 0) {
            return 0;
        }
    
        var l = 0;
        var h = r * c - 1;
        var m, v;
    
        var get = function(n) {
            var row = parseInt(n / c, 10);
            var col = n % c;
            return A[row][col];
        };
    
        while (l <= h) {
            m = l + parseInt((h - l) / 2);
            v = get(m);
            if (v === B) {
                return 1;
            }
            if (v < B) {
                l = m + 1;
            } else {
                h = m - 1;
            }
        }
        return 0;
    }
};

