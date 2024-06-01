module.exports = { 
 //param A : string
 //return a array of integers
	solve : function(A){
       let string = A.split(',');
       let int = string.map(strings => 
       parseInt(strings.trim(),10))
       return int; 
	}
};
