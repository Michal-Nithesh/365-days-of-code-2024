module.exports = { 
 //param A : integer
 //return an integer
    solve : function(A){
      A = Math.abs(A);
      let num = 0;
      let steps = 0;
      if(A == 0) return 0
      while(num < A || (num - A) % 2 != 0) {
          num += steps;
          steps++;
      }
      return steps-1;
     
    }
};

