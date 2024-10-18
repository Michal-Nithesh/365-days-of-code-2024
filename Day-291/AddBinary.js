module.exports = { 
    //param a : string
    //param b : string
    //return a string
	addBinary : function(s1, s2){

  var rbs = '';
  var i = s1.length-1, j = s2.length-1;
  var carry = 0;
  var code0 = '0'.charCodeAt( 0 );
  while( i >= 0 || j >= 0 ) {
    var rb = 0;
    if( i >= 0 )
      rb += s1.charCodeAt( i )-code0;
    if( j >= 0 )
      rb += s2.charCodeAt( j )-code0;
    i--; j--;
    rb += carry;
    carry = 0;
    if( rb > 1 )
      carry = 1;
    rb = rb%2;
    rbs += String.fromCharCode( rb + code0 );
  }

  if( carry )
    rbs += '1';
  return rbs.split( "" ).reverse().join( "" );
	}
};
