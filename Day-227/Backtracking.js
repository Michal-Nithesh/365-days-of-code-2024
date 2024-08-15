module.exports = { 
    //param a : string
    //return an integer
	isValid : function(a){
	    var temp = null;
    var stream = a.split("");
    var stack = [];
    for (var i = 0; i < a.length; i++) {
        if ((a[i] === "{") || (a[i] === "[") || (a[i] === "(")) {
            stack.push(a[i]);
        } else {
            if ((a[i] === "]" || a[i] === "}" || a[i] === ")") && stack.length === 0) {
                return 0;
            } else if (((a[i] === "}") && stack[stack.length - 1] === "{") || ((a[i] === "]") && stack[stack.length - 1] === "[") || ((a[i] === ")") && stack[stack.length - 1] === "(")) {
                stack.pop();
            }else{
             return 0;
            }
        }
    }

    if (stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
	}
};
