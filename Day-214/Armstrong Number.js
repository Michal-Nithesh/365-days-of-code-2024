module.exports = { 
 //param A : integer
 //return an integer
    solve : function(A){
        let n = (`${A}`).split("").length;

        let s = 0;
        const t = A;
        while(A){
            const d =  A % 10;
            s += Math.pow(d, n);
            A  = parseInt(A / 10);
        }
        return Number(s == t);
    }
};

