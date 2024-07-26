// Definition for singly-linked list.
//    function Node(data){
//         this.data = data
//         this.next = null
//}

module.exports = { 
    //param a : head node of linked list
    //param b : head node of linked list
    //return the head node in the linked list
	mergeTwoLists : function(a, b){
	    var result = new Node(1);
        var head = result;
        while (a != null && b != null) {
            if (a.data >= b.data) {
                var nextB = b.next;
                result.next = b;
                b.next = null;
                b = nextB;
            } else {
                var nextA = a.next;
                result.next = a;
                a.next = null;
                a = nextA;
                
            }
            result = result.next;
        }
        if (a != null) result.next = a;
        if (b != null) result.next = b;
        return head.next;
	}
};
