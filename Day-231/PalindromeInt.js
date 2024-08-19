module.exports = { 
   //param a : integer
    //return an integer
	isPalindrome : function(n){

  if( n < 0 )
    return 0;
  if( !n )
    return 1;

  var on = n;
  var rn = 0;
  var rem;
  while( n > 0 ) {
    rem = n%10;
    rn *= 10;
    rn += rem;
    n -= rem;
    n /= 10;
  }
  //console.log( rn, n );
  return on === rn ? 1 : 0;
	}
};
