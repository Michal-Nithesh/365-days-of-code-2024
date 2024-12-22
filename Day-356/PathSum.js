// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //param B : integer
 //return an integer
    hasPathSum : function(A, B){
        if (!A) return 0;
        
        return helper(A, B) ? 1 : 0;
        
        function helper(node, target) {
            if (!node.left && !node.right) return node.data === target;

            target -= node.data;

            return (node.left && helper(node.left, target)) ||
                (node.right && helper(node.right, target ));
            
        }

    }
};

