// Definition for a  binary tree node
//     function TreeNode(data){
//         this.data = data
//         this.left = null
//         this.right = null
//}

module.exports = { 
    //param a : root node of tree
    //param b : root node of tree
    //return an integer
	isSameTree : function(a, b){
	    var recF = function(rootA, rootB){
	        if(rootA === null && rootB === null)
	        {
	            return true;
	        }
	        else if(rootA === null || rootB === null)
	        {
	            return false;
	        }
	        else
	        {
	            return rootA.data === rootB.data && recF(rootA.left, rootB.left) && recF(rootA.right, rootB.right);
	        }
	    };
	    return recF(a,b) ? 1 : 0;
	}
};
