import heapq

class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def solve(self, A, B):
        cost = 0
        A = [-el for el in A]
        heapq.heapify(A)

        for i in range(B):
            smallest = A[0]
            heapq.heapreplace(A, A[0] + 1)
            cost += abs(smallest)
        
        return cost
