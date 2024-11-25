module.exports = { 
   //param a : integer
   //param b : integer
    //return an integer
	uniquePaths : function(a, b){

  var i = 0, j = 0;

  var m = new Array( b );
  for( i = 0; i < b; i++ ) {
    m[i] = new Array( a, 0 );
  }
  for( i = 0; i < b; i++ ) {
    for( j = 0; j < a; j++ )
      m[i][j] = 0;
  }
  m[0][0] = 1;
  for( i = 0; i < b; i++ ) {
    for( j = 0; j < a; j++ ) {
      if( i > 0 )
        m[i][j] += m[i-1][j];
      if( j > 0 )
        m[i][j] += m[i][j-1];
    }
  }

  return m[b-1][a-1];
	}
};
