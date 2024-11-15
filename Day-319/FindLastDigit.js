module.exports = { 
 //param A : string
 //param B : string
 //return an integer
    solve : function(A, B){
        function find(x, y) {
    if (x === 0 || x === 5 || x === 6) return x;
    if (x === 4 || x === 9) {
      y = BigInt(y);
      y = y % 2n;
      y = Number(y);
      if (y === 0) y = 2;

      return x ** y % 10;
    }
    y = BigInt(y);
    y = y % 4n;
    y = Number(y);
    if (y === 0) y = 4;
    return x ** y % 10;
  }
  if(BigInt(B) === 0n && BigInt(A) === 0n) return 0;
  if (BigInt(B) === 0n) return 1;

  return find(Number(A[A.length - 1]), B);
    }
};

