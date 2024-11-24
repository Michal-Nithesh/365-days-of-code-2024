module.exports = { 
   //param a : integer
    //return an integer
	trailingZeroes : function(n){
	var zeros = 0;
  for( var i = 5; i <= n; i*=5 ) {
    zeros += Math.floor( n/i );
  }

  return zeros;
	}
};
