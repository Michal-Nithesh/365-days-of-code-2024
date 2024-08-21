function isPrime( num ) {
  var high = Math.floor( Math.sqrt( num ) );
  for( var i = 2; i <= high; i++ ) {
    if( num%i === 0 )
      return 0;
  }
  return 1;
}

module.exports = { 
   //param a : integer
    //return a list of integers
	primesum : function(a){
        var mid = Math.floor( a/2 );
        if( mid < 2 )
            return [];
            
        for( var i = 2; i <= mid; i++ ) {
            if( isPrime( i ) && isPrime( a-i ) )
                return [ i, a-i ];
        }
        
        return [];
	}
};
