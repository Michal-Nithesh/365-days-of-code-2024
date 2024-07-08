module.exports = { 
 //param A : integer
 //return an integer
    solve : function(A){
        let bulbs = Math.floor(A/6)*2;
        switch (A%6) {
            case 1:
                bulbs += 1; // x
                break;
            case 2:
            case 3:
            case 4:
            case 5:
                bulbs += 2; // x x x x
                break;
        }
        return bulbs;
    }
};

