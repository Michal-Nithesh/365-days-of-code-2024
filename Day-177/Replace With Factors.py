# Definition for singly-linked list.
# class ListNode:
#    def __init__(self, x):
#        self.val = x
#        self.next = None

class Solution:
    # @param A : head node of linked list
    # @param B : integer
    # @return the head node in the linked list
    def solve(self, A, B):
        ans = A
        while(A != None):
            x = A.val
            x = B*((x)//B)
            A.val = x
            A = A.next
        return ans
