// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return an integer
    solve : function(A){
        TreeNode.prototype.maxSumLevel = function() {
            var maxLevelSum = -Infinity;
            var currentStack = [];
            var nextStack = [];
            currentStack.push(this);
            nextStack.push(this);
            
            while (nextStack.length != 0) {
                var maxSum = 0;
                nextStack = [];
                while (currentStack.length != 0 ){
                    var item = currentStack.pop();
                    maxSum += item.data;
                    if (item.left) {
                        nextStack.push(item.left);
                    }
                    if (item.right) {
                        nextStack.push(item.right);
                    }     
                }
                maxLevelSum = Math.max(maxLevelSum, maxSum);
                currentStack = nextStack;    
            }
            
            
            return maxLevelSum;
        }
        
        
        return A.maxSumLevel();
    }
};

