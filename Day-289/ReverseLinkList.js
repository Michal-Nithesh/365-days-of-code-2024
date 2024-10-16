// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //return the head node in the linked list
    reverseList : function(A){
        function rev(curr, prev) {
            if (curr) {
                var t = curr.next;
                curr.next = prev;
                prev = curr;
                curr = t;
                prev = rev(curr, prev);
            }
            return prev;
        }
        return rev(A, null);
    }
};

