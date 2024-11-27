module.exports = { 
 //param A : array of strings
 //return a array of strings
    reorderLogs : function(A){

        let unchanged=[], changed=[];

        for(let i=0;i<A.length;i++){
            let temp= A[i].indexOf("-");

            if(A[i][temp+1]=='0' || A[i][temp+1]=='1' || A[i][temp+1]=='2' ||A[i][temp+1]=='3' || A[i][temp+1]=='4'||A[i][temp+1]=='5' || A[i][temp+1]=='6' || A[i][temp+1]=='7' || A[i][temp+1]=='8' || A[i][temp+1]=='9'){
                unchanged.push(A[i]);
            }
            else{
                changed.push(A[i]);
            }
        }

        changed.sort(function(a, b){
            let x = a.slice(a.indexOf("-"));
            let y = b.slice(b.indexOf("-"));
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
            })
        
        let ans= changed.concat(unchanged);
        return ans;


    }
};

