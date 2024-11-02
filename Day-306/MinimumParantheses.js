module.exports = { 
    //param A : string
    //return an integer
    solve : function(A) {
        const singles = A.split('').reduce((stack, val) => {
            if (val === '(') {
                stack.push(val);
            } else if (stack.length && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(val);
            }
            return stack;
        }, []);
        return singles.length;  // Corrected 'Length' to 'length'
    }
};
