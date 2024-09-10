// Definition for singly-linked list.
function Node(data) {
    this.data = data;
    this.next = null;
}

module.exports = { 
    // param A : head node of linked list
    // return the head node in the linked list
    swapPairs: function(A) {
        if (!A || !A.next) return A;

        let dummy = new Node(0);
        dummy.next = A;
        let current = dummy;

        while (current.next && current.next.next) {
            let first = current.next;
            let second = current.next.next;

            // Swapping nodes
            first.next = second.next;
            current.next = second;
            current.next.next = first;

            // Move to the next pair
            current = current.next.next;
        }

        return dummy.next;
    }
};
