module.exports = { 
 //param A : string
 //param B : string
 //return an integer
    permuteStrings : function(A, B){
        var len=A.length;
        if(len!=B.length) return 0;
        var map={};
        for(let i=0;i<len;i++){
            if(!map[A[i]]) map[A[i]]=1;
            else map[A[i]]++;
            if(!map[B[i]]) map[B[i]]=-1;
            else map[B[i]]--;
        }
        //console.log(map);
        //console.log(map.length);
        for(let j in map){
            if(map[j]!=0) return 0;
        }
        return 1;

    }
};

