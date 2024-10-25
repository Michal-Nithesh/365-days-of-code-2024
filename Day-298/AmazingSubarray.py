class Solution:
    # @param A : string
    # @return an integer
    def solve(self, A):
        n=len(A)
        v=["A","E","i","O","U","a","e","I","o","u"]
        count=0
        for i in range(len(A)):
            if A[i] in v:
                count+=(n-i)
        return count%10003
