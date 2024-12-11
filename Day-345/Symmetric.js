// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return an integer
    isSymmetric : function(A){
        
        function copyTree(A){
            if(A === null)
                return null;
                
            let node = new TreeNode(A.data);
            node.left = copyTree(A.left);
            node.right = copyTree(A.right);
            return node;
        }
        
        var B = copyTree(A);
        
        function match(A,B){
            if(A == null && B == null)
                return true;
            else if( A == null || B == null )
                return false;
                
            let m1 = match(A.left,B.right);
            let m2 = match(A.right,B.left);
            
            return m1 && m2 && (A.data == B.data);
        }
        
        return (match(A,B) == true) ? 1 : 0;
    }
};

