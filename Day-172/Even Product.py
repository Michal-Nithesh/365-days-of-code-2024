class Solution:
    # @param A : list of integers
    # @return an integer
    def solve(self, A):
        x = 1
        for i in range(1, len(A) + 1):
            x = (x * 2) % 1000000007
        return x - 1
        
