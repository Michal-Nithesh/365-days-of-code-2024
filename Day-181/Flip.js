module.exports = { 
 //param A : string
 //return a array of integers
	flip : function(A){
        let max = 0;
        let curr = 0;
        let left = 0, right = 0, al = 0;
        for(let i = 0; i < A.length; i++){
            A[i] == 1 ? curr-- : curr++;
            if(curr < 0){
                curr = 0;
                left = i + 1;
            }
            if(curr > max){
                max = curr;
                right = i + 1;
                al = left + 1;
            }
        }
        return right == 0 ? [] : [al, right]
	}
};
