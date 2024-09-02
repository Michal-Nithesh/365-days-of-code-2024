module.exports = { 
    //param a : integer
    //return a list of integers
    getRow : function(a) {
        var pt = [];
        var i = a;
        while (i-- >= 0)
            pt.push(0);
        pt[0] = 1;

        i = 0;
        while (++i <= a) {
            var prev = 0;
            var j = -1;
            while (pt[++j]) {
                var tmp = pt[j];
                pt[j] = pt[j] + prev;
                prev = tmp;
            }
            pt[j] = pt[j] + prev;
        }

        return pt;
    }
};
