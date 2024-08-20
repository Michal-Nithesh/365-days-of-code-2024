module.exports = { 
    //param A : string
    //return an integer
    titleToNumber : function(A){
        let ans = 0;
        for(let i = 0; i < A.length; i++){
            ans = ans * 26 + (A.charCodeAt(i) - 64);
        }
        return ans;
    }
};
