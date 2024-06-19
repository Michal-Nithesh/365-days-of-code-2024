module.exports = { 
   //param a : integer
    //return a string
	findDigitsInBinary : function( num){
 
  var binstr = '';
  var curr = 1;
  while( curr <= num ) {
    if( num&curr ) {
      binstr += '1';
    } else {
      binstr += '0';
    }
    curr <<=1;
  }
  if( !num ) binstr = '0';
  return binstr.split( "").reverse().join( "");
	}
};
