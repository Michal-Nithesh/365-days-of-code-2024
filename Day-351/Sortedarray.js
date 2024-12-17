// Definition for a binary tree node 
// function TreeNode(data){ 
// this.data = data 
// this.left = null 
// this.right = null 
// } 
module.exports = { 
    /** * param A: list of integer 
    * return: root node of balanced BST 
    */ 
    sortedArrayToBST: function (A) { 
        function constructTree(arr, start, end){ 
            if(start > end) return null; 
            var mid = parseInt((start+end)/2); 
            const node = new TreeNode(); 
            node.data = arr[mid]; 
            node.val = arr[mid]; 
            if(start == end) return node;
            node.left = constructTree( arr, start, mid-1); 
            node.right = constructTree( arr, mid+1, end); 
            return node; 
        } 
        return constructTree(A, 0, A.length-1); 
    }, 
};
