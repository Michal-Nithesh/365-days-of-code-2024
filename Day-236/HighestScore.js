module.exports = { 
 //param A : array of array of strings
 //return an integer
    highestScore : function(A){
B = {};
A.forEach(x =>{
    if(!B.hasOwnProperty(x[0])) B[x[0]] = [];
    
    B[x[0]].push(x[1]);
});
    let result = 0;
    for(x of Object.keys(B)){
        let sum = 0;
        for(let i = 0; i < B[x].length; i++){
            sum+= parseInt(B[x][i]);
        }
        let currentAvg = Math.floor(sum / B[x].length);
        if(currentAvg > result) result = currentAvg;
    }
    return result;
    }
};

