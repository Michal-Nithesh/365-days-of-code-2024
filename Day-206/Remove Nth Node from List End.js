// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //param B : integer
 //return the head node in the linked list
	removeNthFromEnd : function(A, B){
		let first = A;
        let second = A;
        for (let i = 0; i < B; i++) {
            if (first.next === null) {
                return A.next;
            }
            first = first.next;
        }
        while (first.next !== null) {
            first = first.next;
            second = second.next;
        }
        second.next = second.next.next;
		return A;
	}
};
