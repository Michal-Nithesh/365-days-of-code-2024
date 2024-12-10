module.exports = { 
 //param A : string
 //return an integer
    solve : function(A){
        let bal = 0;
        for(const c of A){
            c==='(' ? bal++ : bal--;
            if(bal<0){
                return 0;
            }
        }
        return bal===0 ? 1 : 0;
    }
};

