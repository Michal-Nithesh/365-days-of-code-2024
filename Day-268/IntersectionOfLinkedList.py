# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # @param A : head node of linked list
    # @param B : head node of linked list
    # @return the head node in the linked list
    def getIntersectionNode(self, A, B):
        # Calculate the lengths of both linked lists
        def getLength(head):
            length = 0
            while head:
                length += 1
                head = head.next
            return length
        
        lenA = getLength(A)
        lenB = getLength(B)
        
        # Align the start of both linked lists
        while lenA > lenB:
            A = A.next
            lenA -= 1
        while lenB > lenA:
            B = B.next
            lenB -= 1
        
        # Traverse both lists simultaneously to find the intersection node
        while A and B:
            if A == B:
                return A
            A = A.next
            B = B.next
        
        return None
