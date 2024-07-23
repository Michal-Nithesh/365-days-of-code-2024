// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //return the head node in the linked list
	deleteDuplicates : function(A){
		if(A == null){
			return A;
		}
		let current = A;
		while (current.next !== null){
			if (current.data === current.next.data){
				current.next = current.next.next;
			} else {
				current = current.next;
			}
		}
		return A
	}
};
