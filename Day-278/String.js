module.exports = { 
    //param a : array of strings
    //return a string
	longestCommonPrefix : function(s){
  if( !s.length )
    return '';

  var prefix = s[0].length;
  for( var k = 0; k < s.length-1; k++ ) {
    var i = 0, j = 0;
    var maxi = Math.min( s[k].length, prefix );
    var maxj = Math.min( s[k+1].length, prefix );
    while( i < maxi && j < maxj && s[k][i] === s[k+1][j] ) {
      i++;
      j++;
    }
    prefix = i;
    if( !i )
      break;
  }

  return s[0].slice( 0, prefix );
	}
};
