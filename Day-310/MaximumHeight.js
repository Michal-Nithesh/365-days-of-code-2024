module.exports = { 
 //param A : integer
 //return an integer
    solve : function(A){
      
      return Math.floor( (-1 + Math.sqrt(1 + (8 * A))) / 2);

    }
};

