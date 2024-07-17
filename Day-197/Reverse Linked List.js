// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = { 
	//param A : head node of linked list
	//return the head node in the linked list
	reverseList : function(A){
        var previousNode = null;
        var currentNode = A;
        var nextNode = null;
        
        while(currentNode != null) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode
        }
        
        return previousNode;
	}
};
