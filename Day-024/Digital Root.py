class Solution:
    # @param A : integer
    # @return an integer
    def solve(self, A):
        if A < 10:
            return A
        while A >= 10:
            A = [int(i) for i in str(A)]
            A = sum(A)
        return A    
