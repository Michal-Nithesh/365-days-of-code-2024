module.exports = { 
 //param A : integer
 //return an integer
    solve : function(A){
            
            if(A < 3)
                return 0;

            let count = 0;
            for(let i = 1; i <= A - 2; i++) {

                for(let j = i + 1; j <= A - 1; j++) {

                    for(let k = j + 1; k <= A; k++) {
                        if((k * k) > ((i * i) + (j * j))) {
                            break;
                        }
                        else if((k * k) == ((i * i) + (j * j))) {
                            count++;
                            break;
                        }
                    }
                }
            }

            return count;
    }
};

