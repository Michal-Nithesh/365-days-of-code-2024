module.exports = { 
 //param A : integer
 //return an integer
    solve : function(A){
        let ans = 0;
        
        while(A & 1 ^ 1){
            ans += 1
            A >>=1
        }
        
        return ans
    }
};

