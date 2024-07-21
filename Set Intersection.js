module.exports = { 
 //param A : array of array of integers
 //return an integer
    setIntersection : function(A){
        A.sort((x, y) => (x[0] - y[0]));
        A.sort((x, y) => (x[1] - y[1]));

        let res = [];
        let end = A[0][1];
        res.push(end - 1);
        res.push(end); 
        for(let i = 1; i < A.length; i++){
            const start = A[i][0];
            const end = A[i][1];
            const size = res.length;
            const last = res[size - 1];
            const secondLast = res[size - 2];
            if (start > last) {
                res.push(end - 1);
                res.push(end);
            } else if (start == last) {
                res.push(end);
            } else if (start > secondLast) {
                res.push(end);
            } 
        }
        return res.length
    }
};
