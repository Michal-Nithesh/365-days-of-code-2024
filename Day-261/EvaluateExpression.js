module.exports = { 
	//param A : array of strings
	//return an integer
	evalRPN : function(A){
        var stack=[];
	for(var i=0;i<A.length;i++){
		if((A[i]==="*")||(A[i]==="+")||(A[i]==="/")||(A[i]==="-")){
			var num2="("+stack.pop()+")";
			var num1="("+stack.pop()+")";
			stack.push(eval(num1+A[i]+num2));
		}
		else{
			stack.push(A[i])
		}
	}	
	return parseInt(stack[0]);
	}
};
